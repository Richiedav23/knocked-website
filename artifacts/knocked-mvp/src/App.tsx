import { useEffect, useState } from 'react';
import { Switch, Route, Router as WouterRouter } from 'wouter';
import { supabase } from './lib/supabase';
import KnockedLandingPage from './pages/LandingPage';

type Child = {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
};

const ORG_ID = '307dcc3f-9730-499f-beae-83f7515a0173';

function Dashboard() {
  const [children, setChildren] = useState<Child[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadChildren();
  }, []);

  const loadChildren = async () => {
    try {
      setLoading(true);
      setError(null);

      const childOrgRes = await supabase
        .from('child_organisations')
        .select('child_id')
        .eq('org_id', ORG_ID);

      if (childOrgRes.error) throw childOrgRes.error;

      const childIds = childOrgRes.data?.map((row) => row.child_id) ?? [];

      if (childIds.length === 0) {
        setChildren([]);
        return;
      }

      const childrenRes = await supabase
        .from('children')
        .select('*')
        .in('id', childIds);

      if (childrenRes.error) throw childrenRes.error;

      setChildren(childrenRes.data ?? []);
    } catch (err: any) {
      setError(err?.message ?? JSON.stringify(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '32px', fontFamily: 'Arial' }}>
      <h1>Knocked MVP</h1>

      {loading && <p>Loading children...</p>}

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && (
        <>
          <p>Children loaded: {children.length}</p>

          {children.length === 0 ? (
            <p>No children found.</p>
          ) : (
            <ul>
              {children.map((child) => (
                <li key={child.id}>
                  {child.first_name} {child.last_name}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Switch>
        <Route path="/" component={KnockedLandingPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </WouterRouter>
  );
}
