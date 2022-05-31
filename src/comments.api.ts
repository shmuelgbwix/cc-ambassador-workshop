import { method } from '@wix/yoshi-flow-bm/serverless';
import { NodeWorkshopScalaApp } from '@wix/ambassador-node-workshop-scala-app/rpc';

export const fetch = method(async function () {
  const commentsService = NodeWorkshopScalaApp().CommentsService();
  return commentsService(this.context.aspects).fetch(
    '2e5ce12e-e019-11ec-9d64-0242ac120002'
  );
});
