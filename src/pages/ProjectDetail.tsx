import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data';

const metricColor: Record<string, { text: string; border: string; bg: string }> = {
  cyan:   { text: 'text-sky-400',    border: 'border-sky-800/40',   bg: 'bg-sky-950/50'   },
  orange: { text: 'text-orange-400', border: 'border-orange-800/40', bg: 'bg-orange-950/50' },
  violet: { text: 'text-violet-400', border: 'border-violet-800/40', bg: 'bg-violet-950/50' },
  yellow: { text: 'text-yellow-400', border: 'border-yellow-800/40', bg: 'bg-yellow-950/50' },
};

function ArchitectureOnePager() {
  const mono = "'IBM Plex Mono', 'Fira Mono', monospace";

  const layers = [
    { name: 'RAW', count: '7 tables', bg: '#F8FAFC', bc: '#CBD5E1', nc: '#475569', chips: ['raw_customers','raw_orders','raw_transactions','+ 4 more'], cc: '#E2E8F0', ct: '#64748B' },
    { name: 'STAGING', count: '7 views', bg: '#EFF9FF', bc: '#BAE6FD', nc: '#0369A1', chips: ['stg_customers','stg_orders','stg_transactions','+ 4 more'], cc: '#BAE6FD', ct: '#0369A1' },
    { name: 'INTERMEDIATE', count: '5 ephemeral', bg: '#FAF5FF', bc: '#DDD6FE', nc: '#6D28D9', chips: ['int_customer_orders','int_fraud_signals','+ 3 more'], cc: '#DDD6FE', ct: '#6D28D9' },
    { name: 'MART', count: '3 tables', bg: '#FFF4F2', bc: '#FDBA74', nc: '#C2410C', chips: ['dim_customers','fct_orders','fct_customer_value ★'], cc: '#FED7AA', ct: '#C2410C' },
    { name: 'FEATURES', count: '3 incremental', bg: '#F0FDF4', bc: '#86EFAC', nc: '#15803D', chips: ['feat_fraud_behavior','feat_segmentation','feat_personalization'], cc: '#BBF7D0', ct: '#15803D' },
    { name: 'SEMANTIC LAYER', count: '18 metrics', bg: '#FFFBEB', bc: '#FDE68A', nc: '#92400E', chips: ['total_customers','churn_rate','total_revenue','+ 15 more'], cc: '#FDE68A', ct: '#92400E' },
  ];

  const outputs = [
    { name: 'dim_customers', desc: 'One row per customer — demographics, loyalty tier, composite scores', bg: '#EFF9FF', bc: '#BAE6FD', nc: '#0369A1' },
    { name: 'fct_customer_value ★', desc: 'Customer 360 — RFM + sessions + campaigns + payments → 3 composite scores (0–100)', bg: '#FFF4F2', bc: '#FDBA74', nc: '#C2410C' },
    { name: 'MetricFlow Layer', desc: '18 metrics — single source of truth across Sigma and Power BI', bg: '#FAF5FF', bc: '#DDD6FE', nc: '#6D28D9' },
    { name: 'ML Features', desc: 'Normalized 0–1 features for KMeans + Isolation Forest fraud detection', bg: '#F0FDF4', bc: '#86EFAC', nc: '#15803D' },
    { name: 'Live Dashboard', desc: 'GitHub Pages — real metrics auto-updating daily via static JSON pattern', bg: '#FFFBEB', bc: '#FDE68A', nc: '#92400E' },
  ];

  const recs = [
    { n: '01', title: 'Activate MetricFlow across all BI tools', body: 'Replace ad-hoc SQL in Sigma and Power BI with canonical MetricFlow metrics. Eliminates metric drift — every team sees the same churn rate, LTV, and revenue definition.', bg: '#EFF9FF', bc: '#BAE6FD', nc: '#0369A1' },
    { n: '02', title: 'Use churn_risk_score for proactive retention', body: 'Customers with churn_risk_score > 70 should trigger automated retention campaigns 30 days before predicted churn. Current 5% churn can be reduced 20–30% with early intervention.', bg: '#F0FDF4', bc: '#86EFAC', nc: '#15803D' },
    { n: '03', title: 'Segment-specific marketing via feat_segmentation', body: 'Bronze tier customers need discount-driven messaging; gold/platinum need early access and VIP experiences. Expected 15–25% campaign lift from segmented vs generic campaigns.', bg: '#FAF5FF', bc: '#DDD6FE', nc: '#6D28D9' },
    { n: '04', title: 'Automate fraud escalation using risk_tier', body: 'Route MEDIUM risk customers to fraud review queue automatically. 7 fraud signals catch geo velocity, rapid transactions, and card switching before damage occurs.', bg: '#FFFBEB', bc: '#FDE68A', nc: '#92400E' },
  ];

  const impacts = [
    { title: 'Single source of truth', tag: 'Operations', tagBg: '#DCFCE7', tagC: '#15803D', tagBc: '#86EFAC', body: 'Finance, product, and marketing query the same metric definitions. No more Monday debates about whose revenue number is correct.' },
    { title: 'Proactive churn prevention', tag: 'Revenue', tagBg: '#FEF3C7', tagC: '#92400E', tagBc: '#FDE68A', body: '30-day early warning on at-risk customers. Reducing churn by 1% = 500 customers retained per year on a 50K customer base.' },
    { title: 'Personalized customer experience', tag: 'Growth', tagBg: '#EFF9FF', tagC: '#0369A1', tagBc: '#BAE6FD', body: 'personalization_score tells marketing how well the platform knows each customer — enabling tailored recommendations at scale.' },
    { title: 'Fraud detection before damage', tag: 'Risk', tagBg: '#FEF2F2', tagC: '#DC2626', tagBc: '#FECACA', body: '7 fraud risk flags computed daily on every customer. Fraud team gets a prioritized queue instead of reacting after losses occur.' },
    { title: 'Data trust via 290 tests', tag: 'Quality', tagBg: '#F0FDF4', tagC: '#15803D', tagBc: '#86EFAC', body: 'Bad data caught at source — not discovered by a VP in a board meeting. Every model validated before reaching dashboards.' },
  ];

  const kpis = [
    { val: '50,000', lbl: 'customers', c: '#29B5E8' },
    { val: '750K+', lbl: 'daily transactions', c: '#16A34A' },
    { val: '$224M', lbl: 'revenue tracked', c: '#7C3AED' },
    { val: '290', lbl: 'tests passing', c: '#FF694A' },
    { val: '18', lbl: 'MetricFlow metrics', c: '#D97706' },
    { val: '5.0%', lbl: 'churn rate', c: '#DC2626' },
  ];

  const sources = [
    { name: 'customers', vol: '50K', c: '#29B5E8' },
    { name: 'orders', vol: '500K', c: '#FF694A' },
    { name: 'order_items', vol: '1M', c: '#7C3AED' },
    { name: 'transactions', vol: '750K', c: '#D97706' },
    { name: 'events', vol: '2M', c: '#16A34A' },
    { name: 'campaigns', vol: '200K', c: '#0891B2' },
    { name: 'products', vol: '500', c: '#BE185D' },
  ];

  return (
    <div style={{ background: '#FAFAFA', borderRadius: '10px', padding: '20px', color: '#0F172A', fontSize: '12px' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', paddingBottom: '14px', borderBottom: '2px solid #CBD5E1', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <div style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.3px', marginBottom: '4px' }}>Customer 360 Analytics Platform</div>
          <div style={{ fontSize: '11px', color: '#475569', maxWidth: '480px', lineHeight: 1.5 }}>End-to-end analytics engineering on dbt Cloud + Snowflake — 5-layer medallion architecture processing 750K+ daily transactions with MetricFlow semantic layer and live portfolio dashboard.</div>
        </div>
        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {[
            { l: 'Snowflake', bc: '#29B5E8', c: '#29B5E8', bg: '#EFF9FF' },
            { l: 'dbt Cloud', bc: '#FF694A', c: '#FF694A', bg: '#FFF4F2' },
            { l: '290 tests ✓', bc: '#16A34A', c: '#16A34A', bg: '#F0FDF4' },
            { l: 'MetricFlow', bc: '#7C3AED', c: '#7C3AED', bg: '#FAF5FF' },
            { l: 'GitHub Actions', bc: '#D97706', c: '#D97706', bg: '#FFFBEB' },
          ].map(b => (
            <span key={b.l} style={{ fontFamily: mono, fontSize: '9px', padding: '2px 7px', borderRadius: '3px', border: `1px solid ${b.bc}`, color: b.c, background: b.bg, fontWeight: 500 }}>{b.l}</span>
          ))}
        </div>
      </div>

      {/* KPI Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '8px', marginBottom: '16px' }}>
        {kpis.map(k => (
          <div key={k.lbl} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 10px', textAlign: 'center' }}>
            <div style={{ fontFamily: mono, fontSize: '16px', fontWeight: 700, color: k.c, marginBottom: '2px' }}>{k.val}</div>
            <div style={{ fontSize: '8px', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.4px' }}>{k.lbl}</div>
          </div>
        ))}
      </div>

      {/* Main 3-col */}
      <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 180px', gap: '12px', marginBottom: '14px' }}>

        {/* Sources */}
        <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px' }}>
          <div style={{ fontFamily: mono, fontSize: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: '#64748B', marginBottom: '8px' }}>Data Sources</div>
          {sources.map(s => (
            <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 7px', borderRadius: '4px', marginBottom: '4px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: s.c, flexShrink: 0 }} />
              <span style={{ fontFamily: mono, fontSize: '9px', fontWeight: 600, color: '#0F172A' }}>{s.name}</span>
              <span style={{ fontFamily: mono, fontSize: '8px', color: '#94A3B8', marginLeft: 'auto' }}>{s.vol}</span>
            </div>
          ))}
          <div style={{ marginTop: '8px', padding: '5px 7px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '4px' }}>
            <span style={{ fontFamily: mono, fontSize: '9px', color: '#15803D', fontWeight: 600 }}>~4.5M rows total</span>
          </div>
        </div>

        {/* Pipeline */}
        <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px' }}>
          <div style={{ fontFamily: mono, fontSize: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: '#64748B', marginBottom: '8px' }}>dbt Medallion Pipeline</div>
          <div style={{ display: 'flex', gap: '6px', marginBottom: '10px', flexWrap: 'wrap' }}>
            {[
              { name: 'Snowflake', svg: <svg width="11" height="11" viewBox="0 0 100 100" fill="none"><path d="M50 5L62 27L85 20L78 43L100 50L78 57L85 80L62 73L50 95L38 73L15 80L22 57L0 50L22 43L15 20L38 27Z" fill="#29B5E8"/></svg> },
              { name: 'dbt Cloud', svg: <svg width="11" height="11" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="50" fill="#FF694A"/><circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="12"/><circle cx="50" cy="50" r="8" fill="white"/></svg> },
              { name: 'GitHub Actions', svg: <svg width="11" height="11" viewBox="0 0 24 24" fill="#475569"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57v-2.23c-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.21.69.82.57A12 12 0 0024 12C24 5.37 18.63 0 12 0z"/></svg> },
              { name: 'MetricFlow', svg: <svg width="11" height="11" viewBox="0 0 100 100" fill="none"><rect x="10" y="10" width="35" height="35" rx="5" fill="#7C3AED"/><rect x="55" y="10" width="35" height="35" rx="5" fill="#7C3AED" opacity="0.6"/><rect x="10" y="55" width="35" height="35" rx="5" fill="#7C3AED" opacity="0.6"/><rect x="55" y="55" width="35" height="35" rx="5" fill="#7C3AED" opacity="0.3"/></svg> },
            ].map(t => (
              <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: '4px', padding: '3px 7px' }}>
                {t.svg}
                <span style={{ fontFamily: mono, fontSize: '8px', color: '#475569', fontWeight: 500 }}>{t.name}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {layers.map((l, i) => (
              <div key={l.name}>
                <div style={{ background: l.bg, border: `1px solid ${l.bc}`, borderRadius: '4px', padding: '6px 8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontFamily: mono, fontSize: '9px', fontWeight: 700, color: l.nc }}>{l.name}</span>
                    <span style={{ fontFamily: mono, fontSize: '8px', color: l.nc, opacity: 0.7 }}>{l.count}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
                    {l.chips.map(c => (
                      <span key={c} style={{ fontFamily: mono, fontSize: '7.5px', padding: '1px 5px', borderRadius: '2px', background: l.cc, color: l.ct }}>{c}</span>
                    ))}
                  </div>
                </div>
                {i < layers.length - 1 && <div style={{ textAlign: 'center', fontSize: '10px', color: '#94A3B8', margin: '1px 0', lineHeight: 1 }}>↓</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Outputs */}
        <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px' }}>
          <div style={{ fontFamily: mono, fontSize: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: '#64748B', marginBottom: '8px' }}>Outputs & Consumers</div>
          {outputs.map(o => (
            <div key={o.name} style={{ background: o.bg, border: `1px solid ${o.bc}`, borderRadius: '4px', padding: '7px 8px', marginBottom: '5px' }}>
              <div style={{ fontFamily: mono, fontSize: '9px', fontWeight: 700, color: o.nc, marginBottom: '3px' }}>{o.name}</div>
              <div style={{ fontSize: '8px', color: '#475569', lineHeight: 1.4 }}>{o.desc}</div>
            </div>
          ))}
          <div style={{ marginTop: '8px', padding: '8px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '4px' }}>
            <div style={{ fontFamily: mono, fontSize: '8px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Composite Scores</div>
            {['customer_value_score (0–100)', 'churn_risk_score (0–100)', 'personalization_score (0–100)'].map(s => (
              <div key={s} style={{ fontFamily: mono, fontSize: '8px', color: '#475569', lineHeight: 1.8 }}>→ {s}</div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom: Recs + Impact */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>

        {/* Recommendations */}
        <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px' }}>
          <div style={{ fontFamily: mono, fontSize: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: '#64748B', marginBottom: '8px' }}>Key Recommendations</div>
          {recs.map(r => (
            <div key={r.n} style={{ background: r.bg, border: `1px solid ${r.bc}`, borderRadius: '5px', padding: '8px 10px', marginBottom: '6px' }}>
              <div style={{ fontFamily: mono, fontSize: '8px', fontWeight: 700, color: r.nc, marginBottom: '3px' }}>{r.n} — {r.title}</div>
              <div style={{ fontSize: '9px', color: '#475569', lineHeight: 1.5 }}>{r.body}</div>
            </div>
          ))}
        </div>

        {/* Business Impact */}
        <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px' }}>
          <div style={{ fontFamily: mono, fontSize: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: '#64748B', marginBottom: '8px' }}>How It Helps the Business</div>
          {impacts.map(imp => (
            <div key={imp.title} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '4px', padding: '7px 8px', marginBottom: '5px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                <span style={{ fontFamily: mono, fontSize: '9px', fontWeight: 700, color: '#0F172A' }}>{imp.title}</span>
                <span style={{ fontFamily: mono, fontSize: '7px', background: imp.tagBg, color: imp.tagC, border: `1px solid ${imp.tagBc}`, padding: '1px 5px', borderRadius: '3px' }}>{imp.tag}</span>
              </div>
              <div style={{ fontSize: '9px', color: '#475569', lineHeight: 1.4 }}>{imp.body}</div>
            </div>
          ))}
        </div>

      </div>

      {/* CI/CD + Tech + Highlights row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '14px' }}>

        {/* CI/CD */}
        <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px' }}>
          <div style={{ fontFamily: mono, fontSize: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: '#64748B', marginBottom: '8px' }}>CI/CD Pipeline</div>
          <div style={{ fontFamily: mono, fontSize: '7px', color: '#94A3B8', marginBottom: '5px' }}>PULL REQUEST → MAIN</div>
          {['dbt deps — install packages', 'dbt compile — syntax check', 'dbt build — 290 tests on CI schema', 'block merge — on any failure'].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <div style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#EFF6FF', border: '1px solid #BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 700, color: '#1D4ED8', flexShrink: 0, fontFamily: mono }}>{i + 1}</div>
              <span style={{ fontFamily: mono, fontSize: '8px', color: '#475569' }}>{s}</span>
            </div>
          ))}
          <div style={{ fontFamily: mono, fontSize: '7px', color: '#94A3B8', margin: '8px 0 5px' }}>DAILY PROD JOB — 6 AM UTC</div>
          {['dbt build — full prod rebuild', 'dbt docs generate — lineage DAG', 'export_metrics.py — query Snowflake', 'metrics.json → GitHub Pages live'].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <div style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#F0FDF4', border: '1px solid #86EFAC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 700, color: '#15803D', flexShrink: 0, fontFamily: mono }}>{i + 1}</div>
              <span style={{ fontFamily: mono, fontSize: '8px', color: '#475569' }}>{s}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px' }}>
          <div style={{ fontFamily: mono, fontSize: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: '#64748B', marginBottom: '8px' }}>Tools & Technologies</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
            {[
              { name: 'Snowflake', c: '#29B5E8' }, { name: 'dbt Cloud', c: '#FF694A' },
              { name: 'MetricFlow', c: '#7C3AED' }, { name: 'GitHub Actions', c: '#475569' },
              { name: 'Python', c: '#3776AB' }, { name: 'Snowpark ML', c: '#2496ED' },
              { name: 'Sigma Computing', c: '#F59E0B' }, { name: 'Power BI', c: '#F2C811' },
              { name: 'GitHub Pages', c: '#16A34A' }, { name: 'dbt_utils', c: '#0F172A' },
            ].map(t => (
              <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 6px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: t.c, flexShrink: 0 }} />
                <span style={{ fontFamily: mono, fontSize: '8px', color: '#475569' }}>{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px' }}>
          <div style={{ fontFamily: mono, fontSize: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: '#64748B', marginBottom: '8px' }}>Key Highlights</div>
          {[
            '290 automated tests — not_null, unique, relationships, accepted_values + 4 custom singular tests',
            'Dev/Prod separation — dbt Cloud environments with personal dev schema and scheduled prod schema',
            'Incremental models — feature tables process only new/changed customers daily',
            'SCD Type 2 snapshots — snap_customer_profile tracks historical customer attribute changes',
            'Source freshness SLAs — alerts when source tables go stale beyond defined thresholds',
            'Static JSON pattern — zero live DB hits on dashboard page load, metrics exported once daily',
          ].map((h, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', marginBottom: '6px' }}>
              <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#DCFCE7', border: '1px solid #86EFAC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                <svg width="7" height="7" viewBox="0 0 10 10"><path d="M2 5l2.5 2.5L8 3" stroke="#16A34A" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
              </div>
              <span style={{ fontSize: '9px', color: '#475569', lineHeight: 1.4 }}>{h}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid #E2E8F0' }}>
        <span style={{ fontFamily: mono, fontSize: '9px', color: '#94A3B8' }}>Sriram Sripada · Analytics Engineer · MS Business Analytics, USF · AWS ML Specialty · Google Advanced Data Analytics</span>
        <span style={{ fontFamily: mono, fontSize: '9px', color: '#94A3B8' }}>github.com/sriramsripada20s/customer-360-snowflake-dbt</span>
      </div>

    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find(p => p.slug === slug);
  const others = PROJECTS.filter(p => p.slug !== slug).slice(0, 3);
  const [activeTab, setActiveTab] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6b7a96] text-sm mb-4">Project not found.</p>
          <Link to="/" className="text-sky-400 text-sm hover:underline">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  const tabs = project.tabs ?? [
    { label: 'Overview', sections: project.sections ?? [{ title: 'Overview', content: project.longDescription, bullets: [] }] }
  ];

  const activeTabLabel = tabs[activeTab]?.label;
  const isOnePager = activeTabLabel === 'One-Pager';
  const isLiveDemo = activeTabLabel === 'Live Demo';

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 md:px-12 max-w-6xl mx-auto">

      <Link to="/" className="inline-flex items-center gap-2 text-[12px] font-medium text-[#6b7a96] hover:text-white transition-colors mb-10 tracking-wide">
        <ArrowLeft size={14} /> All Projects
      </Link>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.domain.map(d => (
          <span key={d} className="text-[11px] font-semibold px-3 py-1 rounded-md bg-sky-950/60 text-sky-400 border border-sky-800/30 tracking-wide uppercase">{d}</span>
        ))}
        {project.featured && (
          <span className="text-[11px] font-semibold px-3 py-1 rounded-md bg-cyan-950/50 text-cyan-400 border border-cyan-800/30 tracking-wide uppercase">Featured</span>
        )}
        <span className="text-[12px] text-[#6b7a96] self-center ml-2">{project.year}</span>
      </div>

      <h1 className="text-[clamp(28px,4vw,46px)] font-bold text-white leading-tight mb-2">
        {project.title.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')}
      </h1>
      <p className="text-[15px] text-sky-400 font-medium mb-8">{project.subtitle}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {project.metrics.map((m, i) => {
          const c = metricColor[m.color] ?? metricColor.cyan;
          return (
            <div key={i} className={`${c.bg} border ${c.border} rounded-2xl p-5`}>
              <div className={`text-[28px] font-bold leading-none mb-1 ${c.text}`}>{m.value}</div>
              <div className="text-[11px] text-[#6b7a96] font-medium uppercase tracking-wider">{m.label}</div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-1 border-b border-[#232d3f] mb-10 overflow-x-auto">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`flex items-center gap-2 px-5 py-3 text-[13px] font-semibold whitespace-nowrap border-b-2 transition-all -mb-px ${
              activeTab === i ? 'border-sky-400 text-white' : 'border-transparent text-[#6b7a96] hover:text-white'
            }`}
          >
            {tab.icon && <span className="text-[14px]">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      {/* One-Pager — full width, no sidebar */}
      {isOnePager ? (
        <ArchitectureOnePager />
      ) : (
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            {isLiveDemo ? (
              <div className="space-y-6">
                <div className="border-l-2 border-sky-800/40 pl-6">
                  <h3 className="text-[11px] font-bold text-sky-400 uppercase tracking-widest mb-3">
                    {project.liveUrl ? 'Live Dashboard' : 'Demo Coming Soon'}
                  </h3>
                  <p className="text-[14px] text-[#8892a4] leading-relaxed mb-4">
                    {project.liveUrl
                      ? 'Real production metrics pulled from Snowflake daily via GitHub Actions. Updates automatically at 6 AM UTC — zero live Snowflake hits on page load.'
                      : 'A live Streamlit demo is in development — type any business question in plain English and watch the agent translate it to SQL, execute on Snowflake, and return a structured answer.'}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {(project.liveUrl ? [
                      'Real Snowflake data — 50,000 customers, $224M revenue tracked',
                      'Auto-updates daily — GitHub Actions queries Snowflake once, writes static JSON',
                      'Zero live Snowflake hits on page load — static file pattern for performance',
                      '4 metric tabs — Customer, Revenue, Risk & Fraud, Engagement',
                    ] : [
                      'Ask questions like "what is the churn rate for gold tier customers last 30 days?"',
                      'Agent generates SQL, executes on Snowflake, returns data + narrative answer',
                      'Full query history and SQL transparency — see exactly what ran',
                      'Streamlit Cloud deployment — no login required, publicly accessible',
                    ]).map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-[13px] text-[#8892a4] leading-relaxed">
                        <span className="text-sky-500 mt-0.5 flex-shrink-0">→</span>{b}
                      </li>
                    ))}
                  </ul>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[13px] font-semibold text-sky-400 border border-sky-800/40 bg-sky-950/50 px-4 py-2.5 rounded-lg hover:bg-sky-900/40 transition-colors mb-6">
                      <ExternalLink size={13} /> Open live dashboard ↗
                    </a>
                  )}
                </div>
                {project.liveUrl ? (
                  <div className="rounded-xl overflow-hidden border border-[#232d3f]" style={{ height: '600px' }}>
                    <iframe src={project.liveUrl} width="100%" height="100%" style={{ border: 'none', background: '#080C10' }} title="Live Dashboard" />
                  </div>
                ) : (
                  <div className="rounded-xl border border-[#232d3f] bg-[#0D1117] flex flex-col items-center justify-center gap-4" style={{ height: '300px' }}>
                    <div style={{ fontSize: '40px' }}>🚧</div>
                    <p className="text-[14px] font-semibold text-white">Streamlit demo in development</p>
                    <p className="text-[12px] text-[#6B7280] text-center max-w-sm">Will be deployed on Streamlit Cloud — publicly accessible, no login required.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-10">
                {tabs[activeTab]?.sections.map((section, i) => (
                  <div key={i} className="border-l-2 border-sky-800/40 pl-6">
                    <h3 className="text-[11px] font-bold text-sky-400 uppercase tracking-widest mb-3">{section.title}</h3>
                    {section.content && <p className="text-[14px] text-[#8892a4] leading-relaxed mb-4">{section.content}</p>}
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="space-y-2.5">
                        {section.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-3 text-[13px] text-[#8892a4] leading-relaxed">
                            <span className="text-sky-500 mt-0.5 flex-shrink-0">→</span>{b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-[#161b27] border border-[#232d3f] rounded-2xl p-6">
              <h3 className="text-[11px] font-semibold text-sky-400 tracking-widest uppercase mb-4">Key Results</h3>
              <div className="flex flex-col gap-3">
                {project.metrics.map((m, i) => {
                  const c = metricColor[m.color] ?? metricColor.cyan;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`text-[18px] font-bold min-w-[60px] ${c.text}`}>{m.value}</div>
                      <div className="text-[12px] text-[#6b7a96]">{m.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#161b27] border border-[#232d3f] rounded-2xl p-6">
              <h3 className="text-[11px] font-semibold text-sky-400 tracking-widest uppercase mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[11px] px-3 py-1.5 rounded-lg border border-[#232d3f] text-[#8892a4] bg-[#0f1117]">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#161b27] border border-[#232d3f] rounded-2xl p-6">
              <h3 className="text-[11px] font-semibold text-sky-400 tracking-widest uppercase mb-4">Links</h3>
              <div className="flex flex-col gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2.5 text-[13px] text-white hover:text-sky-400 transition-colors font-medium">
                    <ExternalLink size={15} /> Live Dashboard
                    <ExternalLink size={11} className="text-[#6b7a96] ml-auto" />
                  </a>
                )}
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2.5 text-[13px] text-white hover:text-sky-400 transition-colors font-medium">
                    <Github size={15} /> View on GitHub
                    <ExternalLink size={11} className="text-[#6b7a96] ml-auto" />
                  </a>
                ) : (
                  <p className="text-[13px] text-[#6b7a96]">Internal production project — no public repo.</p>
                )}
              </div>
            </div>

            <div className="bg-[#161b27] border border-[#232d3f] rounded-2xl p-6">
              <h3 className="text-[11px] font-semibold text-sky-400 tracking-widest uppercase mb-4">Domain</h3>
              <div className="flex flex-wrap gap-2">
                {project.domain.map(d => (
                  <span key={d} className="text-[12px] px-3 py-1.5 rounded-lg bg-sky-950/60 text-sky-400 border border-sky-800/30">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {others.length > 0 && (
        <div className="mt-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[20px] font-bold text-white">More Projects</h2>
            <Link to="/" className="text-[13px] text-sky-400 hover:underline">View all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {others.map(p => (
              <Link key={p.id} to={`/projects/${p.slug}`}
                className="group bg-[#161b27] border border-[#232d3f] rounded-2xl overflow-hidden hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-200 block"
                onClick={() => setActiveTab(0)}>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {p.domain.slice(0, 1).map(d => (
                      <span key={d} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-950/60 text-sky-400 border border-sky-800/30 uppercase tracking-wide">{d}</span>
                    ))}
                  </div>
                  <h3 className="text-[14px] font-bold text-white mb-1.5 group-hover:text-sky-400 transition-colors leading-snug">
                    {p.title.split(' ').slice(0, 5).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')}
                  </h3>
                  <p className="text-[12px] text-[#6b7a96] leading-relaxed line-clamp-2">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
