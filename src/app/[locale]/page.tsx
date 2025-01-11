import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('common');

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">{t('welcome')}</h1>
      <div className="space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          {t('login')}
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          {t('register')}
        </button>
      </div>
    </main>
  );
}