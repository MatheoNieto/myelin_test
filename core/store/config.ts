import { createMigrate, PersistConfig } from 'redux-persist';
import { storage } from '@services';


const migrate = createMigrate({ 3: () => undefined, 4: () => undefined });


export const persistConfigRoot: PersistConfig<any> = {
  key: 'root',
  storage: storage,
  version: 4.02,
  migrate,
};