(function() {
    "use strict";

    function a() {
        const b = sa(["<span class=", ">", "</span>"]);
        return a = function() {
            return b
        }, b
    }

    function b() {
        const a = sa(["<span class=", ">", "</span>"]);
        return b = function() {
            return a
        }, a
    }

    function c() {
        const a = sa(["\n          <div>\n            <div class='marquee'>\n              ", "\n            </div>\n          </div>"]);
        return c = function() {
            return a
        }, a
    }

    function d() {
        const a = sa(["\n      <div class='entity__info__media'\n        ?short=", "\n        ?short-scroll=", "\n        ?scroll=", "\n        style='animation-duration: ", "s;'>\n        ", "\n        ", "\n      </div>"]);
        return d = function() {
            return a
        }, a
    }

    function e() {
        const a = sa(["\n      <div class='entity__info__name'>\n        ", " ", "\n      </div>"]);
        return e = function() {
            return a
        }, a
    }

    function f() {
        const a = sa(["\n      <div class='entity__icon'>\n        <ha-icon .icon=", "></ha-icon>\n      </div>"]);
        return f = function() {
            return a
        }, a
    }

    function g() {
        const a = sa(["\n        <div class='entity__artwork'\n          style='background-image: ", ";'\n          ?border=", "\n          state=", ">\n        </div>"]);
        return g = function() {
            return a
        }, a
    }

    function h() {
        const a = sa(["<div class='cover' style='background-image: ", ";'></div>"]);
        return h = function() {
            return a
        }, a
    }

    function i() {
        const a = sa(["\n              <mmp-tts\n                .config=", "\n                .hass=", "\n                .entity=", ">\n              </mmp-tts>\n            "]);
        return i = function() {
            return a
        }, a
    }

    function j() {
        const a = sa(["\n              <mmp-media-controls\n                .player=", "\n                .config=", "\n                .break=", ">\n              </mmp-media-controls>\n            "]);
        return j = function() {
            return a
        }, a
    }

    function k() {
        const a = sa(["\n      <ha-card\n        @click=", "\n        class=", "\n        artwork=", "\n        content=", ">\n        <div class='mmp__bg'>\n          ", "\n        </div>\n        <div class='mmp-player'>\n          <div class='mmp-player__core flex' ?inactive=", ">\n            ", "\n            <div class='entity__info'>\n              ", "\n              ", "\n            </div>\n            <mmp-powerstrip\n              @toggleGroupList=", "\n              .hass=", "\n              .player=", "\n              .config=", "\n              .groupVisible=", "\n              .idle=", "\n              ?flow=", ">\n            </mmp-powerstrip>\n          </div>\n          <div class='mmp-player__adds'>\n            ", "\n            <mmp-shortcuts\n              .player=", "\n              .shortcuts=", ">\n            </mmp-shortcuts>\n            ", "\n            <mmp-group-list\n              .visible=", "\n              .entities=", "\n              .player=", ">\n            </mmp-group-list>\n          </div>\n        </div>\n        <div class='mmp__container'>\n          <mmp-progress\n            .player=", "\n            .showTime=", ">\n          </mmp-progress>\n        </div>\n      </ha-card>\n    "]);
        return k = function() {
            return a
        }, a
    }

    function l() {
        const a = sa(["\n        :host {\n          display: flex;\n          line-height: 40px;\n          max-height: 40px;\n        }\n        :host([flow]) mmp-media-controls {\n          max-width: unset;\n        }\n        mmp-media-controls {\n          max-width: 200px;\n        }\n        .group-button {\n          height: 34px;\n          width: 34px;\n          min-width: 34px;\n          margin: 3px;\n        }\n        paper-icon-button {\n          min-width: 40px;\n        }\n      "]);
        return l = function() {
            return a
        }, a
    }

    function m() {
        const a = sa(["\n        <span class='label ellipsis'>\n          ", "\n        </span>\n      "]);
        return m = function() {
            return a
        }, a
    }

    function n() {
        const a = sa(["\n        <paper-icon-button\n          .icon=", "\n          @click=", ">\n        </paper-icon-button>"]);
        return n = function() {
            return a
        }, a
    }

    function o() {
        const a = sa(["\n        <paper-icon-button class='power-button'\n          .icon=", "\n          @click=", "\n          ?color=", ">\n        </paper-icon-button>"]);
        return o = function() {
            return a
        }, a
    }

    function p() {
        const a = sa(["\n        <paper-icon-button class='group-button'\n          .icon=", "\n          ?inactive=", "\n          ?color=", "\n          @click=", ">\n        </paper-icon-button>"]);
        return p = function() {
            return a
        }, a
    }

    function q() {
        const a = sa(["\n        <mmp-sound-menu\n          .player=", "\n          .icon=", "\n          ?full=", ">\n        </mmp-sound-menu>"]);
        return q = function() {
            return a
        }, a
    }

    function r() {
        const a = sa(["\n        <mmp-source-menu\n          .player=", "\n          .icon=", "\n          ?full=", ">\n        </mmp-source-menu>"]);
        return r = function() {
            return a
        }, a
    }

    function s() {
        const a = sa(["\n        <mmp-media-controls\n          .player=", "\n          .config=", ">\n        </mmp-media-controls>\n      "]);
        return s = function() {
            return a
        }, a
    }

    function t() {
        const a = sa(["\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    "]);
        return t = function() {
            return a
        }, a
    }

    function u() {
        const a = sa(["\n        <span class='label ellipsis'>\n          ", "\n        </span>\n      "]);
        return u = function() {
            return a
        }, a
    }

    function v() {
        const a = sa(["\n        :host {\n          display: flex;\n          width: 100%;\n        }\n        .flex {\n          display: flex;\n          flex: 1;\n          justify-content: space-between;\n        }\n        ha-slider {\n          max-width: none;\n          min-width: 100px;\n          width: 100%;\n        }\n        paper-icon-button {\n          min-width: 40px;\n        }\n        .mmp-media-controls__volume {\n          flex: 100;\n          max-height: 40px;\n        }\n        .mmp-media-controls__volume.--buttons {\n          justify-content: left;\n        }\n        .mmp-media-controls__media {\n          direction: ltr;\n          max-width: calc(40px * 3);\n          margin-right: 0;\n          margin-left: auto;\n        }\n        .mmp-media-controls__media[flow] {\n          max-width: none;\n        }\n        .mmp-media-controls__shuffle {\n          flex: 3;\n          flex-shrink: 200;\n          justify-content: center;\n        }\n        .mmp-media-controls__shuffle paper-icon-button {\n          height: 36px;\n          width: 36px;\n          min-width: 36px;\n          margin: 2px;\n        }\n      "]);
        return v = function() {
            return a
        }, a
    }

    function w() {
        const a = sa(["\n          <paper-icon-button\n            @click=", "\n            .icon=", ">\n          </paper-icon-button>\n        "]);
        return w = function() {
            return a
        }, a
    }

    function x() {
        const a = sa(["\n          <paper-icon-button\n            @click=", "\n            .icon=", ">\n          </paper-icon-button>\n        "]);
        return x = function() {
            return a
        }, a
    }

    function y() {
        const a = sa(["\n          <paper-icon-button\n            @click=", "\n            .icon=", ">\n          </paper-icon-button>\n        "]);
        return y = function() {
            return a
        }, a
    }

    function z() {
        const a = sa(["\n          <paper-icon-button\n            @click=", "\n            .icon=", ">\n          </paper-icon-button>\n        "]);
        return z = function() {
            return a
        }, a
    }

    function A() {
        const a = sa(["\n      <div class='mmp-media-controls__volume --buttons flex'>\n        ", "\n        <paper-icon-button\n          @click=", "\n          .icon=", ">\n        </paper-icon-button>\n        <paper-icon-button\n          @click=", "\n          .icon=", ">\n        </paper-icon-button>\n      </div>"]);
        return A = function() {
            return a
        }, a
    }

    function B() {
        const a = sa(["\n      <div class='mmp-media-controls__volume --slider flex'>\n        ", "\n        <ha-slider\n          @change=", "\n          @click=", "\n          ?disabled=", "\n          min=", " max=", "\n          value=", "\n          dir=", "\n          ignore-bar-touch pin>\n        </ha-slider>\n      </div>"]);
        return B = function() {
            return a
        }, a
    }

    function C() {
        const a = sa([""]);
        return C = function() {
            return a
        }, a
    }

    function D() {
        const a = sa(["\n        <div class='flex mmp-media-controls__media' ?flow=", ">\n          <paper-icon-button\n            @click=", "\n            .icon=", ">\n          </paper-icon-button>\n          <paper-icon-button\n            @click=", "\n            .icon=", ">\n          </paper-icon-button>\n          <paper-icon-button\n            @click=", "\n            .icon=", ">\n          </paper-icon-button>\n        </div>\n      "]);
        return D = function() {
            return a
        }, a
    }

    function E() {
        const a = sa([""]);
        return E = function() {
            return a
        }, a
    }

    function F() {
        const a = sa(["\n        <div class='flex mmp-media-controls__shuffle'>\n          <paper-icon-button\n            class='shuffle-button'\n            @click=", "\n            .icon=", "\n            ?color=", ">\n          </paper-icon-button>\n        </div>\n      "]);
        return F = function() {
            return a
        }, a
    }

    function G() {
        const a = sa([""]);
        return G = function() {
            return a
        }, a
    }

    function H() {
        const a = sa(["\n      ", "\n      ", "\n      ", "\n    "]);
        return H = function() {
            return a
        }, a
    }

    function I() {
        const a = sa(["\n      :host {\n        max-width: 120px;\n        min-width: 40px;\n      }\n      :host([full]) {\n        max-width: none;\n      }\n    "]);
        return I = function() {
            return a
        }, a
    }

    function J() {
        const a = sa(["\n      <mmp-dropdown\n        @change=", "\n        .items=", "\n        .label=", "\n        .selected=", "\n        .icon=", "\n      />\n    "]);
        return J = function() {
            return a
        }, a
    }

    function K() {
        const a = sa(["\n      :host {\n        max-width: 120px;\n        min-width: 40px;\n      }\n      :host([full]) {\n        max-width: none;\n      }\n    "]);
        return K = function() {
            return a
        }, a
    }

    function L() {
        const a = sa(["\n      <mmp-dropdown\n        @change=", "\n        .items=", "\n        .label=", "\n        .selected=", "\n        .icon=", "\n      />\n    "]);
        return L = function() {
            return a
        }, a
    }

    function M() {
        const a = sa(["\n      .mmp-progress {\n        cursor: pointer;\n        left: 0; right: 0; bottom: 0;\n        position: absolute;\n        pointer-events: auto;\n        min-height: 10px;\n      }\n      .mmp-progress__duration {\n        display: flex;\n        justify-content: space-between;\n        font-size: .8em;\n        margin: 8px calc(var(--ha-card-border-radius, 4px) / 2);\n        margin-top: 0;\n        padding: 0 6px;\n      }\n      paper-progress {\n        height: var(--paper-progress-height, 4px);\n        bottom: 0;\n        position: absolute;\n        width: 100%;\n        --paper-progress-active-color: var(--mmp-accent-color);\n        --paper-progress-container-color: rgba(100,100,100,.15);\n        --paper-progress-transition-duration: 1s;\n        --paper-progress-transition-timing-function: linear;\n        --paper-progress-transition-delay: 0s;\n      }\n      .mmp-progress[paused] paper-progress {\n        --paper-progress-active-color: var(--disabled-text-color, rgba(150,150,150,.5));\n      }\n    "]);
        return M = function() {
            return a
        }, a
    }

    function N() {
        const a = sa([""]);
        return N = function() {
            return a
        }, a
    }

    function O() {
        const a = sa(["\n            <div class='mmp-progress__duration'>\n              <span>", "</span>\n              <span>", "</span>\n            </div>\n          "]);
        return O = function() {
            return a
        }, a
    }

    function P() {
        const a = sa(["\n        <div class='mmp-progress'\n          @click=", "\n          ?paused=", ">\n          ", "\n          <paper-progress class='transiting'\n            value=", "\n            max=", ">\n          </paper-progress>\n        </div>\n      "]);
        return P = function() {
            return a
        }, a
    }

    function Q() {
        const a = sa(["\n      :host {\n        align-items: center;\n        margin-left: 8px;\n        display: flex;\n      }\n      .mmp-tts__input {\n        cursor: text;\n        flex: 1;\n        margin-right: 8px;\n        --paper-input-container-input: {\n          font-size: 1em;\n        };\n      }\n      ha-card[rtl] .mmp-tts__input {\n        margin-right: auto;\n        margin-left: 8px;\n      }\n      .mmp-tts__button {\n        margin: 0;\n        height: 30px;\n        padding: 0 .4em;\n      }\n      paper-input {\n        opacity: .75;\n        --paper-input-container-color: var(--mmp-text-color);\n        --paper-input-container-focus-color: var(--mmp-text-color);\n        --paper-input-container: {\n          padding: 0;\n        };\n      }\n      paper-input[focused] {\n        opacity: 1;\n      }\n\n      ha-card[artwork*='cover'][has-artwork] paper-input {\n        --paper-input-container-focus-color: #FFFFFF;\n      }\n      ha-card[artwork*='cover'][has-artwork] paper-input {\n        --paper-input-container-color: #FFFFFF;\n        --paper-input-container-input-color: #FFFFFF;\n      }\n    "]);
        return Q = function() {
            return a
        }, a
    }

    function R() {
        const a = sa(["\n      <paper-input id=\"tts-input\" class='mmp-tts__input'\n        no-label-float\n        placeholder=", "...\n        @click=", ">\n      </paper-input>\n      <mmp-button class='mmp-tts__button' @click=", ">\n        <span>SEND</span>\n      </mmp-button>\n    "]);
        return R = function() {
            return a
        }, a
    }

    function S() {
        const a = sa(["\n        .mmp-shortcuts__buttons {\n          box-sizing: border-box;\n          display: flex;\n          flex-wrap: wrap;\n          margin-top: 8px;\n        }\n        .mmp-shortcuts__button {\n          min-width: calc(50% - 8px);\n          flex: 1;\n        }\n        .mmp-shortcuts__button > div {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          width: 100%;\n        }\n        .mmp-shortcuts__button > div[align='left'] {\n          justify-content: flex-start;\n        }\n        .mmp-shortcuts__button > div[align='right'] {\n          justify-content: flex-end;\n        }\n        .mmp-shortcuts__button[columns='1'] {\n          min-width: calc(100% - 8px);\n        }\n        .mmp-shortcuts__button[columns='3'] {\n          min-width: calc(33.33% - 8px);\n        }\n        .mmp-shortcuts__button[columns='4'] {\n          min-width: calc(25% - 8px);\n        }\n        .mmp-shortcuts__button[columns='5'] {\n          min-width: calc(20% - 8px);\n        }\n        .mmp-shortcuts__button > div > span {\n          line-height: 24px;\n          text-transform: initial;\n        }\n        .mmp-shortcuts__button > div > *:nth-child(2) {\n          margin-left: 4px;\n        }\n      "]);
        return S = function() {
            return a
        }, a
    }

    function T() {
        const a = sa(["\n      ", "\n      ", "\n    "]);
        return T = function() {
            return a
        }, a
    }

    function U() {
        const a = sa(["<span class=\"ellipsis\">", "</span>"]);
        return U = function() {
            return a
        }, a
    }

    function V() {
        const a = sa(["<iron-icon .icon=", "></iron-icon>"]);
        return V = function() {
            return a
        }, a
    }

    function W() {
        const a = sa(["\n          <mmp-button\n            style=", "\n            raised\n            columns=", "\n            ?color=", "\n            class='mmp-shortcuts__button'\n            @click=", ">\n            <div align=", ">\n              ", "\n              ", "\n            </div>\n          </mmp-button>"]);
        return W = function() {
            return a
        }, a
    }

    function X() {
        const a = sa(["\n      <div class='mmp-shortcuts__buttons'>\n        ", "\n      </div>\n    "]);
        return X = function() {
            return a
        }, a
    }

    function Y() {
        const a = sa(["\n      <mmp-dropdown class='mmp-shortcuts__dropdown'\n        @change=", "\n        .items=", "\n        .label=", "\n        .selected=", ">\n      </mmp-dropdown>\n    "]);
        return Y = function() {
            return a
        }, a
    }

    function Z() {
        const a = sa([""]);
        return Z = function() {
            return a
        }, a
    }

    function $() {
        const a = sa(["\n        :host {\n          display: block;\n        }\n        :host([faded]) {\n          opacity: .75;\n        }\n        :host[small] .mmp-dropdown__label {\n          max-width: 60px;\n          display: block;\n          position: relative;\n          width: auto;\n          text-transform: initial;\n        }\n        :host[full] .mmp-dropdown__label {\n          max-width: none;\n        }\n        .mmp-dropdown {\n          padding: 0;\n          display: block;\n        }\n        .mmp-dropdown__button {\n          display: flex;\n          font-size: 1em;\n          justify-content: space-between;\n          align-items: center;\n          height: 36px;\n          margin: 2px 0;\n        }\n        .mmp-dropdown__button.icon {\n          height: 40px;\n          margin: 0;\n        }\n        .mmp-dropdown__button > div {\n          display: flex;\n          flex: 1;\n          justify-content: space-between;\n          align-items: center;\n          height: 36px;\n          max-width: 100%;\n        }\n        .mmp-dropdown__label {\n          text-align: left;\n          text-transform: none;\n        }\n        .mmp-dropdown__icon {\n          height: 24px;\n          width: 24px;\n          min-width: 24px;\n        }\n        paper-item > *:nth-child(2) {\n          margin-left: 4px;\n        }\n        paper-menu-button[focused] mmp-button iron-icon {\n          color: var(--mmp-accent-color);\n          transform: rotate(180deg);\n        }\n        paper-menu-button[focused] paper-icon-button {\n          color: var(--mmp-accent-color);\n          transform: rotate(180deg);\n        }\n        paper-menu-button[focused] paper-icon-button[focused] {\n          color: var(--mmp-text-color);\n          transform: rotate(0deg);\n        }\n      "]);
        return $ = function() {
            return a
        }, a
    }

    function _() {
        const a = sa(["<span class='mmp-dropdown__item__label'>", "</span>"]);
        return _ = function() {
            return a
        }, a
    }

    function aa() {
        const a = sa(["<iron-icon .icon=", "></iron-icon>"]);
        return aa = function() {
            return a
        }, a
    }

    function ba() {
        const a = sa(["\n            <paper-item\n              value=", "\n              @click=", ">\n              ", "\n              ", "\n            </paper-item>"]);
        return ba = function() {
            return a
        }, a
    }

    function ca() {
        const a = sa(["\n          <mmp-button class='mmp-dropdown__button' slot='dropdown-trigger'>\n            <div>\n              <span class='mmp-dropdown__label ellipsis'>\n                ", "\n              </span>\n              <iron-icon class='mmp-dropdown__icon' .icon=", "></iron-icon>\n            </div>\n          </mmp-button>\n        "]);
        return ca = function() {
            return a
        }, a
    }

    function da() {
        const a = sa(["\n          <paper-icon-button\n            class='mmp-dropdown__button icon'\n            slot='dropdown-trigger'\n            .icon=", ">\n          </paper-icon-button>\n        "]);
        return da = function() {
            return a
        }, a
    }

    function ea() {
        const a = sa(["\n      <paper-menu-button\n        class='mmp-dropdown'\n        noink no-animations\n        .horizontalAlign=", "\n        .verticalAlign=", "\n        .verticalOffset=", "\n        @click=", ">\n        ", "\n        <paper-listbox slot=\"dropdown-content\" selected=", ">\n          ", "\n        </paper-listbox>\n      </paper-menu-button>\n    "]);
        return ea = function() {
            return a
        }, a
    }

    function fa() {
        const a = sa(["\n  .ellipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .label {\n    margin: 0 8px;\n  }\n  paper-icon-button {\n    transition: color .25s;\n  }\n  paper-icon-button[color] {\n    color: var(--mmp-accent-color) !important;\n    opacity: 1 !important;\n  }\n  paper-icon-button[inactive] {\n    opacity: .5;\n  }\n"]);
        return fa = function() {
            return a
        }, a
    }

    function ga() {
        const a = sa(["\n      .mmp-group-list {\n        display: flex;\n        flex-direction: column;\n        margin-left: 8px;\n        margin-bottom: 8px;\n      }\n      .mmp-group-list__title {\n        font-weight: 500;\n        letter-spacing: .1em;\n        margin: 8px 0 4px;\n        text-transform: uppercase;\n      }\n      .mmp-group-list__buttons {\n        display: flex;\n      }\n      .mmp-group-list__button {\n        margin: 8px 8px 0 0;\n        min-width: 0;\n        text-transform: uppercase;\n        text-align: center;\n        width: 50%;\n        --mdc-theme-primary: transparent;\n        background: rgba(255,255,255,0.25);\n      }\n    "]);
        return ga = function() {
            return a
        }, a
    }

    function ha() {
        const a = sa([""]);
        return ha = function() {
            return a
        }, a
    }

    function ia() {
        const a = sa(["Leave"]);
        return ia = function() {
            return a
        }, a
    }

    function ja() {
        const a = sa(["Ungroup"]);
        return ja = function() {
            return a
        }, a
    }

    function ka() {
        const a = sa(["\n          <mmp-group-item\n            @change=", "\n            .item=", "\n            .checked=", "\n            .disabled=", "\n            .master=", "\n          />"]);
        return ka = function() {
            return a
        }, a
    }

    function la() {
        const a = sa(["\n      <div class='mmp-group-list' ?visible=", ">\n        <span class='mmp-group-list__title'>Group speakers</span>\n        ", "\n        <div class='mmp-group-list__buttons'>\n          <mmp-button\n            class='mmp-group-list__button'\n            raised\n            ?disabled=", "\n            @click=", ">\n            <span>", "</span>\n          </mmp-button>\n          <mmp-button\n            class='mmp-group-list__button'\n            raised\n            ?disabled=", "\n            @click=", ">\n            <span>Group all</span>\n          </mmp-button>\n        </div>\n      </div>\n    "]);
        return la = function() {
            return a
        }, a
    }

    function ma() {
        const a = sa(["\n      :host {\n        position: relative;\n        box-sizing: border-box;\n        margin: 4px;\n        min-width: 0;\n        overflow: hidden;\n        transition: background .5s;\n      }\n      :host([raised]) {\n        background: rgba(255,255,255,0.25);\n        min-height: 36px;\n        box-shadow:\n          0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n          0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n          0px 1px 5px 0px rgba(0,0,0,.12);\n      }\n      :host([color]) {\n        background: var(--mmp-active-color);\n        transition: background .25s;\n        opacity: 1;\n      }\n      :host([faded]) {\n        opacity: .75;\n      }\n      .container {\n        height: 100%;\n        width: 100%;\n      }\n      .slot-container {\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 0 8px;\n        width: auto;\n      }\n      paper-ripple {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n      }\n    "]);
        return ma = function() {
            return a
        }, a
    }

    function na() {
        const a = sa(["\n      <div class=\"container\">\n        <div class=\"slot-container\">\n          <slot></slot>\n        </div>\n        <paper-ripple></paper-ripple>\n      </div>\n    "]);
        return na = function() {
            return a
        }, a
    }

    function oa() {
        const a = sa(["\n      paper-checkbox {\n        padding: 8px 0;\n      }\n      paper-checkbox > span {\n        font-weight: 600;\n      }\n\n      ha-card[artwork*='cover'][has-artwork] paper-checkbox[disabled] {\n        --paper-checkbox-checkmark-color: rgba(0,0,0,.5);\n      }\n      ha-card[artwork*='cover'][has-artwork] paper-checkbox {\n        --paper-checkbox-unchecked-color: #FFFFFF;\n        --paper-checkbox-label-color: #FFFFFF;\n      }\n    "]);
        return oa = function() {
            return a
        }, a
    }

    function pa() {
        const a = sa(["<span>(master)</span>"]);
        return pa = function() {
            return a
        }, a
    }

    function qa() {
        const a = sa(["\n      <paper-checkbox\n        ?checked=", "\n        ?disabled=", "\n        @change='", "'\n        @click='", "'>\n        ", "\n        ", "\n      </paper-checkbox>\n    "]);
        return qa = function() {
            return a
        }, a
    }

    function ra() {
        const a = sa(["\n  :host {\n    overflow: visible !important;\n    display: block;\n    --mmp-accent-color: var(--mini-media-player-accent-color, var(--accent-color, #f39c12));\n    --mmp-base-color: var(--mini-media-player-base-color, var(--primary-text-color, #000));\n    --mmp-overlay-color: var(--mini-media-player-overlay-color, rgba(0,0,0,0.5));\n    --mmp-overlay-base-color: var(--mini-media-player-overlay-base-color, #fff);\n    --mmp-overlay-accent-color: var(--mini-media-player-overlay-accent-color, --mmp-accent-color);\n    --mmp-text-color: var(--mini-media-player-base-color, --primary-text-color);\n    --mmp-media-cover-info-color: var(--mini-media-player-media-cover-info-color, --mmp-text-color);\n    --mmp-text-color-inverted: var(--disabled-text-color);\n    --mmp-active-color: var(--mmp-accent-color);\n    --mmp-icon-color: var(--mini-media-player-icon-color, var(--mini-media-player-base-color, var(--paper-item-icon-color, #44739e)));\n    --mmp-info-opacity: 1;\n    --mmp-artwork-opacity: var(--mini-media-player-artwork-opacity, 1);\n    --mdc-theme-primary: var(--mmp-text-color);\n    --mdc-theme-on-primary: var(--mmp-text-color);\n    --paper-checkbox-unchecked-color: var(--mmp-text-color);\n    --paper-checkbox-label-color: var(--mmp-text-color);\n    color: var(--mmp-text-color);\n  }\n  ha-card.--bg {\n    --mmp-info-opacity: .75;\n  }\n  ha-card.--has-artwork[artwork*='cover'] {\n    --mmp-accent-color: var(--mini-media-player-overlay-accent-color, var(--mini-media-player-accent-color, var(--accent-color, #f39c12)));\n    --mmp-text-color: var(--mmp-overlay-base-color);\n    --mmp-text-color-inverted: #000;\n    --mmp-active-color: rgba(255,255,255,.5);\n    --mmp-icon-color: var(--mmp-text-color);\n    --mmp-info-opacity: .75;\n    --paper-slider-container-color: var(--mini-media-player-overlay-color, rgba(255,255,255,.75));\n    --mdc-theme-primary: var(--mmp-text-color);\n    --mdc-theme-on-primary: var(--mmp-text-color);\n    --paper-checkbox-unchecked-color: var(--mmp-text-color);\n    --paper-checkbox-label-color: var(--mmp-text-color);\n    color: var(--mmp-text-color);\n  }\n  ha-card {\n    cursor: default;\n    display: flex;\n    background: transparent;\n    overflow: hidden;\n    padding: 0;\n    position: relative;\n    color: inherit;\n  }\n  ha-card.--group {\n    box-shadow: none;\n  }\n  ha-card.--more-info {\n    cursor: pointer;\n  }\n  ha-card.--collapse {\n    overflow: visible;\n  }\n  .mmp__bg, .mmp__player, .mmp__container {\n    border-radius: var(--ha-card-border-radius, 0);\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n  }\n  .mmp__container {\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    pointer-events: none;\n  }\n  ha-card:before {\n    content: '';\n    padding-top: 0px;\n    transition: padding-top .5s cubic-bezier(.21,.61,.35,1);\n    will-change: padding-top;\n  }\n  ha-card.--initial .entity__artwork,\n  ha-card.--initial .entity__icon {\n    animation-duration: .001s;\n  }\n  ha-card.--initial:before,\n  ha-card.--initial .mmp-player {\n    transition: none;\n  }\n  header {\n    display: none;\n  }\n  ha-card[artwork='full-cover'].--has-artwork:before {\n    padding-top: 56%;\n  }\n  ha-card[artwork='full-cover'].--has-artwork[content='music']:before,\n  ha-card[artwork='full-cover-fit'].--has-artwork:before {\n    padding-top: 100%;\n  }\n  .mmp__bg {\n    background: var(--ha-card-background, var(--paper-card-background-color, white));\n    position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    overflow: hidden;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n  }\n  ha-card[artwork*='cover'].--has-artwork .mmp__bg {\n    opacity: var(--mmp-artwork-opacity);\n    background: transparent;\n  }\n  ha-card.--group .mmp__bg {\n    background: transparent;\n  }\n  .cover,\n  .cover:before {\n    display: block;\n    opacity: 0;\n    position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    transition: opacity .75s cubic-bezier(.21,.61,.35,1);\n    will-change: opacity;\n  }\n  .cover {\n    animation: fade-in .5s cubic-bezier(.21,.61,.35,1);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n  }\n  .cover:before {\n    background: var(--mmp-overlay-color);\n    content: '';\n  }\n  ha-card[artwork*='full-cover'].--has-artwork .mmp-player {\n    background: linear-gradient(to top, var(--mmp-overlay-color) 25%, transparent 100%);\n    border-bottom-left-radius: var(--ha-card-border-radius, 0);\n    border-bottom-right-radius: var(--ha-card-border-radius, 0);\n  }\n  ha-card.--has-artwork .cover,\n  ha-card.--has-artwork[artwork='cover'] .cover:before,\n  ha-card.--bg .cover {\n    opacity: .999;\n  }\n  ha-card[artwork='default'] .cover {\n    display: none;\n  }\n  ha-card.--bg .cover {\n    display: block;\n  }\n  ha-card[artwork='full-cover-fit'].--has-artwork .cover {\n    background-color: black;\n    background-size: contain;\n  }\n  .mmp-player {\n    align-self: flex-end;\n    box-sizing: border-box;\n    position: relative;\n    padding: 16px;\n    transition: padding .25s ease-out;\n    width: 100%;\n    will-change: padding;\n  }\n  ha-card.--group .mmp-player {\n    padding: 2px 0;\n  }\n  .flex {\n    display: flex;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    flex-direction: row;\n  }\n  .mmp-player__core {\n    position: relative;\n  }\n  .entity__info {\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n    margin-left: 8px;\n    position: relative;\n    overflow: hidden;\n    user-select: none;\n  }\n  ha-card.--rtl .entity__info {\n    margin-left: auto;\n    margin-right: 8px;\n  }\n  ha-card[content='movie'] .attr__media_season,\n  ha-card[content='movie'] .attr__media_episode {\n    display: none;\n  }\n  .entity__icon {\n    color: var(--mmp-icon-color);\n  }\n  .entity__artwork, .entity__icon {\n    animation: fade-in .25s ease-out;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    border-radius: 100%;\n    height: 40px;\n    width: 40px;\n    min-width: 40px;\n    line-height: 40px;\n    margin-right: 8px;\n    position: relative;\n    text-align: center;\n    will-change: border-color;\n    transition: border-color .25s ease-out;\n  }\n  ha-card.--rtl .entity__artwork,\n  ha-card.--rtl .entity__icon {\n    margin-right: auto;\n  }\n  .entity__artwork[border] {\n    border: 2px solid var(--primary-text-color);\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n  }\n  .entity__artwork[border][state='playing'] {\n    border-color: var(--mmp-accent-color);\n  }\n  .entity__info__name,\n  .entity__info__media[short] {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .entity__info__name {\n    line-height: 20px;\n    color: var(--mmp-text-color);\n  }\n  .entity__info__media {\n    color: var(--secondary-text-color);\n    max-height: 6em;\n    word-break: break-word;\n    opacity: var(--mmp-info-opacity);\n    transition: color .5s;\n  }\n  .entity__info__media[short] {\n    max-height: 20px;\n    overflow: hidden;\n  }\n  .attr__app_name {\n    display: none;\n  }\n  .attr__app_name:first-child,\n  .attr__app_name:first-of-type {\n    display: inline;\n  }\n  .mmp-player__core[inactive] .entity__info__media {\n    color: var(--mmp-text-color);\n    max-width: 200px;\n    opacity: .5;\n  }\n  .entity__info__media[short-scroll] {\n    max-height: 20px;\n    white-space: nowrap;\n  }\n  .entity__info__media[scroll] > span {\n    visibility: hidden;\n  }\n  .entity__info__media[scroll] > div {\n    animation: move linear infinite;\n  }\n  .entity__info__media[scroll] .marquee {\n    animation: slide linear infinite;\n  }\n  .entity__info__media[scroll] .marquee,\n  .entity__info__media[scroll] > div {\n    animation-duration: inherit;\n    visibility: visible;\n  }\n  .entity__info__media[scroll] {\n    animation-duration: 10s;\n    mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);\n    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);\n  }\n  .marquee {\n    visibility: hidden;\n    position: absolute;\n    white-space: nowrap;\n  }\n  ha-card[artwork*='cover'].--has-artwork .entity__info__media,\n  ha-card.--bg .entity__info__media {\n    color: var(--mmp-media-cover-info-color);\n  }\n  .entity__info__media span:before {\n    content: ' - ';\n  }\n  .entity__info__media span:first-of-type:before {\n    content: '';\n  }\n  .entity__info__media span:empty {\n    display: none;\n  }\n  .mmp-player__adds {\n    margin-left: 48px;\n    position: relative;\n  }\n  ha-card.--rtl .mmp-player__adds {\n    margin-left: auto;\n    margin-right: 48px;\n  }\n  .mmp-player__adds > *:nth-child(2) {\n    margin-top: 0px;\n  }\n  mmp-powerstrip {\n    flex: 1;\n    justify-content: flex-end;\n    margin-right: 0;\n    margin-left: auto;\n    width: auto;\n    max-width: 100%;\n  }\n  mmp-media-controls {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  ha-card.--flow mmp-powerstrip {\n    justify-content: space-between;\n    margin-left: auto;\n  }\n  ha-card.--flow.--rtl mmp-powerstrip {\n    margin-right: auto;\n  }\n  ha-card.--flow .entity__info {\n    display: none;\n  }\n  ha-card.--responsive .mmp-player__adds {\n    margin-left: 0;\n  }\n  ha-card.--responsive.--rtl .mmp-player__adds {\n    margin-right: 0;\n  }\n  ha-card.--responsive .mmp-player__adds > mmp-media-controls {\n    padding: 0;\n  }\n  ha-card.--runtime .mmp-player {\n    padding-bottom: calc(16px + 8px);\n  }\n  ha-card.--runtime.--group .mmp-player {\n    padding-bottom: calc(16px + 8px);\n  }\n  .mmp-player div:empty {\n    display: none;\n  }\n  @keyframes slide {\n    100% { transform: translateX(-100%); }\n  }\n  @keyframes move {\n    from { transform: translateX(100%); }\n    to { transform: translateX(0); }\n  }\n  @keyframes fade-in {\n    from { opacity: 0; }\n    to { opacity: 1; }\n  }\n"]);
        return ra = function() {
            return a
        }, a
    }

    function sa(a, b) {
        return b || (b = a.slice(0)), Object.freeze(Object.defineProperties(a, {
            raw: {
                value: Object.freeze(b)
            }
        }))
    }

    function ta(a, b) {
        return wa(a) || va(a, b) || ua()
    }

    function ua() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }

    function va(a, b) {
        var c = [],
            d = !0,
            e = !1,
            f = void 0;
        try {
            for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !(b && c.length === b)); d = !0);
        } catch (a) {
            e = !0, f = a
        } finally {
            try {
                d || null == h["return"] || h["return"]()
            } finally {
                if (e) throw f
            }
        }
        return c
    }

    function wa(a) {
        if (Array.isArray(a)) return a
    }

    function xa(a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = null == arguments[b] ? {} : arguments[b],
                d = Object.keys(c);
            "function" == typeof Object.getOwnPropertySymbols && (d = d.concat(Object.getOwnPropertySymbols(c).filter(function(a) {
                return Object.getOwnPropertyDescriptor(c, a).enumerable
            }))), d.forEach(function(b) {
                ya(a, b, c[b])
            })
        }
        return a
    }

    function ya(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a
    }

    function za(a, b, c, d, e, f, g) {
        try {
            var h = a[f](g),
                i = h.value
        } catch (a) {
            return void c(a)
        }
        h.done ? b(i) : Promise.resolve(i).then(d, e)
    }

    function Aa(a) {
        return function() {
            var b = this,
                c = arguments;
            return new Promise(function(d, e) {
                function f(a) {
                    za(h, d, e, f, g, "next", a)
                }

                function g(a) {
                    za(h, d, e, f, g, "throw", a)
                }
                var h = a.apply(b, c);
                f(void 0)
            })
        }
    }(function(a, b) {
        "object" == typeof exports && "undefined" != typeof module ? b() : "function" == typeof define && define.amd ? define(b) : b()
    })(this, function() {
        function sa(a) {
            let b = kb.get(a.type);
            void 0 === b && (b = {
                stringsArray: new WeakMap,
                keyString: new Map
            }, kb.set(a.type, b));
            let c = b.stringsArray.get(a.strings);
            if (void 0 !== c) return c;
            const d = a.strings.join(Pa);
            return c = b.keyString.get(d), void 0 === c && (c = new Ta(a, a.getTemplateElement()), b.keyString.set(d, c)), b.stringsArray.set(a.strings, c), c
        }

        function ua(a, b) {
            const c = a.element.content,
                d = a.parts,
                e = document.createTreeWalker(c, ob, null, !1);
            let f = qb(d),
                g = d[f],
                h = -1,
                i = 0;
            const j = [];
            for (let c = null; e.nextNode();) {
                h++;
                const a = e.currentNode;
                for (a.previousSibling === c && (c = null), b.has(a) && (j.push(a), null === c && (c = a)), null !== c && i++; g !== void 0 && g.index === h;) g.index = null === c ? g.index - i : -1, f = qb(d, f), g = d[f]
            }
            j.forEach(a => a.parentNode.removeChild(a))
        }

        function va(a, b) {
            let c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            const d = a.element.content,
                e = a.parts;
            if (null === c || void 0 === c) return void d.appendChild(b);
            const f = document.createTreeWalker(d, ob, null, !1);
            let g = qb(e),
                h = 0,
                i = -1;
            for (; f.nextNode();) {
                i++;
                const a = f.currentNode;
                for (a === c && (h = pb(b), c.parentNode.insertBefore(b, c)); - 1 !== g && e[g].index === i;) {
                    if (0 < h) {
                        for (; - 1 !== g;) e[g].index += h, g = qb(e, g);
                        return
                    }
                    g = qb(e, g)
                }
            }
        }

        function wa(a) {
            let b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : [];
            for (let c = 0, d = a.length; c < d; c++) {
                const d = a[c];
                Array.isArray(d) ? wa(d, b) : b.push(d)
            }
            return b
        }

        function ya(a, b) {
            function c() {
                f && (f = !1, a()), g && e()
            }

            function d() {
                Vb(c)
            }

            function e() {
                var a = Date.now();
                if (f) {
                    if (a - h < 2) return;
                    g = !0
                } else f = !0, g = !1, setTimeout(d, b);
                h = a
            }
            var f = !1,
                g = !1,
                h = 0;
            return e
        }

        function za(a) {
            return parseFloat(a) || 0
        }

        function Ba(a) {
            for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
            return b.reduce(function(b, c) {
                var d = a["border-" + c + "-width"];
                return b + za(d)
            }, 0)
        }

        function Ca(a) {
            for (var b = ["top", "right", "bottom", "left"], c = {}, d = 0, e = b; d < e.length; d++) {
                var f = e[d],
                    g = a["padding-" + f];
                c[f] = za(g)
            }
            return c
        }

        function Da(a) {
            var b = a.getBBox();
            return Ia(0, 0, b.width, b.height)
        }

        function Ea(a) {
            var b = Math.abs,
                c = Math.round,
                d = a.clientWidth,
                e = a.clientHeight;
            if (!d && !e) return _b;
            var f = $b(a).getComputedStyle(a),
                g = Ca(f),
                h = g.left + g.right,
                i = g.top + g.bottom,
                j = za(f.width),
                k = za(f.height);
            if ("border-box" === f.boxSizing && (c(j + h) !== d && (j -= Ba(f, "left", "right") + h), c(k + i) !== e && (k -= Ba(f, "top", "bottom") + i)), !Fa(a)) {
                var l = c(j + h) - d,
                    m = c(k + i) - e;
                1 !== b(l) && (j -= l), 1 !== b(m) && (k -= m)
            }
            return Ia(g.left, g.top, j, k)
        }

        function Fa(a) {
            return a === $b(a).document.documentElement
        }

        function Ga(a) {
            return Tb ? ac(a) ? Da(a) : Ea(a) : _b
        }

        function Ha(a) {
            var b = a.x,
                c = a.y,
                d = a.width,
                e = a.height,
                f = "undefined" == typeof DOMRectReadOnly ? Object : DOMRectReadOnly,
                g = Object.create(f.prototype);
            return Zb(g, {
                x: b,
                y: c,
                width: d,
                height: e,
                top: c,
                right: b + d,
                bottom: e + c,
                left: b
            }), g
        }

        function Ia(a, b, c, d) {
            return {
                x: a,
                y: b,
                width: c,
                height: d
            }
        }
        const Ja = new WeakMap,
            Ka = a => "function" == typeof a && Ja.has(a),
            La = window.customElements !== void 0 && window.customElements.polyfillWrapFlushCallback !== void 0,
            Ma = function(a, b) {
                for (let c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; b !== c;) {
                    const c = b.nextSibling;
                    a.removeChild(b), b = c
                }
            },
            Na = {},
            Oa = {},
            Pa = "{{lit-".concat((Math.random() + "").slice(2), "}}"),
            Qa = "<!--".concat(Pa, "-->"),
            Ra = new RegExp("".concat(Pa, "|").concat(Qa)),
            Sa = "$lit$";
        class Ta {
            constructor(a, b) {
                this.parts = [], this.element = b;
                const c = [],
                    d = [],
                    e = document.createTreeWalker(b.content, 133, null, !1);
                let f = 0,
                    g = -1,
                    h = 0;
                for (const i = a.strings, j = a.values.length; h < j;) {
                    const a = e.nextNode();
                    if (null === a) {
                        e.currentNode = d.pop();
                        continue
                    }
                    if (g++, 1 === a.nodeType) {
                        if (a.hasAttributes()) {
                            const b = a.attributes,
                                c = b.length;
                            let d = 0;
                            for (let a = 0; a < c; a++) Ua(b[a].name, Sa) && d++;
                            for (; 0 < d--;) {
                                const b = i[h],
                                    c = Xa.exec(b)[2],
                                    d = c.toLowerCase() + Sa,
                                    e = a.getAttribute(d);
                                a.removeAttribute(d);
                                const f = e.split(Ra);
                                this.parts.push({
                                    type: "attribute",
                                    index: g,
                                    name: c,
                                    strings: f
                                }), h += f.length - 1
                            }
                        }
                        "TEMPLATE" === a.tagName && (d.push(a), e.currentNode = a.content)
                    } else if (3 === a.nodeType) {
                        const b = a.data;
                        if (0 <= b.indexOf(Pa)) {
                            const d = a.parentNode,
                                e = b.split(Ra),
                                f = e.length - 1;
                            for (let b = 0; b < f; b++) {
                                let c, f = e[b];
                                if ("" === f) c = Wa();
                                else {
                                    const a = Xa.exec(f);
                                    null !== a && Ua(a[2], Sa) && (f = f.slice(0, a.index) + a[1] + a[2].slice(0, -Sa.length) + a[3]), c = document.createTextNode(f)
                                }
                                d.insertBefore(c, a), this.parts.push({
                                    type: "node",
                                    index: ++g
                                })
                            }
                            "" === e[f] ? (d.insertBefore(Wa(), a), c.push(a)) : a.data = e[f], h += f
                        }
                    } else if (8 === a.nodeType)
                        if (a.data === Pa) {
                            const b = a.parentNode;
                            (null === a.previousSibling || g == f) && (g++, b.insertBefore(Wa(), a)), f = g, this.parts.push({
                                type: "node",
                                index: g
                            }), null === a.nextSibling ? a.data = "" : (c.push(a), g--), h++
                        } else
                            for (let b = -1; - 1 !== (b = a.data.indexOf(Pa, b + 1));) this.parts.push({
                                type: "node",
                                index: -1
                            }), h++
                }
                for (const d of c) d.parentNode.removeChild(d)
            }
        }
        const Ua = (a, b) => {
                const c = a.length - b.length;
                return 0 <= c && a.slice(c) === b
            },
            Va = a => -1 !== a.index,
            Wa = () => document.createComment(""),
            Xa = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
        class Ya {
            constructor(a, b, c) {
                this.__parts = [], this.template = a, this.processor = b, this.options = c
            }
            update(a) {
                let b = 0;
                for (const c of this.__parts) void 0 !== c && c.setValue(a[b]), b++;
                for (const b of this.__parts) void 0 !== b && b.commit()
            }
            _clone() {
                const a = La ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
                    b = [],
                    c = this.template.parts,
                    d = document.createTreeWalker(a, 133, null, !1);
                let e, f = 0,
                    g = 0,
                    h = d.nextNode();
                for (; f < c.length;) {
                    if (e = c[f], !Va(e)) {
                        this.__parts.push(void 0), f++;
                        continue
                    }
                    for (; g < e.index;) g++, "TEMPLATE" === h.nodeName && (b.push(h), d.currentNode = h.content), null === (h = d.nextNode()) && (d.currentNode = b.pop(), h = d.nextNode());
                    if ("node" === e.type) {
                        const a = this.processor.handleTextExpression(this.options);
                        a.insertAfterNode(h.previousSibling), this.__parts.push(a)
                    } else this.__parts.push(...this.processor.handleAttributeExpressions(h, e.name, e.strings, this.options));
                    f++
                }
                return La && (document.adoptNode(a), customElements.upgrade(a)), a
            }
        }
        class Za {
            constructor(a, b, c, d) {
                this.strings = a, this.values = b, this.type = c, this.processor = d
            }
            getHTML() {
                const a = this.strings.length - 1;
                let b = "",
                    c = !1;
                for (let d = 0; d < a; d++) {
                    const a = this.strings[d],
                        e = a.lastIndexOf("<!--");
                    c = (-1 < e || c) && -1 === a.indexOf("-->", e + 1);
                    const f = Xa.exec(a);
                    b += null === f ? a + (c ? Pa : Qa) : a.substr(0, f.index) + f[1] + f[2] + Sa + f[3] + Pa
                }
                return b += this.strings[a], b
            }
            getTemplateElement() {
                const a = document.createElement("template");
                return a.innerHTML = this.getHTML(), a
            }
        }
        const $a = a => null === a || "object" != typeof a && "function" != typeof a,
            _a = a => Array.isArray(a) || !!(a && a[Symbol.iterator]);
        class ab {
            constructor(a, b, c) {
                this.dirty = !0, this.element = a, this.name = b, this.strings = c, this.parts = [];
                for (let d = 0; d < c.length - 1; d++) this.parts[d] = this._createPart()
            }
            _createPart() {
                return new bb(this)
            }
            _getValue() {
                const a = this.strings,
                    b = a.length - 1;
                let c = "";
                for (let d = 0; d < b; d++) {
                    c += a[d];
                    const b = this.parts[d];
                    if (void 0 !== b) {
                        const a = b.value;
                        if ($a(a) || !_a(a)) c += "string" == typeof a ? a : a + "";
                        else
                            for (const b of a) c += "string" == typeof b ? b : b + ""
                    }
                }
                return c += a[b], c
            }
            commit() {
                this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()))
            }
        }
        class bb {
            constructor(a) {
                this.value = void 0, this.committer = a
            }
            setValue(a) {
                a === Na || $a(a) && a === this.value || (this.value = a, !Ka(a) && (this.committer.dirty = !0))
            }
            commit() {
                for (; Ka(this.value);) {
                    const a = this.value;
                    this.value = Na, a(this)
                }
                this.value === Na || this.committer.commit()
            }
        }
        class cb {
            constructor(a) {
                this.value = void 0, this.__pendingValue = void 0, this.options = a
            }
            appendInto(a) {
                this.startNode = a.appendChild(Wa()), this.endNode = a.appendChild(Wa())
            }
            insertAfterNode(a) {
                this.startNode = a, this.endNode = a.nextSibling
            }
            appendIntoPart(a) {
                a.__insert(this.startNode = Wa()), a.__insert(this.endNode = Wa())
            }
            insertAfterPart(a) {
                a.__insert(this.startNode = Wa()), this.endNode = a.endNode, a.endNode = this.startNode
            }
            setValue(a) {
                this.__pendingValue = a
            }
            commit() {
                for (; Ka(this.__pendingValue);) {
                    const a = this.__pendingValue;
                    this.__pendingValue = Na, a(this)
                }
                const a = this.__pendingValue;
                a === Na || ($a(a) ? a !== this.value && this.__commitText(a) : a instanceof Za ? this.__commitTemplateResult(a) : a instanceof Node ? this.__commitNode(a) : _a(a) ? this.__commitIterable(a) : a === Oa ? (this.value = Oa, this.clear()) : this.__commitText(a))
            }
            __insert(a) {
                this.endNode.parentNode.insertBefore(a, this.endNode)
            }
            __commitNode(a) {
                this.value === a || (this.clear(), this.__insert(a), this.value = a)
            }
            __commitText(a) {
                const b = this.startNode.nextSibling;
                a = null == a ? "" : a, b === this.endNode.previousSibling && 3 === b.nodeType ? b.data = a : this.__commitNode(document.createTextNode("string" == typeof a ? a : a + "")), this.value = a
            }
            __commitTemplateResult(a) {
                const b = this.options.templateFactory(a);
                if (this.value instanceof Ya && this.value.template === b) this.value.update(a.values);
                else {
                    const c = new Ya(b, a.processor, this.options),
                        d = c._clone();
                    c.update(a.values), this.__commitNode(d), this.value = c
                }
            }
            __commitIterable(a) {
                Array.isArray(this.value) || (this.value = [], this.clear());
                const b = this.value;
                let c, d = 0;
                for (const e of a) c = b[d], void 0 === c && (c = new cb(this.options), b.push(c), 0 == d ? c.appendIntoPart(this) : c.insertAfterPart(b[d - 1])), c.setValue(e), c.commit(), d++;
                d < b.length && (b.length = d, this.clear(c && c.endNode))
            }
            clear() {
                let a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this.startNode;
                Ma(this.startNode.parentNode, a.nextSibling, this.endNode)
            }
        }
        class db {
            constructor(a, b, c) {
                if (this.value = void 0, this.__pendingValue = void 0, 2 !== c.length || "" !== c[0] || "" !== c[1]) throw new Error("Boolean attributes can only contain a single expression");
                this.element = a, this.name = b, this.strings = c
            }
            setValue(a) {
                this.__pendingValue = a
            }
            commit() {
                for (; Ka(this.__pendingValue);) {
                    const a = this.__pendingValue;
                    this.__pendingValue = Na, a(this)
                }
                if (this.__pendingValue !== Na) {
                    const a = !!this.__pendingValue;
                    this.value !== a && (a ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = a), this.__pendingValue = Na
                }
            }
        }
        class eb extends ab {
            constructor(a, b, c) {
                super(a, b, c), this.single = 2 === c.length && "" === c[0] && "" === c[1]
            }
            _createPart() {
                return new fb(this)
            }
            _getValue() {
                return this.single ? this.parts[0].value : super._getValue()
            }
            commit() {
                this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue())
            }
        }
        class fb extends bb {}
        let gb = !1;
        try {
            const a = {
                get capture() {
                    return gb = !0, !1
                }
            };
            window.addEventListener("test", a, a), window.removeEventListener("test", a, a)
        } catch (a) {}
        class hb {
            constructor(a, b, c) {
                this.value = void 0, this.__pendingValue = void 0, this.element = a, this.eventName = b, this.eventContext = c, this.__boundHandleEvent = a => this.handleEvent(a)
            }
            setValue(a) {
                this.__pendingValue = a
            }
            commit() {
                for (; Ka(this.__pendingValue);) {
                    const a = this.__pendingValue;
                    this.__pendingValue = Na, a(this)
                }
                if (this.__pendingValue === Na) return;
                const a = this.__pendingValue,
                    b = this.value,
                    c = null == a || null != b && (a.capture !== b.capture || a.once !== b.once || a.passive !== b.passive);
                c && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), null != a && (null == b || c) && (this.__options = ib(a), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = a, this.__pendingValue = Na
            }
            handleEvent(a) {
                "function" == typeof this.value ? this.value.call(this.eventContext || this.element, a) : this.value.handleEvent(a)
            }
        }
        const ib = a => a && (gb ? {
            capture: a.capture,
            passive: a.passive,
            once: a.once
        } : a.capture);
        const jb = new class {
                handleAttributeExpressions(a, b, c, d) {
                    const e = b[0];
                    if ("." === e) {
                        const d = new eb(a, b.slice(1), c);
                        return d.parts
                    }
                    if ("@" === e) return [new hb(a, b.slice(1), d.eventContext)];
                    if ("?" === e) return [new db(a, b.slice(1), c)];
                    const f = new ab(a, b, c);
                    return f.parts
                }
                handleTextExpression(a) {
                    return new cb(a)
                }
            },
            kb = new Map,
            lb = new WeakMap,
            mb = (a, b, c) => {
                let d = lb.get(b);
                d === void 0 && (Ma(b, b.firstChild), lb.set(b, d = new cb(Object.assign({
                    templateFactory: sa
                }, c))), d.appendInto(b)), d.setValue(a), d.commit()
            };
        (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.0.0");
        const nb = function(a) {
                for (var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                return new Za(a, c, "html", jb)
            },
            ob = 133,
            pb = a => {
                let b = 11 === a.nodeType ? 0 : 1;
                for (const c = document.createTreeWalker(a, ob, null, !1); c.nextNode();) b++;
                return b
            },
            qb = function(a) {
                let b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : -1;
                for (let c = b + 1; c < a.length; c++) {
                    const b = a[c];
                    if (Va(b)) return c
                }
                return -1
            },
            rb = (a, b) => "".concat(a, "--").concat(b);
        let sb = !0;
        "undefined" == typeof window.ShadyCSS ? sb = !1 : "undefined" == typeof window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), sb = !1);
        const tb = a => b => {
                const c = rb(b.type, a);
                let d = kb.get(c);
                void 0 === d && (d = {
                    stringsArray: new WeakMap,
                    keyString: new Map
                }, kb.set(c, d));
                let e = d.stringsArray.get(b.strings);
                if (void 0 !== e) return e;
                const f = b.strings.join(Pa);
                if (e = d.keyString.get(f), void 0 === e) {
                    const c = b.getTemplateElement();
                    sb && window.ShadyCSS.prepareTemplateDom(c, a), e = new Ta(b, c), d.keyString.set(f, e)
                }
                return d.stringsArray.set(b.strings, e), e
            },
            ub = ["html", "svg"],
            vb = a => {
                ub.forEach(b => {
                    const c = kb.get(rb(b, a));
                    c !== void 0 && c.keyString.forEach(a => {
                        const b = a.element.content,
                            c = new Set;
                        Array.from(b.querySelectorAll("style")).forEach(a => {
                            c.add(a)
                        }), ua(a, c)
                    })
                })
            },
            wb = new Set,
            xb = (a, b, c) => {
                wb.add(c);
                const d = a.querySelectorAll("style"),
                    e = d.length;
                if (0 === e) return void window.ShadyCSS.prepareTemplateStyles(b.element, c);
                const f = document.createElement("style");
                for (let g = 0; g < e; g++) {
                    const a = d[g];
                    a.parentNode.removeChild(a), f.textContent += a.textContent
                }
                vb(c);
                const g = b.element.content;
                va(b, f, g.firstChild), window.ShadyCSS.prepareTemplateStyles(b.element, c);
                const h = g.querySelector("style");
                if (window.ShadyCSS.nativeShadow && null !== h) a.insertBefore(h.cloneNode(!0), a.firstChild);
                else {
                    g.insertBefore(f, g.firstChild);
                    const a = new Set;
                    a.add(f), ua(b, a)
                }
            },
            yb = (a, b, c) => {
                const d = c.scopeName,
                    e = lb.has(b),
                    f = sb && 11 === b.nodeType && !!b.host && a instanceof Za,
                    g = f && !wb.has(d),
                    h = g ? document.createDocumentFragment() : b;
                if (mb(a, h, Object.assign({
                        templateFactory: tb(d)
                    }, c)), g) {
                    const a = lb.get(h);
                    lb.delete(h), a.value instanceof Ya && xb(h, a.value.template, d), Ma(b, b.firstChild), b.appendChild(h), lb.set(b, a)
                }!e && f && window.ShadyCSS.styleElement(b.host)
            };
        window.JSCompiler_renameProperty = a => a;
        const zb = {
                toAttribute(a, b) {
                    return b === Boolean ? a ? "" : null : b === Object || b === Array ? null == a ? a : JSON.stringify(a) : a
                },
                fromAttribute(a, b) {
                    return b === Boolean ? null !== a : b === Number ? null === a ? null : +a : b === Object || b === Array ? JSON.parse(a) : a
                }
            },
            Ab = (a, b) => b !== a && (b === b || a === a),
            Bb = {
                attribute: !0,
                type: String,
                converter: zb,
                reflect: !1,
                hasChanged: Ab
            },
            Cb = Promise.resolve(!0),
            Db = 1,
            Eb = 4,
            Fb = 8,
            Gb = 16,
            Hb = 32;
        class Ib extends HTMLElement {
            constructor() {
                super(), this._updateState = 0, this._instanceProperties = void 0, this._updatePromise = Cb, this._hasConnectedResolver = void 0, this._changedProperties = new Map, this._reflectingProperties = void 0, this.initialize()
            }
            static get observedAttributes() {
                this.finalize();
                const a = [];
                return this._classProperties.forEach((b, c) => {
                    const d = this._attributeNameForProperty(c, b);
                    void 0 !== d && (this._attributeToPropertyMap.set(d, c), a.push(d))
                }), a
            }
            static _ensureClassProperties() {
                if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
                    this._classProperties = new Map;
                    const a = Object.getPrototypeOf(this)._classProperties;
                    a !== void 0 && a.forEach((a, b) => this._classProperties.set(b, a))
                }
            }
            static createProperty(a) {
                let b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Bb;
                if (this._ensureClassProperties(), this._classProperties.set(a, b), b.noAccessor || this.prototype.hasOwnProperty(a)) return;
                const c = "symbol" == typeof a ? Symbol() : "__".concat(a);
                Object.defineProperty(this.prototype, a, {
                    get() {
                        return this[c]
                    },
                    set(b) {
                        const d = this[a];
                        this[c] = b, this._requestUpdate(a, d)
                    },
                    configurable: !0,
                    enumerable: !0
                })
            }
            static finalize() {
                if (!(this.hasOwnProperty(JSCompiler_renameProperty("finalized", this)) && this.finalized)) {
                    const a = Object.getPrototypeOf(this);
                    if ("function" == typeof a.finalize && a.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
                        const a = this.properties,
                            b = [...Object.getOwnPropertyNames(a), ...("function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(a) : [])];
                        for (const c of b) this.createProperty(c, a[c])
                    }
                }
            }
            static _attributeNameForProperty(a, b) {
                const c = b.attribute;
                return !1 === c ? void 0 : "string" == typeof c ? c : "string" == typeof a ? a.toLowerCase() : void 0
            }
            static _valueHasChanged(a, b) {
                let c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : Ab;
                return c(a, b)
            }
            static _propertyValueFromAttribute(a, b) {
                const c = b.type,
                    d = b.converter || zb,
                    e = "function" == typeof d ? d : d.fromAttribute;
                return e ? e(a, c) : a
            }
            static _propertyValueToAttribute(a, b) {
                if (void 0 === b.reflect) return;
                const c = b.type,
                    d = b.converter,
                    e = d && d.toAttribute || zb.toAttribute;
                return e(a, c)
            }
            initialize() {
                this._saveInstanceProperties(), this._requestUpdate()
            }
            _saveInstanceProperties() {
                this.constructor._classProperties.forEach((a, b) => {
                    if (this.hasOwnProperty(b)) {
                        const a = this[b];
                        delete this[b], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(b, a)
                    }
                })
            }
            _applyInstanceProperties() {
                this._instanceProperties.forEach((a, b) => this[b] = a), this._instanceProperties = void 0
            }
            connectedCallback() {
                this._updateState |= Hb, this._hasConnectedResolver && (this._hasConnectedResolver(), this._hasConnectedResolver = void 0)
            }
            disconnectedCallback() {}
            attributeChangedCallback(a, b, c) {
                b !== c && this._attributeToProperty(a, c)
            }
            _propertyToAttribute(a, b) {
                let c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : Bb;
                const d = this.constructor,
                    e = d._attributeNameForProperty(a, c);
                if (e !== void 0) {
                    const a = d._propertyValueToAttribute(b, c);
                    if (a === void 0) return;
                    this._updateState |= Fb, null == a ? this.removeAttribute(e) : this.setAttribute(e, a), this._updateState &= ~Fb
                }
            }
            _attributeToProperty(a, b) {
                if (this._updateState & Fb) return;
                const c = this.constructor,
                    d = c._attributeToPropertyMap.get(a);
                if (d !== void 0) {
                    const a = c._classProperties.get(d) || Bb;
                    this._updateState |= Gb, this[d] = c._propertyValueFromAttribute(b, a), this._updateState &= ~Gb
                }
            }
            _requestUpdate(a, b) {
                let c = !0;
                if (a !== void 0) {
                    const d = this.constructor,
                        e = d._classProperties.get(a) || Bb;
                    d._valueHasChanged(this[a], b, e.hasChanged) ? (!this._changedProperties.has(a) && this._changedProperties.set(a, b), !0 === e.reflect && !(this._updateState & Gb) && (this._reflectingProperties === void 0 && (this._reflectingProperties = new Map), this._reflectingProperties.set(a, e))) : c = !1
                }!this._hasRequestedUpdate && c && this._enqueueUpdate()
            }
            requestUpdate(a, b) {
                return this._requestUpdate(a, b), this.updateComplete
            }
            _enqueueUpdate() {
                var a = this;
                return Aa(function*() {
                    a._updateState |= Eb;
                    let b, c;
                    const d = a._updatePromise;
                    a._updatePromise = new Promise((a, d) => {
                        b = a, c = d
                    });
                    try {
                        yield d
                    } catch (a) {}
                    a._hasConnected || (yield new Promise(b => a._hasConnectedResolver = b));
                    try {
                        const b = a.performUpdate();
                        null != b && (yield b)
                    } catch (a) {
                        c(a)
                    }
                    b(!a._hasRequestedUpdate)
                })()
            }
            get _hasConnected() {
                return this._updateState & Hb
            }
            get _hasRequestedUpdate() {
                return this._updateState & Eb
            }
            get hasUpdated() {
                return this._updateState & Db
            }
            performUpdate() {
                this._instanceProperties && this._applyInstanceProperties();
                let a = !1;
                const b = this._changedProperties;
                try {
                    a = this.shouldUpdate(b), a && this.update(b)
                } catch (b) {
                    throw a = !1, b
                } finally {
                    this._markUpdated()
                }
                a && (!(this._updateState & Db) && (this._updateState |= Db, this.firstUpdated(b)), this.updated(b))
            }
            _markUpdated() {
                this._changedProperties = new Map, this._updateState &= ~Eb
            }
            get updateComplete() {
                return this._updatePromise
            }
            shouldUpdate(a) {
                return !0
            }
            update(a) {
                this._reflectingProperties !== void 0 && 0 < this._reflectingProperties.size && (this._reflectingProperties.forEach((a, b) => this._propertyToAttribute(b, this[b], a)), this._reflectingProperties = void 0)
            }
            updated(a) {}
            firstUpdated(a) {}
        }
        Ib.finalized = !0;
        const Jb = "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
            Kb = Symbol();
        class Lb {
            constructor(a, b) {
                if (b !== Kb) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = a
            }
            get styleSheet() {
                return void 0 === this._styleSheet && (Jb ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet
            }
            toString() {
                return this.cssText
            }
        }
        const Mb = a => {
                if (a instanceof Lb) return a.cssText;
                if ("number" == typeof a) return a;
                throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(a, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."))
            },
            Nb = function(a) {
                for (var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                const e = c.reduce((b, c, d) => b + Mb(c) + a[d + 1], a[0]);
                return new Lb(e, Kb)
            };
        (window.litElementVersions || (window.litElementVersions = [])).push("2.2.0");
        const Ob = a => a.flat ? a.flat(1 / 0) : wa(a);
        class Pb extends Ib {
            static finalize() {
                super.finalize(), this._styles = this.hasOwnProperty(JSCompiler_renameProperty("styles", this)) ? this._getUniqueStyles() : this._styles || []
            }
            static _getUniqueStyles() {
                const a = this.styles,
                    b = [];
                if (Array.isArray(a)) {
                    const c = Ob(a),
                        d = c.reduceRight((a, b) => (a.add(b), a), new Set);
                    d.forEach(a => b.unshift(a))
                } else a && b.push(a);
                return b
            }
            initialize() {
                super.initialize(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
            }
            createRenderRoot() {
                return this.attachShadow({
                    mode: "open"
                })
            }
            adoptStyles() {
                const a = this.constructor._styles;
                0 === a.length || (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow ? Jb ? this.renderRoot.adoptedStyleSheets = a.map(a => a.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(a.map(a => a.cssText), this.localName))
            }
            connectedCallback() {
                super.connectedCallback(), this.hasUpdated && window.ShadyCSS !== void 0 && window.ShadyCSS.styleElement(this)
            }
            update(a) {
                super.update(a);
                const b = this.render();
                b instanceof Za && this.constructor.render(b, this.renderRoot, {
                    scopeName: this.localName,
                    eventContext: this
                }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach(a => {
                    const b = document.createElement("style");
                    b.textContent = a.cssText, this.renderRoot.appendChild(b)
                }))
            }
            render() {}
        }
        Pb.finalized = !0, Pb.render = yb;
        const Qb = new WeakMap,
            Rb = (a => function() {
                const b = a(...arguments);
                return Ja.set(b, !0), b
            })(a => b => {
                if (!(b instanceof bb) || b instanceof fb || "class" !== b.committer.name || 1 < b.committer.parts.length) throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
                const c = b.committer,
                    d = c.element;
                Qb.has(b) || (d.className = c.strings.join(" "));
                const e = d.classList,
                    f = Qb.get(b);
                for (const c in f) c in a || e.remove(c);
                for (const c in a) {
                    const b = a[c];
                    if (!f || b !== f[c]) {
                        const a = b ? "add" : "remove";
                        e[a](c)
                    }
                }
                Qb.set(b, a)
            });
        var Sb = function() {
                function a(a, b) {
                    var c = -1;
                    return a.some(function(a, d) {
                        return a[0] === b && (c = d, !0)
                    }), c
                }
                return "undefined" == typeof Map ? function() {
                    function b() {
                        this.__entries__ = []
                    }
                    return Object.defineProperty(b.prototype, "size", {
                        get: function() {
                            return this.__entries__.length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), b.prototype.get = function(b) {
                        var c = a(this.__entries__, b),
                            d = this.__entries__[c];
                        return d && d[1]
                    }, b.prototype.set = function(b, c) {
                        var d = a(this.__entries__, b);
                        ~d ? this.__entries__[d][1] = c : this.__entries__.push([b, c])
                    }, b.prototype.delete = function(b) {
                        var c = this.__entries__,
                            d = a(c, b);
                        ~d && c.splice(d, 1)
                    }, b.prototype.has = function(b) {
                        return !!~a(this.__entries__, b)
                    }, b.prototype.clear = function() {
                        this.__entries__.splice(0)
                    }, b.prototype.forEach = function(a, b) {
                        void 0 === b && (b = null);
                        for (var c, d = 0, e = this.__entries__; d < e.length; d++) c = e[d], a.call(b, c[1], c[0])
                    }, b
                }() : Map
            }(),
            Tb = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
            Ub = function() {
                return "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")()
            }(),
            Vb = function() {
                return "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Ub) : function(a) {
                    return setTimeout(function() {
                        return a(Date.now())
                    }, 1e3 / 60)
                }
            }(),
            Wb = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
            Xb = "undefined" != typeof MutationObserver,
            Yb = function() {
                function a() {
                    this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = ya(this.refresh.bind(this), 20)
                }
                return a.prototype.addObserver = function(a) {
                    ~this.observers_.indexOf(a) || this.observers_.push(a), this.connected_ || this.connect_()
                }, a.prototype.removeObserver = function(a) {
                    var b = this.observers_,
                        c = b.indexOf(a);
                    ~c && b.splice(c, 1), !b.length && this.connected_ && this.disconnect_()
                }, a.prototype.refresh = function() {
                    var a = this.updateObservers_();
                    a && this.refresh()
                }, a.prototype.updateObservers_ = function() {
                    var a = this.observers_.filter(function(a) {
                        return a.gatherActive(), a.hasActive()
                    });
                    return a.forEach(function(a) {
                        return a.broadcastActive()
                    }), 0 < a.length
                }, a.prototype.connect_ = function() {
                    !Tb || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Xb ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                }, a.prototype.disconnect_ = function() {
                    Tb && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                }, a.prototype.onTransitionEnd_ = function(a) {
                    var b = a.propertyName,
                        c = void 0 === b ? "" : b,
                        d = Wb.some(function(a) {
                            return !!~c.indexOf(a)
                        });
                    d && this.refresh()
                }, a.getInstance = function() {
                    return this.instance_ || (this.instance_ = new a), this.instance_
                }, a.instance_ = null, a
            }(),
            Zb = function(a, b) {
                for (var c, d = 0, e = Object.keys(b); d < e.length; d++) c = e[d], Object.defineProperty(a, c, {
                    value: b[c],
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                });
                return a
            },
            $b = function(a) {
                var b = a && a.ownerDocument && a.ownerDocument.defaultView;
                return b || Ub
            },
            _b = Ia(0, 0, 0, 0),
            ac = function() {
                return "undefined" == typeof SVGGraphicsElement ? function(a) {
                    return a instanceof $b(a).SVGElement && "function" == typeof a.getBBox
                } : function(a) {
                    return a instanceof $b(a).SVGGraphicsElement
                }
            }(),
            bc = function() {
                function a(a) {
                    this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ia(0, 0, 0, 0), this.target = a
                }
                return a.prototype.isActive = function() {
                    var a = Ga(this.target);
                    return this.contentRect_ = a, a.width !== this.broadcastWidth || a.height !== this.broadcastHeight
                }, a.prototype.broadcastRect = function() {
                    var a = this.contentRect_;
                    return this.broadcastWidth = a.width, this.broadcastHeight = a.height, a
                }, a
            }(),
            cc = function() {
                return function(a, b) {
                    var c = Ha(b);
                    Zb(this, {
                        target: a,
                        contentRect: c
                    })
                }
            }(),
            dc = function() {
                function a(a, b, c) {
                    if (this.activeObservations_ = [], this.observations_ = new Sb, "function" != typeof a) throw new TypeError("The callback provided as parameter 1 is not a function.");
                    this.callback_ = a, this.controller_ = b, this.callbackCtx_ = c
                }
                return a.prototype.observe = function(a) {
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    if ("undefined" != typeof Element && Element instanceof Object) {
                        if (!(a instanceof $b(a).Element)) throw new TypeError("parameter 1 is not of type \"Element\".");
                        var b = this.observations_;
                        b.has(a) || (b.set(a, new bc(a)), this.controller_.addObserver(this), this.controller_.refresh())
                    }
                }, a.prototype.unobserve = function(a) {
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    if ("undefined" != typeof Element && Element instanceof Object) {
                        if (!(a instanceof $b(a).Element)) throw new TypeError("parameter 1 is not of type \"Element\".");
                        var b = this.observations_;
                        b.has(a) && (b.delete(a), !b.size && this.controller_.removeObserver(this))
                    }
                }, a.prototype.disconnect = function() {
                    this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                }, a.prototype.gatherActive = function() {
                    var a = this;
                    this.clearActive(), this.observations_.forEach(function(b) {
                        b.isActive() && a.activeObservations_.push(b)
                    })
                }, a.prototype.broadcastActive = function() {
                    if (this.hasActive()) {
                        var a = this.callbackCtx_,
                            b = this.activeObservations_.map(function(a) {
                                return new cc(a.target, a.broadcastRect())
                            });
                        this.callback_.call(a, b, a), this.clearActive()
                    }
                }, a.prototype.clearActive = function() {
                    this.activeObservations_.splice(0)
                }, a.prototype.hasActive = function() {
                    return 0 < this.activeObservations_.length
                }, a
            }(),
            ec = "undefined" == typeof WeakMap ? new Sb : new WeakMap,
            fc = function() {
                function a(b) {
                    if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var c = Yb.getInstance(),
                        d = new dc(b, c, this);
                    ec.set(this, d)
                }
                return a
            }();
        ["observe", "unobserve", "disconnect"].forEach(function(a) {
            fc.prototype[a] = function() {
                var b;
                return (b = ec.get(this))[a].apply(b, arguments)
            }
        });
        var gc = function() {
            return "undefined" == typeof Ub.ResizeObserver ? fc : Ub.ResizeObserver
        }();
        const hc = {
                shuffle: !0,
                power_state: !0,
                artwork_border: !0,
                icon_state: !0,
                sound_mode: !0,
                runtime: !0
            },
            ic = {
                DEFAULT: "mdi:cast",
                DROPDOWN: "mdi:chevron-down",
                GROUP: "mdi:speaker-multiple",
                MENU: "mdi:menu-down",
                MUTE: {
                    true: "mdi:volume-off",
                    false: "mdi:volume-high"
                },
                NEXT: "mdi:skip-next",
                PLAY: {
                    true: "mdi:pause",
                    false: "mdi:play"
                },
                POWER: "mdi:power",
                PREV: "mdi:skip-previous",
                SEND: "mdi:send",
                SHUFFLE: "mdi:shuffle",
                STOP: "mdi:stop",
                VOL_DOWN: "mdi:volume-minus",
                VOL_UP: "mdi:volume-plus"
            },
            jc = ["entity", "_overflow", "break", "thumbnail", "edit", "idle"],
            kc = ["media_duration", "media_position", "media_position_updated_at"],
            lc = [{
                attr: "media_title"
            }, {
                attr: "media_artist"
            }, {
                attr: "media_series_title"
            }, {
                attr: "media_season",
                prefix: "S"
            }, {
                attr: "media_episode",
                prefix: "E"
            }, {
                attr: "app_name"
            }];
        class mc {
            constructor(a, b, c) {
                this.hass = a || {}, this.config = b || {}, this.entity = c || {}, this.state = c.state, this.attr = c.attributes, this.idle = !!b.idle_view && this.idleView, this.active = this.isActive
            }
            get id() {
                return this.entity.entity_id
            }
            get icon() {
                return this.attr.icon
            }
            get isPaused() {
                return "paused" === this.state
            }
            get isPlaying() {
                return "playing" === this.state
            }
            get isIdle() {
                return "idle" === this.state
            }
            get isStandby() {
                return "standby" === this.state
            }
            get isUnavailable() {
                return "unavailable" === this.state
            }
            get isOff() {
                return "off" === this.state
            }
            get isActive() {
                return !this.isOff && !this.isUnavailable && !this.idle || !1
            }
            get shuffle() {
                return this.attr.shuffle || !1
            }
            get content() {
                return this.attr.media_content_type || "none"
            }
            get mediaDuration() {
                return this.attr.media_duration || 0
            }
            get updatedAt() {
                return this.attr.media_position_updated_at || 0
            }
            get position() {
                return this.attr.media_position || 0
            }
            get name() {
                return this.attr.friendly_name || ""
            }
            get groupCount() {
                return this.group.length
            }
            get isGrouped() {
                return 1 < this.group.length
            }
            get group() {
                const a = "".concat(this.config.speaker_group.platform, "_group");
                return this.attr[a] || []
            }
            get master() {
                return this.group[0] || this.config.entity
            }
            get isMaster() {
                return this.master === this.config.entity
            }
            get sources() {
                return this.attr.source_list || []
            }
            get source() {
                return this.attr.source || ""
            }
            get soundModes() {
                return this.attr.sound_mode_list || []
            }
            get soundMode() {
                return this.attr.sound_mode || ""
            }
            get muted() {
                return this.attr.is_volume_muted || !1
            }
            get vol() {
                return this.attr.volume_level || 0
            }
            get picture() {
                return this.attr.entity_picture
            }
            get hasArtwork() {
                return this.picture && "none" !== this.config.artwork && this.active && !this.idle
            }
            get mediaInfo() {
                return lc.map(a => xa({
                    text: this.attr[a.attr],
                    prefix: ""
                }, a)).filter(a => a.text)
            }
            get hasProgress() {
                return !this.config.hide.progress && !this.idle && kc.every(a => a in this.attr)
            }
            get progress() {
                return this.position + (Date.now() - new Date(this.updatedAt).getTime()) / 1e3
            }
            get idleView() {
                const a = this.config.idle_view;
                return !!(a.when_idle && this.isIdle || a.when_standby && this.isStandby || a.when_paused && this.isPaused) || !!(this.updatedAt && a.after && !this.isPlaying) && this.checkIdleAfter(a.after)
            }
            get trackIdle() {
                return this.active && !this.isPlaying && this.updatedAt && this.config.idle_view && this.config.idle_view.after
            }
            checkIdleAfter(a) {
                const b = (Date.now() - new Date(this.updatedAt).getTime()) / 1e3;
                return this.idle = b > 60 * a, this.active = this.isActive, this.idle
            }
            get supportsShuffle() {
                return "undefined" != typeof this.attr.shuffle
            }
            get supportsMute() {
                return "undefined" != typeof this.attr.is_volume_muted
            }
            getAttribute(a) {
                return this.attr[a] || ""
            }
            fetchThumbnail() {
                var a = this;
                return Aa(function*() {
                    try {
                        const b = yield a.hass.callWS({
                            type: "media_player_thumbnail",
                            entity_id: a.config.entity
                        }), c = b.content_type, d = b.content;
                        return "url(data:".concat(c, ";base64,").concat(d, ")")
                    } catch (a) {
                        return console.error("mini-media-player: Failed fetching thumbnail"), !1
                    }
                })()
            }
            toggle(a) {
                return this.config.toggle_power ? this.callService(a, "toggle") : this.isOff ? this.callService(a, "turn_on") : void this.callService(a, "turn_off")
            }
            toggleMute(a) {
                this.callService(a, "volume_mute", {
                    is_volume_muted: !this.muted
                })
            }
            toggleShuffle(a) {
                this.callService(a, "shuffle_set", {
                    shuffle: !this.shuffle
                })
            }
            setSource(a, b) {
                this.callService(a, "select_source", {
                    source: b
                })
            }
            setMedia(a, b) {
                this.callService(a, "play_media", xa({}, b))
            }
            playPause(a) {
                this.callService(a, "media_play_pause")
            }
            setSoundMode(a, b) {
                this.callService(a, "select_sound_mode", {
                    sound_mode: b
                })
            }
            next(a) {
                this.callService(a, "media_next_track")
            }
            prev(a) {
                this.callService(a, "media_previous_track")
            }
            stop(a) {
                this.callService(a, "media_stop")
            }
            volumeUp(a) {
                this.callService(a, "volume_up")
            }
            volumeDown(a) {
                this.callService(a, "volume_down")
            }
            seek(a, b) {
                this.callService(a, "media_seek", {
                    seek_position: b
                })
            }
            setVolume(a, b) {
                this.config.speaker_group.sync_volume ? this.group.forEach(c => {
                    const d = this.config.speaker_group.entities.find(a => a.entity_id === c) || {};
                    let e = b;
                    d.volume_offset && (e += d.volume_offset / 100, 1 < e && (e = 1), 0 > e && (e = 0)), this.callService(a, "volume_set", {
                        entity_id: c,
                        volume_level: e
                    })
                }) : this.callService(a, "volume_set", {
                    entity_id: this.config.entity,
                    volume_level: b
                })
            }
            handleGroupChange(a, b, c) {
                const d = this.config.speaker_group.platform,
                    e = {
                        entity_id: b
                    };
                if (c) {
                    if (e.master = this.config.entity, "bluesound" === d) return this.callService(a, "".concat(d, "_JOIN"), e);
                    this.callService(a, "join", e, d)
                } else {
                    if ("bluesound" === d) return this.callService(a, "".concat(d, "_UNJOIN"), e);
                    this.callService(a, "unjoin", e, d)
                }
            }
            toggleScript(a, b) {
                let c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {};
                this.callService(a, b.split(".").pop(), xa({}, c), "script")
            }
            toggleService(a, b) {
                let c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {};
                a.stopPropagation();
                const d = b.split("."),
                    e = ta(d, 2),
                    f = e[0],
                    g = e[1];
                this.hass.callService(f, g, xa({}, c))
            }
            callService(a, b, c) {
                let d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "media_player";
                a.stopPropagation(), this.hass.callService(d, b, xa({
                    entity_id: this.config.entity
                }, c))
            }
        }
        const nc = Nb(ra());
        class oc extends Pb {
            static get properties() {
                return {
                    item: {},
                    checked: Boolean,
                    disabled: Boolean,
                    master: Boolean
                }
            }
            render() {
                return nb(qa(), this.checked, this.disabled, a => a.stopPropagation(), this.handleClick, this.item.name, this.master ? nb(pa()) : "")
            }
            handleClick(a) {
                a.stopPropagation(), this.dispatchEvent(new CustomEvent("change", {
                    detail: {
                        entity: this.item.entity_id,
                        checked: !this.checked
                    }
                }))
            }
            static get styles() {
                return Nb(oa())
            }
        }
        customElements.define("mmp-group-item", oc);
        class pc extends Pb {
            render() {
                return nb(na())
            }
            static get styles() {
                return Nb(ma())
            }
        }
        customElements.define("mmp-button", pc);
        class qc extends Pb {
            static get properties() {
                return {
                    entities: {},
                    player: {},
                    visible: Boolean
                }
            }
            get group() {
                return this.player.group
            }
            get master() {
                return this.player.master
            }
            get isMaster() {
                return this.player.isMaster
            }
            handleGroupChange(a) {
                const b = a.detail,
                    c = b.entity,
                    d = b.checked;
                this.player.handleGroupChange(a, c, d)
            }
            render() {
                let a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this,
                    b = a.group,
                    c = a.master,
                    d = a.isMaster;
                return this.visible ? nb(la(), this.visible, this.entities.map(a => nb(ka(), this.handleGroupChange, a, a.entity_id === this.player.id || b.includes(a.entity_id), a.entity_id === this.player.id || c !== this.player.id, a.entity_id === c)), 2 > b.length, a => this.player.handleGroupChange(a, d ? b : this.player.entity_id, !1), d ? nb(ja()) : nb(ia()), !d, a => this.player.handleGroupChange(a, this.entities.map(a => a.entity_id), !0)) : nb(ha())
            }
            static get styles() {
                return Nb(ga())
            }
        }
        customElements.define("mmp-group-list", qc);
        const rc = Nb(fa());
        class sc extends Pb {
            static get properties() {
                return {
                    items: [],
                    label: String,
                    selected: String
                }
            }
            get selectedId() {
                return this.items.map(a => a.id).indexOf(this.selected)
            }
            onChange(a) {
                this.dispatchEvent(new CustomEvent("change", {
                    detail: a
                }))
            }
            render() {
                return nb(ea(), "right", "top", 44, a => a.stopPropagation(), this.icon ? nb(da(), ic.DROPDOWN) : nb(ca(), this.selected || this.label, ic.DROPDOWN), this.selectedId, this.items.map(a => nb(ba(), a.id || a.name, () => this.onChange(a), a.icon ? nb(aa(), a.icon) : "", a.name ? nb(_(), a.name) : "")))
            }
            static get styles() {
                return [rc, Nb($())]
            }
        }
        customElements.define("mmp-dropdown", sc);
        class tc extends Pb {
            static get properties() {
                return {
                    player: {},
                    shortcuts: {}
                }
            }
            get buttons() {
                return this.shortcuts.buttons
            }
            get list() {
                return this.shortcuts.list
            }
            get show() {
                return !this.shortcuts.hide_when_off || this.player.active
            }
            get active() {
                return this.player.getAttribute(this.shortcuts.attribute)
            }
            get height() {
                return this.shortcuts.column_height || 36
            }
            render() {
                if (!this.show) return nb(Z());
                const a = this.active,
                    b = this.list ? nb(Y(), this.handleShortcut, this.list, this.shortcuts.label, a) : "",
                    c = this.buttons ? nb(X(), this.buttons.map(b => nb(W(), "min-height: ".concat(this.height, "px;"), this.shortcuts.columns, b.id === a, a => this.handleShortcut(a, b), this.shortcuts.align_text, b.icon ? nb(V(), b.icon) : "", b.name ? nb(U(), b.name) : ""))) : "";
                return nb(T(), c, b)
            }
            handleShortcut(a, b) {
                const c = b || a.detail,
                    d = c.type,
                    e = c.id,
                    f = c.data;
                if ("source" === d) return this.player.setSource(a, e);
                if ("service" === d) return this.player.toggleService(a, e, f);
                if ("script" === d) return this.player.toggleScript(a, e, f);
                if ("sound_mode" === d) return this.player.setSoundMode(a, e);
                this.player.setMedia(a, {
                    media_content_type: d,
                    media_content_id: e
                })
            }
            static get styles() {
                return [rc, Nb(S())]
            }
        }
        customElements.define("mmp-shortcuts", tc);
        const uc = function(a, b) {
            let c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : "unknown";
            const d = a.selectedLanguage || a.language,
                e = a.resources[d];
            return e && e[b] ? e[b] : c
        };
        class vc extends Pb {
            static get properties() {
                return {
                    hass: {},
                    config: {}
                }
            }
            get label() {
                return uc(this.hass, "ui.card.media_player.text_to_speak", "Say")
            }
            get input() {
                return this.shadowRoot.getElementById("tts-input")
            }
            get message() {
                return this.input.value
            }
            render() {
                return nb(R(), this.label, a => a.stopPropagation(), this.handleTts)
            }
            handleTts(a) {
                const b = this.config,
                    c = this.message,
                    d = {
                        message: c,
                        entity_id: b.entity_id || this.entity
                    };
                b.language && (d.language = b.language), "alexa" === b.platform ? this.hass.callService("notify", "alexa_media", {
                    message: c,
                    data: {
                        type: b.type || "tts"
                    },
                    target: d.entity_id
                }) : "sonos" === b.platform ? this.hass.callService("script", "sonos_say", {
                    sonos_entity: d.entity_id,
                    volume: b.volume || .5,
                    message: c
                }) : "webos" === b.platform ? this.hass.callService("notify", d.entity_id.split(".").slice(-1)[0], {
                    message: c
                }) : "ga" === b.platform ? this.hass.callService("notify", "ga_broadcast", {
                    message: c
                }) : this.hass.callService("tts", "".concat(b.platform, "_say"), d), a.stopPropagation(), this.reset()
            }
            reset() {
                this.input.value = ""
            }
            static get styles() {
                return Nb(Q())
            }
        }
        customElements.define("mmp-tts", vc);
        var wc = a => {
            let b = parseInt(a % 60, 10),
                c = parseInt(a / 60 % 60, 10),
                d = parseInt(a / 3600 % 24, 10);
            return d = 10 > d ? "0".concat(d) : d, c = 10 > c ? "0".concat(c) : c, b = 10 > b ? "0".concat(b) : b, "".concat("00" === d ? "" : "".concat(d, ":")).concat(c, ":").concat(b)
        };
        class xc extends Pb {
            static get properties() {
                return {
                    _player: {},
                    showTime: Boolean,
                    progress: Number,
                    duration: Number,
                    tracker: {},
                    track: Boolean
                }
            }
            set player(a) {
                this._player = a, this.hasProgress && this.trackProgress()
            }
            get duration() {
                return this.player.mediaDuration
            }
            get player() {
                return this._player
            }
            get hasProgress() {
                return this.player.hasProgress
            }
            render() {
                return this.player.active && this.hasProgress ? nb(P(), this.handleSeek, !this.player.isPlaying, this.showTime ? nb(O(), wc(this.progress), wc(this.duration)) : "", this.progress, this.duration) : nb(N())
            }
            trackProgress() {
                this.progress = this.player.progress, this.tracker || (this.tracker = setInterval(() => this.trackProgress(), 1e3)), this.player.isPlaying || (clearInterval(this.tracker), this.tracker = null)
            }
            handleSeek(a) {
                const b = this.duration,
                    c = a.offsetX / a.target.offsetWidth * b;
                this.player.seek(a, c)
            }
            disconnectedCallback() {
                clearInterval(this.tracker)
            }
            static get styles() {
                return Nb(M())
            }
        }
        customElements.define("mmp-progress", xc);
        class yc extends Pb {
            static get properties() {
                return {
                    player: {},
                    selected: String,
                    icon: Boolean
                }
            }
            get source() {
                return this.player.source
            }
            get sources() {
                return this.player.sources.map(a => ({
                    name: a,
                    id: a,
                    type: "source"
                }))
            }
            render() {
                return nb(L(), this.handleSource, this.sources, this.source, this.selected || this.source, this.icon)
            }
            handleSource(a) {
                const b = a.detail.id;
                this.player.setSource(a, b), this.selected = b
            }
            static get styles() {
                return Nb(K())
            }
        }
        customElements.define("mmp-source-menu", yc);
        class zc extends Pb {
            static get properties() {
                return {
                    player: {},
                    selected: String,
                    icon: Boolean
                }
            }
            get mode() {
                return this.player.soundMode
            }
            get modes() {
                return this.player.soundModes.map(a => ({
                    name: a,
                    id: a,
                    type: "soundMode"
                }))
            }
            render() {
                return nb(J(), this.handleChange, this.modes, this.mode, this.selected || this.mode, this.icon)
            }
            handleChange(a) {
                const b = a.detail.id;
                this.player.setSoundMode(a, b), this.selected = b
            }
            static get styles() {
                return Nb(I())
            }
        }
        customElements.define("mmp-sound-menu", zc);
        class Ac extends Pb {
            static get properties() {
                return {
                    player: {},
                    config: {},
                    break: Boolean
                }
            }
            get showShuffle() {
                return !this.config.hide.shuffle && this.player.supportsShuffle
            }
            get maxVol() {
                return this.config.max_volume || 100
            }
            get minVol() {
                return this.config.min_volume || 0
            }
            render() {
                const a = this.config.hide;
                return nb(H(), a.volume ? nb(G()) : this.renderVolControls(this.player.muted), this.showShuffle ? nb(F(), a => this.player.toggleShuffle(a), ic.SHUFFLE, this.player.shuffle) : nb(E()), a.controls ? nb(C()) : nb(D(), this.config.flow || this.break, a => this.player.prev(a), ic.PREV, a => this.player.playPause(a), ic.PLAY[this.player.isPlaying], a => this.player.next(a), ic.NEXT))
            }
            renderVolControls(a) {
                return this.config.volume_stateless ? this.renderVolButtons(a) : this.renderVolSlider(a)
            }
            renderVolSlider(a) {
                return nb(B(), this.renderMuteButton(a), this.handleVolumeChange, a => a.stopPropagation(), a, this.minVol, this.maxVol, 100 * this.player.vol, "ltr")
            }
            renderVolButtons(a) {
                return nb(A(), this.renderMuteButton(a), a => this.player.volumeDown(a), ic.VOL_DOWN, a => this.player.volumeUp(a), ic.VOL_UP)
            }
            renderMuteButton(a) {
                if (!this.config.hide.mute) switch (this.config.replace_mute) {
                    case "play":
                        return nb(z(), a => this.player.playPause(a), ic.PLAY[this.player.isPlaying]);
                    case "stop":
                        return nb(y(), a => this.player.stop(a), ic.STOP);
                    case "next":
                        return nb(x(), a => this.player.next(a), ic.NEXT);
                    default:
                        return this.player.supportsMute ? nb(w(), a => this.player.toggleMute(a), ic.MUTE[a]) : void 0;
                }
            }
            handleVolumeChange(a) {
                const b = parseFloat(a.target.value) / 100;
                this.player.setVolume(a, b)
            }
            static get styles() {
                return [rc, Nb(v())]
            }
        }
        customElements.define("mmp-media-controls", Ac);
        class Bc extends Pb {
            static get properties() {
                return {
                    hass: {},
                    player: {},
                    config: {},
                    groupVisible: Boolean,
                    idle: Boolean
                }
            }
            get icon() {
                return this.config.speaker_group.icon || ic.GROUP
            }
            get showGroupButton() {
                return this.config.speaker_group.entities
            }
            get showPowerButton() {
                return !this.config.hide.power
            }
            get powerColor() {
                return this.player.active && !this.config.hide.power_state
            }
            get sourceSize() {
                return "icon" === this.config.source || this.hasControls || this.idle
            }
            get soundSize() {
                return "icon" === this.config.sound_mode || this.hasControls || this.idle
            }
            get hasControls() {
                return this.player.active && this.config.hide.controls !== this.config.hide.volume
            }
            get hasSource() {
                return 0 < this.player.sources.length && !this.config.hide.source
            }
            get hasSoundMode() {
                return 0 < this.player.soundModes.length && !this.config.hide.sound_mode
            }
            render() {
                return this.player.isUnavailable ? nb(u(), uc(this.hass, "state.default.unavailable", "Unavailable")) : nb(t(), this.idle ? this.renderIdleView : "", this.hasControls ? nb(s(), this.player, this.config) : "", this.hasSource ? nb(r(), this.player, this.sourceSize, "full" === this.config.source) : "", this.hasSoundMode ? nb(q(), this.player, this.soundSize, "full" === this.config.sound_mode) : "", this.showGroupButton ? nb(p(), this.icon, !this.player.isGrouped, this.groupVisible, this.handleGroupClick) : "", this.showPowerButton ? nb(o(), ic.POWER, a => this.player.toggle(a), this.powerColor) : "")
            }
            handleGroupClick(a) {
                a.stopPropagation(), this.dispatchEvent(new CustomEvent("toggleGroupList"))
            }
            get renderIdleView() {
                return this.player.isPaused ? nb(n(), ic.PLAY[this.player.isPlaying], a => this.player.playPause(a)) : nb(m(), uc(this.hass, "state.media_player.idle", "Idle"))
            }
            static get styles() {
                return [rc, Nb(l())]
            }
        }
        customElements.define("mmp-powerstrip", Bc), customElements.get("ha-slider") || customElements.define("ha-slider", class extends customElements.get("paper-slider") {});
        class Cc extends Pb {
            constructor() {
                super(), this._overflow = !1, this.initial = !0, this.picture = !1, this.thumbnail = !1, this.edit = !1, this.rtl = !1
            }
            static get properties() {
                return {
                    _hass: {},
                    config: {},
                    entity: {},
                    player: {},
                    _overflow: Boolean,
                    break: Boolean,
                    initial: Boolean,
                    picture: String,
                    thumbnail: String,
                    edit: Boolean,
                    rtl: Boolean,
                    idle: Boolean
                }
            }
            static get styles() {
                return nc
            }
            set hass(a) {
                if (a) {
                    const b = a.states[this.config.entity];
                    this._hass = a, b && this.entity !== b && (this.entity = b, this.player = new mc(a, this.config, b), this.rtl = this.computeRTL(a), this.idle = this.player.idle, this.player.trackIdle && this.updateIdleStatus())
                }
            }
            get hass() {
                return this._hass
            }
            set overflow(a) {
                this._overflow !== a && (this._overflow = a)
            }
            get overflow() {
                return this._overflow
            }
            get name() {
                return this.config.name || this.player.name
            }
            setConfig(a) {
                if (!a.entity || "media_player" !== a.entity.split(".")[0]) throw new Error("Specify an entity from within the media_player domain.");
                const b = xa({
                    artwork: "default",
                    info: "default",
                    more_info: !0,
                    source: "default",
                    sound_mode: "default",
                    toggle_power: !0
                }, a, {
                    hide: xa({}, hc, a.hide),
                    speaker_group: xa({
                        show_group_count: !0,
                        platform: "sonos"
                    }, a.sonos, a.speaker_group),
                    shortcuts: xa({
                        label: "Shortcuts..."
                    }, a.shortcuts)
                });
                b.max_volume = +b.max_volume || 100, b.min_volume = +b.min_volume || 0, b.collapse = b.hide.controls || b.hide.volume, b.info = b.collapse && "scroll" !== b.info ? "short" : b.info, b.flow = b.hide.icon && b.hide.name && b.hide.info, this.config = b
            }
            shouldUpdate(a) {
                return void 0 === this.break && this.computeRect(this), jc.some(b => a.has(b)) && this.player
            }
            firstUpdated() {
                const a = new gc(a => {
                    a.forEach(a => {
                        window.requestAnimationFrame(() => {
                            "scroll" === this.config.info && this.computeOverflow(), this._resizeTimer || (this.computeRect(a), this._resizeTimer = setTimeout(() => {
                                this._resizeTimer = null, this.computeRect(this._resizeEntry)
                            }, 250)), this._resizeEntry = a
                        })
                    })
                });
                a.observe(this), setTimeout(() => this.initial = !1, 250), this.edit = this.config.speaker_group.expanded || !1
            }
            updated() {
                "scroll" === this.config.info && setTimeout(() => {
                    this.computeOverflow()
                }, 10)
            }
            render() {
                let a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this,
                    b = a.config;
                const c = this.computeArtwork();
                return nb(k(), this.handleMoreInfo, this.computeClasses(), b.artwork, this.player.content, this.renderArtwork(c), this.player.idle, this.renderIcon(c), this.renderEntityName(), this.renderMediaInfo(), this.toggleGroupList, this.hass, this.player, b, this.edit, this.idle, b.flow, !b.collapse && this.player.active ? nb(j(), this.player, b, this.break) : "", this.player, b.shortcuts, b.tts ? nb(i(), b.tts, this.hass, this.player.id) : "", this.edit, b.speaker_group.entities, this.player, this.player, !this.config.hide.runtime)
            }
            renderArtwork(a) {
                if (this.thumbnail || this.config.background) {
                    const b = this.config.background && (!a || "default" === this.config.artwork) ? "url(".concat(this.config.background, ")") : this.thumbnail;
                    return nb(h(), b)
                }
            }
            renderIcon(a) {
                return this.config.hide.icon ? void 0 : this.player.active && a && "default" === this.config.artwork ? nb(g(), this.thumbnail, !this.config.hide.artwork_border, this.player.state) : nb(f(), this.computeIcon())
            }
            renderEntityName() {
                return this.config.hide.name ? void 0 : nb(e(), this.name, this.speakerCount())
            }
            renderMediaInfo() {
                if (!this.config.hide.info) {
                    const e = this.player.mediaInfo;
                    return nb(d(), "short" === this.config.info || !this.player.active, "scroll" === this.config.info, this.overflow, this.overflow, "scroll" === this.config.info ? nb(c(), e.map(a => nb(b(), "attr__".concat(a.attr), a.prefix + a.text))) : "", e.map(b => nb(a(), "attr__".concat(b.attr), b.prefix + b.text)))
                }
            }
            speakerCount() {
                if (this.config.speaker_group.show_group_count) {
                    const a = this.player.groupCount;
                    return 1 < a ? " +".concat(a - 1) : ""
                }
            }
            computeClasses() {
                let a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : this,
                    b = a.config;
                return Rb({
                    "--responsive": this.break || b.hide.icon,
                    "--initial": this.initial,
                    "--bg": b.background,
                    "--group": b.group,
                    "--more-info": b.more_info,
                    "--has-artwork": this.player.hasArtwork && this.thumbnail,
                    "--flow": b.flow,
                    "--collapse": b.collapse,
                    "--rtl": this.rtl,
                    "--runtime": !b.hide.runtime && this.player.hasProgress
                })
            }
            computeArtwork() {
                const a = this.player,
                    b = a.picture,
                    c = a.hasArtwork;
                return c && b !== this.picture && (this.player.fetchThumbnail().then(a => {
                    this.thumbnail = a
                }), this.picture = b), !!(c && this.thumbnail)
            }
            computeIcon() {
                return this.config.icon ? this.config.icon : this.player.icon || ic.DEFAULT
            }
            computeOverflow() {
                const a = this.shadowRoot.querySelector(".marquee");
                if (a) {
                    const b = a.clientWidth > a.parentNode.clientWidth;
                    this.overflow = !!(b && this.player.active) && 7.5 + a.clientWidth / 50
                }
            }
            computeRect(a) {
                const b = a.contentRect || a.getBoundingClientRect(),
                    c = b.left,
                    d = b.width;
                this.break = d + 2 * c < 390
            }
            computeRTL(a) {
                const b = a.language || "en";
                return !!a.translationMetadata.translations[b] && (a.translationMetadata.translations[b].isRTL || !1)
            }
            toggleGroupList() {
                this.edit = !this.edit
            }
            handleMoreInfo(a) {
                a.stopPropagation(), this.config.more_info && this.fire("hass-more-info", {
                    entityId: this.config.entity
                })
            }
            fire(a, b, c) {
                const d = c || {},
                    f = null === b || void 0 === b ? {} : b,
                    g = new Event(a, {
                        bubbles: void 0 === d.bubbles || d.bubbles,
                        cancelable: !!d.cancelable,
                        composed: void 0 === d.composed || d.composed
                    });
                return g.detail = f, this.dispatchEvent(g), g
            }
            updateIdleStatus() {
                this._idleTracker && clearTimeout(this._idleTracker);
                const a = (Date.now() - new Date(this.player.updatedAt).getTime()) / 1e3;
                this._idleTracker = setTimeout(() => {
                    this.idle = this.player.checkIdleAfter(this.config.idle_view.after), this.player.idle = this.idle, this._idleTracker = null
                }, 1e3 * (60 * this.config.idle_view.after - a))
            }
            getCardSize() {
                return this.config.collapse ? 1 : 2
            }
        }
        customElements.define("mini-media-player", Cc)
    })
})();