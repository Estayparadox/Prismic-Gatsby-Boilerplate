import * as React from 'react';

import { Seo } from '../shared/components/Seo';

const NotFoundPage = () => (
  <>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
);

export const Head = () => <Seo title='Page not found' />;

export default NotFoundPage;
