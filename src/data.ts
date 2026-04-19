import type { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'fraud-detection-mlops',
    title: 'FRAUD DETECTION MLOPS',
    subtitle: 'End-to-end ML pipeline for real-time transaction fraud scoring',
    domain: ['ML / AI', 'Data Engineering'],
    description: 'Production-grade fraud detection system built on IEEE-CIS Kaggle dataset. XGBoost model deployed via FastAPI + Docker on AWS SageMaker with full CI/CD pipeline, MLflow experiment tracking, and real-time scoring API.',
    longDescription: `Built a complete MLOps pipeline for transaction fraud detection.`,
    tech: ['Python', 'XGBoost', 'FastAPI', 'Docker', 'AWS SageMaker', 'MLflow', 'GitHub Actions', 'Scikit-learn'],
    metrics: [
      { label: 'Fraud Flagged', value: '$4.2M', color: 'cyan' },
      { label: 'Transactions Analyzed', value: '28K+', color: 'orange' },
      { label: 'Manual Retraining Reduction', value: '40%', color: 'violet' },
      { label: 'Model AUC', value: '0.94', color: 'yellow' },
    ],
    githubUrl: 'https://github.com/sriramsripada20s/fraud-detection-mlops',
    featured: true,
    year: '2024',
    tabs: [
      {
        label: 'Overview',
        icon: '⚡',
        sections: [
          {
            title: 'The Problem',
            content: 'Financial fraud costs billions annually. Legacy rule-based systems catch known patterns but miss novel attack vectors. MyBambu needed a real-time ML system that learns from transaction behavior and flags suspicious activity before money leaves the account.',
            bullets: [
              'Rule-based systems missing novel fraud patterns',
              'No real-time scoring — fraud detected hours after the fact',
              'Manual retraining pipeline taking days to update the model',
              'No experiment tracking — impossible to reproduce past results',
            ],
          },
          {
            title: 'The Solution',
            content: 'Built an end-to-end MLOps pipeline from raw transaction data to a live REST API — with automated retraining, experiment tracking, and full CI/CD deployment on AWS SageMaker.',
            bullets: [
              'XGBoost classifier trained on 60+ engineered behavioral features',
              'FastAPI scoring endpoint serving predictions in under 120ms P99',
              'MLflow tracking every experiment — metrics, parameters, artifacts',
              'GitHub Actions CI/CD — commit triggers lint, test, build, deploy',
            ],
          },
        ],
      },
      {
        label: 'Architecture',
        icon: '🏗️',
        sections: [
          {
            title: 'Pipeline Architecture',
            content: 'Five-stage pipeline from raw data to production API — each stage independently testable and replaceable.',
            bullets: [
              'Data Ingestion — raw IEEE-CIS transaction data from Snowflake',
              'Feature Engineering — 60+ behavioral, temporal, and velocity features',
              'Model Training — XGBoost with hyperparameter tuning via Optuna',
              'Model Registry — MLflow tracks all experiments, promotes best model to Production',
              'Serving — FastAPI container deployed on SageMaker endpoint',
            ],
          },
          {
            title: 'MLOps Stack',
            content: 'Production-grade tooling at every layer of the pipeline.',
            bullets: [
              'AWS SageMaker — managed training jobs and real-time inference endpoints',
              'MLflow — experiment tracking, model registry, artifact storage',
              'Docker — reproducible training and serving containers',
              'GitHub Actions — CI/CD from commit to SageMaker deployment',
              'CloudWatch — endpoint latency, error rate, and drift monitoring',
            ],
          },
        ],
      },
      {
        label: 'Model Details',
        icon: '🤖',
        sections: [
          {
            title: 'Feature Engineering',
            content: '60+ features engineered from raw transaction fields — capturing behavioral signals, velocity patterns, and temporal anomalies.',
            bullets: [
              'Velocity features — transaction count and amount in last 1h, 24h, 7d windows',
              'Behavioral features — typical merchant categories, device fingerprints, geolocation',
              'Temporal features — hour of day, day of week, time since last transaction',
              'Card features — unique cards used in 30 days, international transaction ratio',
              'Aggregated risk signals — chargeback history, failure rate, night activity ratio',
            ],
          },
          {
            title: 'Model Performance',
            content: 'XGBoost classifier optimized for precision-recall tradeoff — minimizing false negatives without flooding operations with false positives.',
            bullets: [
              'AUC-ROC: 0.94 on held-out test set',
              'Precision at 85% threshold: 0.91',
              'Recall at 85% threshold: 0.87',
              'Inference latency: <120ms P99 on SageMaker endpoint',
              'Monthly retraining cadence with automatic promotion if AUC improves',
            ],
          },
        ],
      },
      {
        label: 'Results',
        icon: '📊',
        sections: [
          {
            title: 'Production Impact',
            content: 'Deployed to production at MyBambu with measurable impact on fraud operations and engineering efficiency.',
            bullets: [
              '$4.2M in high-risk transactions flagged across 28K+ scored transactions',
              '40% reduction in manual retraining effort through automated MLflow pipelines',
              '0.94 AUC — outperforming the previous rule-based system by 23 points',
              'Sub-120ms P99 inference latency — real-time scoring at transaction time',
            ],
          },
          {
            title: 'Engineering Wins',
            content: 'Beyond fraud metrics — the infrastructure improvements that make the system maintainable.',
            bullets: [
              'Full experiment reproducibility — any past model can be re-deployed in minutes',
              'Zero-downtime deployments via SageMaker blue/green endpoint updates',
              'Automated CI/CD — a new model version deploys in ~8 minutes from merge',
              'CloudWatch alarms trigger retraining when score distribution drifts',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    slug: 'snowflake-cortex-ai-agent',
    title: 'SNOWFLAKE CORTEX AI AGENT',
    subtitle: 'Conversational BI powered by Snowflake Cortex + Claude LLM',
    domain: ['ML / AI', 'Analytics'],
    description: 'Built a natural-language BI agent integrating Snowflake Cortex with Claude LLM via LangChain. Business users query dashboards in plain English — the agent translates to SQL, executes on Snowflake, and returns insights in seconds.',
    longDescription: `Conversational BI agent eliminating the bottleneck between business teams and data.`,
    tech: ['Snowflake Cortex', 'Claude LLM', 'LangChain', 'Python', 'FastAPI', 'Snowflake', 'SQL'],
    metrics: [
      { label: 'Insight Turnaround Reduction', value: '65%', color: 'cyan' },
      { label: 'Teams Unblocked', value: '4+', color: 'orange' },
      { label: 'Query Accuracy', value: '92%', color: 'violet' },
    ],
    featured: true,
    year: '2024',
    tabs: [
      {
        label: 'Overview',
        icon: '⚡',
        sections: [
          {
            title: 'The Problem',
            content: 'Business teams at MyBambu waited days for data requests. The analytics team was a bottleneck — every question about churn, revenue, or fraud required a ticket, a query, and a dashboard. Non-technical stakeholders had no way to self-serve.',
            bullets: [
              'Every business question required an analyst to write SQL',
              'Insight turnaround averaging 2-3 days per request',
              'Product, finance, and ops teams blocked on data',
              'Analysts spending 60% of time on ad-hoc requests instead of deep analysis',
            ],
          },
          {
            title: 'The Solution',
            content: 'A conversational BI agent that lets any team member type a question in plain English and get an answer backed by live Snowflake data — in seconds, not days.',
            bullets: [
              'Natural language input translated to SQL by Claude LLM',
              'SQL executed directly against Snowflake Gold tables via Cortex',
              'Results formatted and returned as structured insights',
              'No analyst required — business teams self-serve 24/7',
            ],
          },
        ],
      },
      {
        label: 'Architecture',
        icon: '🏗️',
        sections: [
          {
            title: 'System Design',
            content: 'Three-layer architecture — LangChain orchestration, Snowflake Cortex as the execution engine, and Claude LLM for natural language understanding.',
            bullets: [
              'User inputs plain English question via Slack or web interface',
              'LangChain routes the query to Claude LLM for SQL generation',
              'Claude uses schema context (table/column descriptions) to write accurate SQL',
              'Snowflake Cortex executes the query against Gold tables',
              'Results returned and formatted as natural language + data table',
            ],
          },
          {
            title: 'Context & Accuracy',
            content: 'The agent achieves 92% query accuracy through rich schema context injection — Claude knows exactly what each table and column means.',
            bullets: [
              'dbt docs exported as schema context — all 22 models with column descriptions',
              'Business glossary injected into every prompt — "churn", "active customer" defined',
              'Query history used for few-shot examples in complex joins',
              'Fallback to analyst queue for ambiguous or sensitive queries',
            ],
          },
        ],
      },
      {
        label: 'Results',
        icon: '📊',
        sections: [
          {
            title: 'Business Impact',
            content: 'Deployed to 4+ business teams at MyBambu — product, finance, operations, and marketing.',
            bullets: [
              '65% reduction in insight turnaround — from days to seconds',
              '4+ teams unblocked from analytics bottleneck',
              '92% NL query accuracy on business questions',
              'Analyst team freed from ad-hoc requests to focus on strategic work',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '3',
    slug: 'customer-360-dbt-snowflake',
    title: 'CUSTOMER 360 PLATFORM',
    subtitle: 'dbt medallion architecture on Snowflake — 5M+ daily records',
    domain: ['Data Engineering', 'Analytics'],
    description: 'End-to-end customer segmentation and RFM analytics platform. dbt medallion architecture processes 5M+ daily records on Snowflake with full data contracts, 263 automated tests, composite scoring, and CI/CD via GitHub Actions.',
    longDescription: `End-to-end customer data platform on Snowflake and dbt.`,
    tech: ['dbt', 'Snowflake', 'Snowpipe', 'GitHub Actions', 'Python', 'Snowpark ML', 'Sigma', 'Power BI'],
    metrics: [
      { label: 'Daily Records Processed', value: '5M+', color: 'cyan' },
      { label: 'dbt Models', value: '22', color: 'orange' },
      { label: 'Automated Tests', value: '263', color: 'violet' },
      { label: 'Composite Scores', value: '3', color: 'yellow' },
    ],
    featured: true,
    year: '2024',
    tabs: [
      {
        label: 'Overview',
        icon: '⚡',
        sections: [
          {
            title: 'The Business Problem',
            content: 'A fintech neobank serving 50,000+ customers had data sitting in silos. Transactions, sessions, campaigns, and orders never talked to each other — resulting in generic marketing, reactive fraud detection, and no unified customer view.',
            bullets: [
              'No unified view of who each customer was',
              'Generic marketing sent to all customers equally',
              'Fraud discovered after the money was already lost',
              'Every team working from different numbers',
            ],
          },
          {
            title: 'The Solution',
            content: 'A 5-layer medallion data platform on Snowflake powered by dbt — transforming 7 raw source tables into a unified Customer 360 profile with composite scoring for value, churn risk, and personalization.',
            bullets: [
              '22 dbt models across 5 layers with full data contracts',
              '263 automated tests running on every build',
              'One row per customer combining RFM, sessions, campaigns, payments, and fraud signals',
              'Three composite scores computed directly in SQL',
            ],
          },
        ],
      },
      {
        label: 'Architecture',
        icon: '🏗️',
        sections: [
          {
            title: '5-Layer Medallion Architecture',
            content: 'Each layer has a clear purpose and strict contracts — no business logic bleeds between layers.',
            bullets: [
              'RAW — raw data landed from S3 via Snowpipe, untouched',
              'STAGING — cleaned, deduplicated, standardized with no business logic',
              'INTERMEDIATE — business joins and aggregations as ephemeral models',
              'MART — analytics-ready fact and dimension tables',
              'FEATURES — ML-ready normalized feature tables for Snowpark',
            ],
          },
          {
            title: 'Data Sources',
            content: '7 source tables ingested into Snowflake RAW via Snowpipe with Streams + Tasks for near-real-time CDC updates.',
            bullets: [
              'customers — demographics, loyalty tier, signup date',
              'orders — purchase history, channel, order status',
              'order_items — product-level detail, categories, discounts',
              'transactions — payment events, device, location',
              'events — clickstream sessions, product views, cart activity',
              'campaigns — email/push/SMS responses and conversions',
              'products — catalog, pricing, category hierarchy',
            ],
          },
        ],
      },
      {
        label: 'dbt Models',
        icon: '🔧',
        sections: [
          {
            title: '22 Models — 4 Layers',
            content: 'Built with full data contracts, column-level documentation, and incremental loading patterns.',
            bullets: [
              'Staging (7 views) — one model per source, QUALIFY ROW_NUMBER() deduplication, type casting',
              'Intermediate (5 ephemeral) — RFM metrics, fraud signals, session features, payment signals, product affinity',
              'Mart (3 tables) — dim_customers, fct_orders, fct_customer_value (the Customer 360 table)',
              'Features (2 incremental) — feat_customer_segmentation and feat_fraud_behavior for ML',
            ],
          },
          {
            title: 'Customer 360 Output',
            content: 'fct_customer_value is the centrepiece — one row per customer combining all signals into three composite scores.',
            bullets: [
              'customer_value_score (0–100) — Recency 25pts + Frequency 25pts + Monetary 30pts + Engagement 20pts',
              'churn_risk_score (0–100) — Recency decline + Frequency drop + Discount dependency + Payment failures',
              'personalization_score (0–100) — How well the platform knows this customer',
              '7 fraud risk flags — geo velocity, rapid transactions, multiple cards, high chargebacks',
            ],
          },
        ],
      },
      {
        label: 'Data Quality',
        icon: '✅',
        sections: [
          {
            title: '263 Automated Tests',
            content: 'No model reaches production without passing all tests. Tests run on every build via GitHub Actions.',
            bullets: [
              'not_null and unique on all primary keys across every model',
              'accepted_values on status fields, loyalty tiers, device types, payment methods',
              'relationships tests ensuring referential integrity across dims and facts',
              'Custom singular tests: assert_no_duplicate_customers, assert_no_negative_revenue',
            ],
          },
        ],
      },
      {
        label: 'CI/CD',
        icon: '🚀',
        sections: [
          {
            title: 'GitHub Actions Pipeline',
            content: 'Automated pipeline runs on every push and pull request — catching errors before they reach the warehouse.',
            bullets: [
              'Installs dbt-snowflake and runs dbt deps on every trigger',
              'Writes profiles.yml securely from GitHub Secrets — no credentials in code',
              'Runs dbt compile to catch syntax and ref errors without hitting Snowflake',
              'Builds all 4 layers sequentially — staging → intermediate → marts → features',
              'All 263 tests run automatically — any failure blocks the merge',
              'Artifacts (manifest.json, run_results.json) saved 7 days for debugging',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '4',
    slug: 'churn-prediction-model',
    title: 'CHURN PREDICTION MODEL',
    subtitle: '85% accuracy customer churn model for fintech neobank',
    domain: ['ML / AI'],
    description: 'Supervised ML model predicting customer churn 30 days ahead with 85% accuracy. Built on Snowpark ML, integrating directly with the Snowflake data warehouse. Outputs feed into automated retention campaigns.',
    longDescription: `30-day ahead churn prediction on Snowpark ML.`,
    tech: ['Python', 'Snowpark ML', 'Snowflake', 'dbt', 'XGBoost', 'scikit-learn', 'MLflow'],
    metrics: [
      { label: 'Model Accuracy', value: '85%', color: 'cyan' },
      { label: 'Prediction Horizon', value: '30 days', color: 'orange' },
      { label: 'Features Engineered', value: '60+', color: 'violet' },
    ],
    featured: false,
    year: '2023',
    tabs: [
      {
        label: 'Overview',
        icon: '⚡',
        sections: [
          {
            title: 'The Problem',
            content: 'MyBambu was losing customers silently. By the time churn was detected — when a customer stopped transacting — it was too late for retention. The business needed early warning: predict churn 30 days before it happens.',
            bullets: [
              'No early warning system for at-risk customers',
              'Retention campaigns sent reactively after churn, not before',
              'No data-driven segmentation of churn risk levels',
              'Feature engineering done manually in Excel — not scalable',
            ],
          },
          {
            title: 'The Solution',
            content: 'A supervised XGBoost classifier trained on 60+ behavioral features, running natively inside Snowflake via Snowpark Python. Predictions written back to Gold tables and consumed by marketing automation.',
            bullets: [
              '85% accuracy predicting churn 30 days ahead',
              'Features engineered entirely in dbt — no separate feature store needed',
              'Model training and inference run inside Snowflake via Snowpark Python',
              'Output scores consumed by automated retention campaign triggers',
            ],
          },
        ],
      },
      {
        label: 'Model Details',
        icon: '🤖',
        sections: [
          {
            title: 'Feature Engineering — 60+ Features',
            content: 'All features built in dbt intermediate models — reusing the Customer 360 pipeline.',
            bullets: [
              'RFM signals — recency days, order frequency, revenue in 30/90 day windows',
              'Engagement signals — session frequency, cart abandon rate, email open rate',
              'Payment signals — failed transaction rate, chargeback count, refund rate',
              'Discount dependency — ratio of discounted orders to total orders',
              'Loyalty signals — tier rank, tenure days, campaign conversion rate',
            ],
          },
          {
            title: 'Training & Deployment',
            content: 'Model trained and served entirely inside Snowflake — no data movement, no external infrastructure.',
            bullets: [
              'Snowpark Python for training — data stays in Snowflake, no export needed',
              'XGBoost with 5-fold cross validation and Optuna hyperparameter tuning',
              'MLflow tracks every experiment — AUC, precision, recall, feature importance',
              'Monthly retraining scheduled via Snowflake Task',
              'Predictions written back to CUSTOMER_PLATFORM.MART.CUSTOMER_RISK_SCORES',
            ],
          },
        ],
      },
      {
        label: 'Results',
        icon: '📊',
        sections: [
          {
            title: 'Model Performance',
            bullets: [
              '85% accuracy on held-out test set',
              '30-day prediction horizon — actionable lead time for retention campaigns',
              '60+ features engineered from raw behavioral data',
              'Outputs feed automated retention campaigns via marketing platform',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '5',
    slug: 'nlp-topic-modeling-pipeline',
    title: 'NLP TOPIC MODELING',
    subtitle: 'Unsupervised Gensim LDA pipeline on AWS SageMaker',
    domain: ['ML / AI', 'Data Engineering'],
    description: 'Fully automated NLP topic modeling pipeline on AWS SageMaker using Gensim LDA. Scheduled via EventBridge, monitored with CloudWatch, and parameterized through SSM Parameter Store for zero-touch operation.',
    longDescription: `Fully automated NLP pipeline on AWS SageMaker.`,
    tech: ['Python', 'Gensim LDA', 'AWS SageMaker', 'EventBridge', 'CloudWatch', 'SSM Parameter Store', 'S3'],
    metrics: [
      { label: 'Topics Discovered', value: '15', color: 'cyan' },
      { label: 'Pipeline Uptime', value: '99.9%', color: 'orange' },
      { label: 'Manual Ops', value: '0', color: 'violet' },
    ],
    featured: false,
    year: '2024',
    tabs: [
      {
        label: 'Overview',
        icon: '⚡',
        sections: [
          {
            title: 'The Problem',
            content: 'Customer support and feedback text sat unanalyzed in S3. Manually categorizing thousands of messages was not scalable. The team needed automated topic discovery — running on a schedule with zero manual intervention.',
            bullets: [
              'Thousands of unstructured text records with no categorization',
              'Manual tagging taking hours per batch — not scalable',
              'No observability into when or why the pipeline failed',
              'Config changes (number of topics, preprocessing) required code deploys',
            ],
          },
          {
            title: 'The Solution',
            content: 'A fully automated Gensim LDA topic modeling pipeline on AWS SageMaker — scheduled, monitored, and configurable without touching code.',
            bullets: [
              'Gensim LDA discovers 15 topics from raw text data',
              'EventBridge schedules daily runs — zero manual triggers',
              'CloudWatch monitors pipeline health with alarms on failures',
              'SSM Parameter Store — change topics or preprocessing config without code deploys',
            ],
          },
        ],
      },
      {
        label: 'Architecture',
        icon: '🏗️',
        sections: [
          {
            title: 'Pipeline Design',
            content: 'Three-stage pipeline: ingest from S3, process in SageMaker, write results back to data lake.',
            bullets: [
              'S3 Source — raw text data partitioned by date',
              'SageMaker Processing Job — text preprocessing + Gensim LDA training',
              'S3 Output — topic assignments written back to data lake',
              'EventBridge — triggers daily at 02:00 UTC automatically',
              'CloudWatch — monitors job success/failure with SNS alerts',
              'SSM Parameter Store — num_topics, min_word_freq, passes stored as params',
            ],
          },
        ],
      },
      {
        label: 'Results',
        icon: '📊',
        sections: [
          {
            title: 'Production Outcomes',
            bullets: [
              '15 coherent topics discovered from customer feedback text',
              '99.9% pipeline uptime since production deployment',
              '0 manual operations required — fully hands-off',
              'Config changes (e.g. num_topics) take 30 seconds via SSM, no code deploy',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '6',
    slug: 'sigma-power-bi-dashboards',
    title: 'BI DASHBOARD SUITE',
    subtitle: 'Sigma + Power BI dashboards with RLS and live Snowflake queries',
    domain: ['BI', 'Analytics'],
    description: 'Suite of executive and operational dashboards built in Sigma Computing and Power BI. Live queries against Snowflake Gold tables with row-level security, DAX measures, and 30% performance improvement over legacy reports.',
    longDescription: `Modern BI layer replacing legacy Excel reporting at MyBambu.`,
    tech: ['Sigma Computing', 'Power BI', 'DAX', 'Snowflake', 'SQL', 'dbt Metrics'],
    metrics: [
      { label: 'Dashboard Performance', value: '+30%', color: 'cyan' },
      { label: 'Dashboards Delivered', value: '12', color: 'orange' },
      { label: 'Report Turnaround', value: '-65%', color: 'violet' },
    ],
    featured: false,
    year: '2023',
    tabs: [
      {
        label: 'Overview',
        icon: '⚡',
        sections: [
          {
            title: 'The Problem',
            content: 'MyBambu relied on Excel-based reporting — stale data, manual refreshes, and no role-based access control. Executives and operations teams had no real-time visibility into the business.',
            bullets: [
              'Excel reports refreshed manually — data always hours or days stale',
              'No row-level security — everyone saw everything',
              'Separate reports for each team with inconsistent metric definitions',
              'Report requests taking 2-3 days to fulfill',
            ],
          },
          {
            title: 'The Solution',
            content: 'Replaced all Excel reporting with live Sigma and Power BI dashboards querying Snowflake Gold tables directly — always fresh, role-restricted, and self-service.',
            bullets: [
              'Sigma dashboards — live queries against Snowflake, no extract or refresh',
              'Power BI with DirectQuery + incremental refresh for larger datasets',
              'Row-level security tied to user roles — each team sees only their data',
              'Metric definitions standardized via dbt Metrics layer',
            ],
          },
        ],
      },
      {
        label: 'Dashboards',
        icon: '📊',
        sections: [
          {
            title: '12 Dashboards Delivered',
            content: 'Covering executive KPIs through operational monitoring — all live against Snowflake.',
            bullets: [
              'Executive KPI Dashboard — revenue, active customers, churn rate, MoM trends',
              'Transaction Analytics — volume, failure rates, chargeback trends by merchant',
              'Customer Segmentation — RFM tiers, cohort analysis, segment migration',
              'Fraud Operations — risk tier distribution, flagged transaction drill-through',
              'Churn Monitoring — at-risk customers, retention campaign performance',
              'Campaign Analytics — email open/click/conversion rates by segment',
            ],
          },
        ],
      },
      {
        label: 'Technical Details',
        icon: '🔧',
        sections: [
          {
            title: 'Architecture',
            content: 'Both Sigma and Power BI connect directly to Snowflake Gold tables — no intermediate extract layer.',
            bullets: [
              'Sigma — live SQL pushdown to Snowflake, results cached at session level',
              'Power BI — DirectQuery mode with incremental refresh on large fact tables',
              'Dynamic RLS — user email mapped to role in dim_users, filter applied at query time',
              'DAX measures for calculated KPIs — YoY growth, rolling 30d averages, cohort retention',
              'dbt MetricFlow defines canonical metric definitions consumed by both tools',
            ],
          },
          {
            title: 'Performance Improvements',
            bullets: [
              '+30% dashboard load time improvement over legacy reports',
              '-65% report turnaround — from days to instant self-service',
              'Zero stale data — all dashboards reflect live Snowflake state',
              'Row-level security enforced at query level — no data leakage between teams',
            ],
          },
        ],
      },
    ],
  },
];
