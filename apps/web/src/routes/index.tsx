import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Counter from '~/components/starter/counter/counter';
import Hero from '~/components/starter/hero/hero';
import Infobox from '~/components/starter/infobox/infobox';
import Starter from '~/components/starter/next-steps/next-steps';
import { useSignal } from '@builder.io/qwik';
import { dateUtils } from 'utils';

export default component$(() => {
  const val = useSignal(dateUtils.foo(100));

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
          <h3>
            You can <b>count</b> on me {val}
          </h3>
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
