import ClientModule from '@module/module-client-angular';
import { MaterialModule } from './ui-material';

export { styles } from './ui-material';

export default new ClientModule({ module: [MaterialModule] });
