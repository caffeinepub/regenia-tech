// Auto-generated backend stub for static site
import { HttpAgent, Actor, type ActorSubclass } from "@icp-sdk/core/agent";

export type backendInterface = Record<string, never>;

export interface CreateActorOptions {
  agentOptions?: Record<string, unknown>;
}

export class ExternalBlob {
  private bytes: Uint8Array;
  onProgress?: (progress: number) => void;

  constructor(bytes: Uint8Array) {
    this.bytes = bytes;
  }

  async getBytes(): Promise<Uint8Array> {
    return this.bytes;
  }

  static fromURL(url: string): ExternalBlob {
    return new ExternalBlob(new TextEncoder().encode(url));
  }
}

export function createActor(
  _canisterId: string,
  _uploadFile: (file: ExternalBlob) => Promise<Uint8Array>,
  _downloadFile: (bytes: Uint8Array) => Promise<ExternalBlob>,
  _options?: CreateActorOptions,
): backendInterface {
  return {} as backendInterface;
}
