import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FileDownloadComponent } from './file-download.component';
import { FileDownloadsModule } from '../file-downloads.module';
import { TABLE_DATA } from '@ptg-angular-app/mock/mocks';

export default {
  title: 'Component/FileDownloadComponent',
  component: FileDownloadComponent,
  decorators: [
    moduleMetadata({
      imports: [FileDownloadsModule],
    }),
  ],
} as Meta<FileDownloadComponent>;

const Template: Story<FileDownloadComponent> = (
  args: FileDownloadComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  tableData: TABLE_DATA,
  fileTypeList : [
    {
      id: '1',
      name: 'PDF',
      value: 'PDF',
    },
    {
      id: '2',
      name: 'Excel',
      value: 'EXCEL',
    },
    {
      id: '3',
      name: 'Word',
      value: 'WORD',
    },
    {
      id: '4',
      name: 'Download PNG',
      value: 'PNG',
    },
  ]
};
