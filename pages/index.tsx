import Head from 'next/head';
import MainLayout from '../components/layouts/main-layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Товары</title>
        <meta name="title" content="Интернент магазин - Главная"/>
        <meta name="description" content="Одежда, бытовая техника с доставкой по Москве. Все товары соответствуют фото на 100%. Доставка точно в срок."/>
        <meta name="keywords" content="Одежда, бытовая техника"/>
        <meta name="robots" content="noindex, nofollow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainLayout>
          <h1>Главная пока пустая, <br/>перейдите на старницу каталога</h1>
        </MainLayout>
      </main>
    </>
  )
}
