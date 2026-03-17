import type { Route } from '../+types/root';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Webvironment' },
    { name: 'description', content: 'Welcome to Webvironment!' },
  ];
}

export default function Home() {
  return (
    <div>
      <p>Home</p>
    </div>
  );
}
