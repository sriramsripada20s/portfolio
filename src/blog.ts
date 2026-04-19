import type { BlogPost } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'dbt-incremental-models-snowflake',
    title: 'dbt Incremental Models on Snowflake: Patterns That Actually Work in Production',
    excerpt: 'After building 40+ dbt models processing 5M+ daily records on Snowflake, here are the incremental strategies that save compute cost and keep your pipelines reliable.',
    category: 'Data Engineering',
    tags: ['dbt', 'Snowflake', 'Data Engineering', 'SQL'],
    readTime: '8 min read',
    date: 'March 2025',
    content: [
      { type: 'header', content: 'Why Incremental Models Matter' },
      { type: 'paragraph', content: 'When you\'re processing millions of records daily, full table refreshes become expensive fast. On Snowflake, compute cost scales linearly with data scanned. At MyBambu, switching from full-refresh to incremental models cut our daily warehouse compute by over 40% — without touching a single business logic line.' },
      { type: 'subheader', content: 'The Three Incremental Strategies' },
      { type: 'list', content: ['append — fastest, no deduplication, append-only tables', 'delete+insert — partition-level replacement, good for late-arriving data', 'merge — most flexible, upserts on unique keys, most expensive'] },
      { type: 'subheader', content: 'The Pattern I Use Most' },
      { type: 'code', content: { language: 'sql', title: 'stg_transactions.sql — incremental with merge', code: `{{
  config(
    materialized='incremental',
    unique_key='transaction_id',
    incremental_strategy='merge',
    cluster_by=['transaction_date']
  )
}}

WITH source AS (
  SELECT * FROM {{ source('raw', 'transactions') }}
  {% if is_incremental() %}
    WHERE _loaded_at >= (SELECT MAX(_loaded_at) FROM {{ this }})
  {% endif %}
),

cleaned AS (
  SELECT
    LOWER(TRIM(transaction_id))  AS transaction_id,
    customer_id,
    amount,
    transaction_date,
    _loaded_at
  FROM source
  QUALIFY ROW_NUMBER() OVER (
    PARTITION BY LOWER(TRIM(transaction_id))
    ORDER BY _loaded_at DESC
  ) = 1
)

SELECT * FROM cleaned` } },
      { type: 'callout', content: { icon: '⚠️', title: 'Watch out for late-arriving data', text: 'If your source systems backfill data older than your incremental watermark, you\'ll miss those records. Use a lookback window: `WHERE _loaded_at >= DATEADD(hour, -6, (SELECT MAX(_loaded_at) FROM {{ this }}))` to catch stragglers.' } },
      { type: 'header', content: 'Clustering Keys: The Snowflake Multiplier' },
      { type: 'paragraph', content: 'Incremental models + clustering keys is the combo that unlocks real Snowflake performance. Snowflake micro-partitions are pruned based on cluster key ranges — so if your incremental filter matches your cluster key, Snowflake scans only the relevant micro-partitions, not the whole table.' },
      { type: 'metrics', content: [{ label: 'Compute Cost Reduction', value: '40%' }, { label: 'Query P95 Latency', value: '-55%' }, { label: 'Models Migrated', value: '28' }] },
      { type: 'header', content: 'Testing Incremental Logic' },
      { type: 'paragraph', content: 'Always test your incremental logic before production. I use a two-step process: run with `--full-refresh` to establish a baseline, then run incrementally and compare row counts and key metrics between the two. Any divergence signals a bug in your watermark logic.' },
    ],
  },
  {
    id: '2',
    slug: 'fraud-detection-mlops-lessons',
    title: 'Building a Fraud Detection MLOps Pipeline: Lessons from Production',
    excerpt: 'What I learned shipping an XGBoost fraud model to AWS SageMaker with FastAPI, Docker, and GitHub Actions CI/CD — including the failures that almost broke everything.',
    category: 'Machine Learning',
    tags: ['MLOps', 'XGBoost', 'AWS SageMaker', 'FastAPI', 'Python'],
    readTime: '10 min read',
    date: 'February 2025',
    content: [
      { type: 'header', content: 'The Problem With Most ML Projects' },
      { type: 'paragraph', content: 'Most data scientists build great models that never make it to production. The notebook works, the accuracy looks good in cross-validation, and then the model sits on a laptop forever. I\'ve been that person. Building the fraud detection pipeline at MyBambu forced me to learn MLOps the hard way.' },
      { type: 'header', content: 'Architecture Overview' },
      { type: 'list', content: ['Data ingestion from Snowflake → feature engineering → training in SageMaker', 'MLflow for experiment tracking and model registry', 'FastAPI scoring endpoint containerized with Docker', 'GitHub Actions: lint → test → build → push to ECR → deploy to SageMaker', 'CloudWatch for endpoint monitoring and drift detection'] },
      { type: 'code', content: { language: 'python', title: 'scoring_endpoint.py — FastAPI fraud scorer', code: `from fastapi import FastAPI
from pydantic import BaseModel
import mlflow.pyfunc
import pandas as pd

app = FastAPI()
model = mlflow.pyfunc.load_model("models:/fraud_detector/Production")

class Transaction(BaseModel):
    transaction_id: str
    amount: float
    merchant_category: str
    hour_of_day: int
    # ... feature columns

@app.post("/score")
async def score_transaction(txn: Transaction):
    features = pd.DataFrame([txn.dict()])
    risk_score = model.predict(features)[0]
    
    return {
        "transaction_id": txn.transaction_id,
        "risk_score": float(risk_score),
        "flag": risk_score > 0.85,
        "risk_band": "HIGH" if risk_score > 0.85 else "MEDIUM" if risk_score > 0.5 else "LOW"
    }` } },
      { type: 'callout', content: { icon: '💡', title: 'The failure that taught me the most', text: 'We had a feature in training that wasn\'t available at inference time (a 7-day rolling average that required historical lookups). The model deployed fine, failed silently on missing features, and defaulted to low-risk scores for everything. Always validate your inference features against your training schema.' } },
      { type: 'header', content: 'Model Monitoring in Production' },
      { type: 'paragraph', content: 'Accuracy metrics from training mean nothing 6 months later. Fraud patterns shift — new attack vectors, new merchant categories, seasonal spikes. I set up CloudWatch metrics on: prediction score distribution, flag rate per day, feature null rates, and endpoint latency. Any of these drifting beyond 2 standard deviations triggers a retrain.' },
      { type: 'metrics', content: [{ label: 'Fraud Flagged', value: '$4.2M' }, { label: 'Model AUC', value: '0.94' }, { label: 'Retraining Frequency', value: 'Monthly' }, { label: 'Latency P99', value: '<120ms' }] },
    ],
  },
  {
    id: '3',
    slug: 'snowflake-architecture-cost-optimization',
    title: 'Snowflake Architecture Decisions That Actually Move the Cost Needle',
    excerpt: 'Virtual warehouse sizing, clustering keys, micro-partition pruning, and result caching — the Snowflake levers that cut our monthly bill by 35% without compromising performance.',
    category: 'Data Engineering',
    tags: ['Snowflake', 'Cost Optimization', 'Architecture', 'SQL'],
    readTime: '7 min read',
    date: 'January 2025',
    content: [
      { type: 'header', content: 'Snowflake Costs Are Compute Costs' },
      { type: 'paragraph', content: 'Every dollar you spend on Snowflake is a credit — and credits burn when warehouses run. The fastest way to cut cost is to run less compute. That sounds obvious, but it means: right-sizing warehouses, maximizing cache hits, and ensuring queries prune micro-partitions aggressively.' },
      { type: 'subheader', content: 'Warehouse Sizing: The Common Mistake' },
      { type: 'paragraph', content: 'Most teams over-provision. An XL warehouse costs 8x an XS. For most analytical queries on well-clustered tables, an S or M warehouse is sufficient. I ran a 2-week experiment at MyBambu: same queries on XS vs M warehouse. The M finished 18% faster but cost 4x more. The XS was the right choice for our SLA.' },
      { type: 'code', content: { language: 'sql', title: 'Query profile to check partition pruning', code: `-- Check how many micro-partitions are being scanned
-- Run EXPLAIN or look at Query Profile in Snowsight

-- Good: pruning active
SELECT * FROM transactions
WHERE transaction_date BETWEEN '2024-01-01' AND '2024-01-31'
  AND customer_id = 'CUST_001';
-- With transaction_date as cluster key → scans ~5% of partitions

-- Bad: no pruning
SELECT * FROM transactions
WHERE MONTH(transaction_date) = 1;
-- Function on column bypasses clustering → full scan` } },
      { type: 'callout', content: { icon: '🏆', title: 'The highest-ROI optimization', text: 'Enable result caching and set STATEMENT_TIMEOUT_IN_SECONDS on your warehouses. Result cache is free — repeated identical queries return in milliseconds at $0. Timeout prevents runaway queries from burning credits for hours.' } },
      { type: 'metrics', content: [{ label: 'Monthly Cost Reduction', value: '35%' }, { label: 'Cache Hit Rate', value: '68%' }, { label: 'Warehouse Downsize', value: 'XL → M' }] },
    ],
  },
  {
    id: '4',
    slug: 'analytics-engineering-vs-data-engineering',
    title: 'Analytics Engineering vs Data Engineering: Where the Line Actually Is',
    excerpt: 'After working across both roles at a fintech startup, here\'s how I think about the boundary — and why the overlap is exactly where the most interesting work happens.',
    category: 'Career',
    tags: ['Analytics Engineering', 'Data Engineering', 'Career', 'dbt'],
    readTime: '6 min read',
    date: 'December 2024',
    content: [
      { type: 'header', content: 'The Roles Are Converging' },
      { type: 'paragraph', content: 'Three years ago, analytics engineers were rare. Today every job board has the title, and every data team is debating whether they need one. The confusion is real because the tools have converged — dbt, Snowflake, and Python are used by both disciplines. The difference is in focus, not tools.' },
      { type: 'subheader', content: 'How I Think About the Split' },
      { type: 'list', content: ['Data Engineer: infrastructure, pipelines, ingestion, reliability, latency, compute cost', 'Analytics Engineer: data modeling, business logic in SQL, metric definitions, BI layer', 'The overlap: dbt, Snowflake, quality testing, documentation'] },
      { type: 'paragraph', content: 'At MyBambu I wore both hats. On Mondays I was fixing Snowflake Streams/Tasks for our CDC pipeline (data engineering). On Tuesdays I was refining dbt Gold models because the product team\'s churn definition changed (analytics engineering). In a small team, this is normal — and it\'s actually a career advantage.' },
      { type: 'callout', content: { icon: '🎯', title: 'The skill that bridges both', text: 'Deep SQL + Snowflake knowledge. A data engineer who writes excellent SQL and understands dimensional modeling can do analytics engineering. An analytics engineer who understands query execution, warehouse sizing, and cost optimization can do data engineering. The bridge is caring about both the data AND the infrastructure it runs on.' } },
      { type: 'header', content: 'My Recommendation for Job Seekers' },
      { type: 'paragraph', content: 'Don\'t get too attached to the title. Target roles where the JD mentions dbt + Snowflake + Python and has impact metrics in the bullets. Those teams care about outcomes, not org chart purity. The "analytics engineer" title often pays as well as senior data engineer — and the work is more interesting.' },
    ],
  },
];
