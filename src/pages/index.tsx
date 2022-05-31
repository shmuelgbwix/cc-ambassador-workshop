import React, { FC } from 'react';
import { useTranslation, useAppLoaded } from '@wix/yoshi-flow-bm';
import { Page } from 'wix-style-react';

import Test from './Test';

const introUrl = 'https://github.com/wix-private/business-manager';

const Index: FC = () => {
  useAppLoaded({ auto: true });
  const { t } = useTranslation();

  return (
    <Page>
      <Page.Header dataHook="app-title" title={t('app.title')} />
      <Page.Content>
        <Test />
      </Page.Content>
    </Page>
  );
};

export default Index;
