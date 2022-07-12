import Link from 'next/link';

import { QuestionAnswer } from '../faq/QuestionAnswer';
import { Section } from '../layout/Section';

const FAQ = () => (
  <Section
    title="You have Questions?"
    subtitle="FAQ"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <div className="flex flex-col">
      <QuestionAnswer question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at est eleifend?">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
          amet faucibus enim. Duis scelerisque, nibh in ultrices consequat,
          velit nisl tincidunt ante, sit amet fermentum mi lacus in massa.
          Maecenas nec nulla vel nisi vestibulum egestas. Nunc nibh magna,
          placerat sit amet rutrum sit amet, facilisis vitae nisl.
        </p>
        <p>
          Fusce sed nunc ultrices, sollicitudin dui eu, laoreet lacus. Nullam
          mollis nisi ac turpis maximus, posuere viverra lectus tristique.
          Checkout{' '}
          <Link href="/">
            <a>this example</a>
          </Link>
          .
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
        <p>
          Duis lobortis metus gravida nisi suscipit, non rutrum sapien suscipit.
          Pellentesque augue elit, vestibulum sollicitudin tellus sed, ornare
          faucibus tortor. Phasellus ullamcorper, nisl convallis imperdiet
          imperdiet, nibh metus maximus est, eu ullamcorper neque est at mi. Nam
          dui ex, viverra vel condimentum non, auctor eget lectus. Praesent a
          massa nulla.
        </p>
        <p>
          Ut id maximus nunc. Nulla facilisi. Nullam vitae accumsan libero.
          Aliquam dictum augue elementum tellus luctus efficitur. Curabitur
          consectetur enim ut diam aliquam eleifend. Quisque diam massa,
          hendrerit bibendum luctus eu, mollis at elit. Morbi augue libero,
          pretium nec semper et, vulputate egestas velit. In molestie neque
          tincidunt, bibendum mauris id, euismod orci.
        </p>
        <p>
          Vestibulum vitae leo massa. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Praesent
          viverra tortor sed nulla dapibus fermentum. Integer fringilla diam ac
          volutpat eleifend. Morbi eget commodo risus. Duis enim purus,
          elementum eget posuere at, ullamcorper a urna. Maecenas sodales,
          tellus accumsan euismod scelerisque, sapien nibh posuere ligula, non
          pharetra nunc mi non diam.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
        <p>
          Etiam malesuada massa id sapien eleifend congue. Curabitur tempus urna
          molestie lacus dictum faucibus.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
        <p>
          Etiam malesuada massa id sapien eleifend congue. Curabitur tempus urna
          molestie lacus dictum faucibus. Read our{' '}
          <Link href="/">
            <a>blog post</a>
          </Link>
          .
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
        <p>
          Mauris orci mauris, rhoncus consectetur scelerisque sit amet, pulvinar
          ullamcorper velit. Praesent auctor viverra magna, non tincidunt felis
          sagittis non. Duis sollicitudin, ipsum eu egestas tristique, nulla
          risus varius sem, quis blandit arcu dui ut purus. Sed nulla lorem,
          vehicula ornare pellentesque pellentesque, aliquet vel erat.
        </p>
        <p>
          Duis lobortis metus gravida nisi suscipit, non rutrum sapien suscipit.
          Pellentesque augue elit, vestibulum sollicitudin tellus sed, ornare
          faucibus tortor. Phasellus ullamcorper, nisl convallis imperdiet
          imperdiet, nibh metus maximus est, eu ullamcorper neque est at mi. Nam
          dui ex, viverra vel condimentum non, auctor eget lectus. Praesent a
          massa nulla.
        </p>
      </QuestionAnswer>
    </div>
  </Section>
);

export { FAQ };
