import { component$ } from '@builder.io/qwik';
import { type DocumentHead, routeLoader$ } from '@builder.io/qwik-city';

import Counter from '~/components/starter/counter/counter';
import Hero from '~/components/starter/hero/hero';
import Infobox from '~/components/starter/infobox/infobox';
import Starter from '~/components/starter/next-steps/next-steps';
import { dateUtils } from 'utils';

import { hc } from 'hono/client';
import type { PingRoute } from '../../../api/src/index';

export const usePingResult = routeLoader$(async () => {
  const client = hc<PingRoute>(import.meta.env.VITE_API_URL);
  const res = await client.trpc.$get();
  const data = await res.json();
  return { success: true, data };
});

export default component$(() => {
  const val = dateUtils.foo(100);
  const pingResult = usePingResult();

  return (
    <>
      <Hero />

      <div class="section bright">
        <div class="container center">
          <Starter />
        </div>
      </div>

      <div class="section">
        <div class="container center">
          <h3>This value comes from dateUtils.foo {val}</h3>
          <h3>These values comes from the API worker via tRPC and is typed</h3>
          <ul>
            <li>db: {pingResult.value.data.db}</li>
            <li>foo: {pingResult.value.data.foo}</li>
            <li>kv.ping {pingResult.value.data.kv.ping}</li>
            <li>message: {pingResult.value.data.message}</li>
            <li>private: {pingResult.value.data.private}</li>
            <li>public: {pingResult.value.data.public}</li>
          </ul>
          <Counter />
        </div>
      </div>

      <div class="section">
        <div class="container topics">
          <Infobox>
            <div q:slot="title" class="icon icon-cli">
              CLI Commands
            </div>
            <>
              <p>
                <code>npm run dev</code>
                <br />
                Starts the development server and watches for changes
              </p>
              <p>
                <code>npm run preview</code>
                <br />
                Creates production build and starts a server to preview it
              </p>
              <p>
                <code>npm run build</code>
                <br />
                Creates production build
              </p>
              <p>
                <code>npm run qwik add</code>
                <br />
                Runs the qwik CLI to add integrations
              </p>
            </>
          </Infobox>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
