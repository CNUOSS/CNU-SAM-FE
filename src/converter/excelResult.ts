import { OSSListAttr } from '@@types/types';
import { ExcelType } from '@components/tabs/EnrollVersionTab';

export const excelType2OSSType = (excelType: ExcelType): { [key in OSSListAttr]: string } => {
  return {
    ossLocation: excelType['Source Name or Path'],
    ossName: excelType['OSS Name'],
    ossVersion: excelType['OSS Version'],
    license: excelType.License,
    ossUrl: excelType['Download Location'],
  };
};
