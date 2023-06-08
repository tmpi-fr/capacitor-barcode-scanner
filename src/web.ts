import { WebPlugin } from '@capacitor/core';

import {
  BarcodeScannerPlugin,
  CheckPermissionOptions,
  CheckPermissionResult,
  ScanOptions,
  ScanResult,
  StopScanOptions,
  TorchStateResult
} from './definitions';

export class BarcodeScannerWeb extends WebPlugin implements BarcodeScannerPlugin {

  private torchEnabled = false;

  async prepare(_options?: ScanOptions): Promise<void> {
      console.log('BarcodeScannerWeb.prepare');
  }

  async hideBackground(): Promise<void> {
      console.log('BarcodeScannerWeb.hideBackground');
  }

  async showBackground(): Promise<void> {
      console.log('BarcodeScannerWeb.showBackground');
  }

  startScan(_options?: ScanOptions): Promise<ScanResult> {
      console.log('BarcodeScannerWeb.startScan');
      return new Promise<ScanResult>(resolve => {
          setTimeout(() => {
              const str = prompt('Saisir un code-barres');
              if (str === null) {
                  resolve({
                      hasContent: false,
                      content: undefined,
                      format: undefined
                  });
              }
              else {
                  resolve({
                      hasContent: true,
                      content: str,
                      format: ''
                  });
              }
          }, 500);
      });
  }

  async startScanning(_options: ScanOptions, _callback: (result: ScanResult, err?: any) => void): Promise<string> {
      throw this.unimplemented('Not implemented on web.');
  }

  async pauseScanning(): Promise<void> {
      throw this.unimplemented('Not implemented on web.');
  }

  async resumeScanning(): Promise<void> {
      throw this.unimplemented('Not implemented on web.');
  }

  async stopScan(_options?: StopScanOptions): Promise<void> {
      console.log('BarcodeScannerWeb.stopScan');
  }

  async checkPermission(_options?: CheckPermissionOptions): Promise<CheckPermissionResult> {
      console.log('BarcodeScannerWeb.checkPermission');
      return {
          granted: true,
          denied: false,
          asked: false,
          neverAsked: false
      };
  }

  async openAppSettings(): Promise<void> {
      console.log('BarcodeScannerWeb.openAppSettings');
  }

  async disableTorch(): Promise<void> {
      console.log('BarcodeScannerWeb.disableTorch');
      this.torchEnabled = false;
  }

  async enableTorch(): Promise<void> {
      console.log('BarcodeScannerWeb.enableTorch');
      this.torchEnabled = true;
  }

  async toggleTorch(): Promise<void> {
      console.log('BarcodeScannerWeb.toggleTorch');
      this.torchEnabled = !this.torchEnabled;
  }

  async getTorchState(): Promise<TorchStateResult> {
      console.log('BarcodeScannerWeb.getTorchState');
      return {
          isEnabled: this.torchEnabled
      };
  }

}
