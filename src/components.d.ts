/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface AppHome {
    }
    interface AppNdc {
        "match": MatchResults;
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface IwsEventsFinder {
    }
    interface IwsEventsPlaces {
    }
    interface IwsStockFinder {
    }
    interface IwsStockPrice {
        "stockSymbol": string;
    }
    interface IwsTest {
        /**
          * The first name
         */
        "app": string;
    }
    interface IwsWordpress {
    }
    interface UcSpinner {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppNdcElement extends Components.AppNdc, HTMLStencilElement {
    }
    var HTMLAppNdcElement: {
        prototype: HTMLAppNdcElement;
        new (): HTMLAppNdcElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLIwsEventsFinderElement extends Components.IwsEventsFinder, HTMLStencilElement {
    }
    var HTMLIwsEventsFinderElement: {
        prototype: HTMLIwsEventsFinderElement;
        new (): HTMLIwsEventsFinderElement;
    };
    interface HTMLIwsEventsPlacesElement extends Components.IwsEventsPlaces, HTMLStencilElement {
    }
    var HTMLIwsEventsPlacesElement: {
        prototype: HTMLIwsEventsPlacesElement;
        new (): HTMLIwsEventsPlacesElement;
    };
    interface HTMLIwsStockFinderElement extends Components.IwsStockFinder, HTMLStencilElement {
    }
    var HTMLIwsStockFinderElement: {
        prototype: HTMLIwsStockFinderElement;
        new (): HTMLIwsStockFinderElement;
    };
    interface HTMLIwsStockPriceElement extends Components.IwsStockPrice, HTMLStencilElement {
    }
    var HTMLIwsStockPriceElement: {
        prototype: HTMLIwsStockPriceElement;
        new (): HTMLIwsStockPriceElement;
    };
    interface HTMLIwsTestElement extends Components.IwsTest, HTMLStencilElement {
    }
    var HTMLIwsTestElement: {
        prototype: HTMLIwsTestElement;
        new (): HTMLIwsTestElement;
    };
    interface HTMLIwsWordpressElement extends Components.IwsWordpress, HTMLStencilElement {
    }
    var HTMLIwsWordpressElement: {
        prototype: HTMLIwsWordpressElement;
        new (): HTMLIwsWordpressElement;
    };
    interface HTMLUcSpinnerElement extends Components.UcSpinner, HTMLStencilElement {
    }
    var HTMLUcSpinnerElement: {
        prototype: HTMLUcSpinnerElement;
        new (): HTMLUcSpinnerElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-ndc": HTMLAppNdcElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "iws-events-finder": HTMLIwsEventsFinderElement;
        "iws-events-places": HTMLIwsEventsPlacesElement;
        "iws-stock-finder": HTMLIwsStockFinderElement;
        "iws-stock-price": HTMLIwsStockPriceElement;
        "iws-test": HTMLIwsTestElement;
        "iws-wordpress": HTMLIwsWordpressElement;
        "uc-spinner": HTMLUcSpinnerElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppNdc {
        "match"?: MatchResults;
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface IwsEventsFinder {
        "onUcSymbolSelected"?: (event: CustomEvent<string>) => void;
    }
    interface IwsEventsPlaces {
    }
    interface IwsStockFinder {
        "onUcSymbolSelected"?: (event: CustomEvent<string>) => void;
    }
    interface IwsStockPrice {
        "stockSymbol"?: string;
    }
    interface IwsTest {
        /**
          * The first name
         */
        "app"?: string;
    }
    interface IwsWordpress {
        "onIwsPostSelected"?: (event: CustomEvent<string>) => void;
    }
    interface UcSpinner {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-ndc": AppNdc;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "iws-events-finder": IwsEventsFinder;
        "iws-events-places": IwsEventsPlaces;
        "iws-stock-finder": IwsStockFinder;
        "iws-stock-price": IwsStockPrice;
        "iws-test": IwsTest;
        "iws-wordpress": IwsWordpress;
        "uc-spinner": UcSpinner;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-ndc": LocalJSX.AppNdc & JSXBase.HTMLAttributes<HTMLAppNdcElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "iws-events-finder": LocalJSX.IwsEventsFinder & JSXBase.HTMLAttributes<HTMLIwsEventsFinderElement>;
            "iws-events-places": LocalJSX.IwsEventsPlaces & JSXBase.HTMLAttributes<HTMLIwsEventsPlacesElement>;
            "iws-stock-finder": LocalJSX.IwsStockFinder & JSXBase.HTMLAttributes<HTMLIwsStockFinderElement>;
            "iws-stock-price": LocalJSX.IwsStockPrice & JSXBase.HTMLAttributes<HTMLIwsStockPriceElement>;
            "iws-test": LocalJSX.IwsTest & JSXBase.HTMLAttributes<HTMLIwsTestElement>;
            "iws-wordpress": LocalJSX.IwsWordpress & JSXBase.HTMLAttributes<HTMLIwsWordpressElement>;
            "uc-spinner": LocalJSX.UcSpinner & JSXBase.HTMLAttributes<HTMLUcSpinnerElement>;
        }
    }
}
