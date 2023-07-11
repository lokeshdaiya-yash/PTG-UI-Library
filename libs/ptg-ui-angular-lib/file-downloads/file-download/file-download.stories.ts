import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FileDownloadComponent } from './file-download.component';
import { FileDownloadsModule } from '../file-downloads.module';

const TABLE_DATA = {
  columnsData: ['SN', 'NAME', 'DESIGNATION', 'DEPARTMENT'],
  rowsData: [
    [1, 'Astik', 'Manager', 'Engineering and MBA'],
    [2, 'Yogita', 'QA', 'Testing'],
    [3, 'Rajesh', 'Manager', 'Management'],
    [4, 'Swapnil', 'Developer', 'Development'],
    [5, 'Anmol', 'Consultant', 'HR'],
    [6, 'Mansi', 'Software Developer', 'Engineering'],
    [7, 'Astik', 'Manager', 'Engineering and MBA'],
    [8, 'Yogita', 'QA', 'Testing'],
    [9, 'Rajesh', 'Manager', 'Management'],
    [10, 'Yogita', 'QA', 'Testing'],
  ],
};
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
  fileTypeList: [
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
  ],
};
