import type { Route } from './+types/cyril';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Cyril' },
    { name: 'description', content: 'Welcome to Cyril!' },
  ];
}

export default function Home() {
  return (
    <div>
      <p>cyril</p>
    </div>
  );
}
