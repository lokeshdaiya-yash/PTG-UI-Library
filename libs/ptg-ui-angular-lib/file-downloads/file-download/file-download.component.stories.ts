import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FileDownloadComponent } from './file-download.component';

export default {
  title: 'Component/FileDownloadComponent',
  component: FileDownloadComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FileDownloadComponent>;

const Template: Story<FileDownloadComponent> = (
  args: FileDownloadComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
