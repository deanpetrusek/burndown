import * as Vue from "../../../types/vue";
import { Readable } from 'stream';

export declare function createRenderer(options?: RendererOptions): Renderer;

export declare function createBundleRenderer(bundle: string | object, options?: BundleRendererOptions): BundleRenderer;

type RenderCallback = (err: Error | null, html: string) => void;

interface Renderer {
  renderToString(vm: Vue, callback: RenderCallback): void;
  renderToString(vm: Vue, context: object, callback: RenderCallback): void;

  renderToStream(vm: Vue, context?: object): Readable;
}

interface BundleRenderer {
  renderToString(callback: RenderCallback): void;
  renderToString(context: object, callback: RenderCallback): void;

  renderToStream(context?: object): Readable;
}

interface RendererOptions {
  template?: string;
  inject?: boolean;
  shouldPreload?: (file: string, type: string) => boolean;
  cache?: RenderCache;
  directives?: {
    [key: string]: (vnode: Vue.VNode, dir: Vue.VNodeDirective) => void
  };
}

interface BundleRendererOptions extends RendererOptions {
  clientManifest?: object;
  runInNewContext?: boolean | 'once';
  basedir?: string;
}

interface RenderCache {
  get: (key: string, cb?: (res: string) => void) => string | void;
  set: (key: string, val: string) => void;
  has?: (key: string, cb?: (hit: boolean) => void) => boolean | void;
}
