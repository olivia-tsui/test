// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qajhofq6grFHaqJ4D9gdM
// Component: ISBy8m_Ls-owR
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Star from "../../Star"; // plasmic-import: lF5txiR61In82/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_copy_of_blank_project.module.css"; // plasmic-import: qajhofq6grFHaqJ4D9gdM/projectcss
import sty from "./PlasmicRating.module.css"; // plasmic-import: ISBy8m_Ls-owR/css

export const PlasmicRating__VariantProps = new Array();

export const PlasmicRating__ArgProps = new Array(
  "numberOfStars",
  "onNumberOfStarsChange",
  "onValueChange"
);

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicRating__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "numberOfStars",
        type: "writable",
        variableType: "number",
        initFunc: true ? ({ $props, $state, $queries, $ctx }) => 5 : undefined,
        valueProp: "numberOfStars",
        onChangeProp: "onNumberOfStarsChange"
      },
      {
        path: "hover",
        type: "private",
        variableType: "number",
        initFunc: true ? ({ $props, $state, $queries, $ctx }) => 0 : undefined
      },
      {
        path: "value",
        type: "readonly",
        variableType: "number",
        initFunc: true ? ({ $props, $state, $queries, $ctx }) => 0 : undefined,
        onChangeProp: "onValueChange"
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return true ? (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
      onMouseLeave={async event => {
        const $steps = {};
        $steps["setHover"] = true
          ? (() => {
              const actionArgs = {
                variable: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "updateVariable",
                    interactionUuid: "3LBgXiX2PnpLW",
                    componentUuid: "ISBy8m_Ls-owR",
                    argName: "variable"
                  },
                  () => ({
                    objRoot: $state,
                    variablePath: ["hover"]
                  })
                ),

                operation: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "updateVariable",
                    interactionUuid: "3LBgXiX2PnpLW",
                    componentUuid: "ISBy8m_Ls-owR",
                    argName: "operation"
                  },
                  () => 0
                ),

                value: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "updateVariable",
                    interactionUuid: "3LBgXiX2PnpLW",
                    componentUuid: "ISBy8m_Ls-owR",
                    argName: "value"
                  },
                  () => $state.value
                )
              };
              return __wrapUserFunction(
                {
                  type: "InteractionLoc",
                  actionName: "updateVariable",
                  interactionUuid: "3LBgXiX2PnpLW",
                  componentUuid: "ISBy8m_Ls-owR"
                },
                () =>
                  (({ variable, value, startIndex, deleteCount }) => {
                    const { objRoot, variablePath } = variable;
                    p.set(objRoot, variablePath, value);
                    return value;
                  })?.apply(null, [actionArgs]),
                actionArgs
              );
            })()
          : undefined;
        if (
          typeof $steps["setHover"] === "object" &&
          typeof $steps["setHover"].then === "function"
        ) {
          $steps["setHover"] = await __wrapUserPromise(
            {
              type: "InteractionLoc",
              actionName: "updateVariable",
              interactionUuid: "3LBgXiX2PnpLW",
              componentUuid: "ISBy8m_Ls-owR"
            },
            $steps["setHover"]
          );
        }
      }}
    >
      {true
        ? (
            (() => {
              try {
                return Array.from(
                  { length: $state.numberOfStars },
                  (_, i) => i + 1
                );
              } catch (e) {
                if (e instanceof TypeError) {
                  return [];
                }
                throw e;
              }
            })() ?? []
          ).map((currentItem, currentIndex) => (
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
              key={currentIndex}
              onClick={async event => {
                const $steps = {};
                $steps["setValue"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariable",
                            interactionUuid: "kBVbBfNlVpOc4",
                            componentUuid: "ISBy8m_Ls-owR",
                            argName: "variable"
                          },
                          () => ({
                            objRoot: $state,
                            variablePath: ["value"]
                          })
                        ),

                        operation: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariable",
                            interactionUuid: "kBVbBfNlVpOc4",
                            componentUuid: "ISBy8m_Ls-owR",
                            argName: "operation"
                          },
                          () => 0
                        ),

                        value: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariable",
                            interactionUuid: "kBVbBfNlVpOc4",
                            componentUuid: "ISBy8m_Ls-owR",
                            argName: "value"
                          },
                          () => $state.hover
                        )
                      };
                      return __wrapUserFunction(
                        {
                          type: "InteractionLoc",
                          actionName: "updateVariable",
                          interactionUuid: "kBVbBfNlVpOc4",
                          componentUuid: "ISBy8m_Ls-owR"
                        },
                        () =>
                          (({ variable, value, startIndex, deleteCount }) => {
                            const { objRoot, variablePath } = variable;
                            p.set(objRoot, variablePath, value);
                            return value;
                          })?.apply(null, [actionArgs]),
                        actionArgs
                      );
                    })()
                  : undefined;
                if (
                  typeof $steps["setValue"] === "object" &&
                  typeof $steps["setValue"].then === "function"
                ) {
                  $steps["setValue"] = await __wrapUserPromise(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariable",
                      interactionUuid: "kBVbBfNlVpOc4",
                      componentUuid: "ISBy8m_Ls-owR"
                    },
                    $steps["setValue"]
                  );
                }
              }}
              onMouseOver={async event => {
                const $steps = {};
                $steps["setHover"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariable",
                            interactionUuid: "Pk74AUQncxguW",
                            componentUuid: "ISBy8m_Ls-owR",
                            argName: "variable"
                          },
                          () => ({
                            objRoot: $state,
                            variablePath: ["hover"]
                          })
                        ),

                        operation: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariable",
                            interactionUuid: "Pk74AUQncxguW",
                            componentUuid: "ISBy8m_Ls-owR",
                            argName: "operation"
                          },
                          () => 0
                        ),

                        value: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariable",
                            interactionUuid: "Pk74AUQncxguW",
                            componentUuid: "ISBy8m_Ls-owR",
                            argName: "value"
                          },
                          () => currentIndex + 1
                        )
                      };
                      return __wrapUserFunction(
                        {
                          type: "InteractionLoc",
                          actionName: "updateVariable",
                          interactionUuid: "Pk74AUQncxguW",
                          componentUuid: "ISBy8m_Ls-owR"
                        },
                        () =>
                          (({ variable, value, startIndex, deleteCount }) => {
                            const { objRoot, variablePath } = variable;
                            p.set(objRoot, variablePath, value);
                            return value;
                          })?.apply(null, [actionArgs]),
                        actionArgs
                      );
                    })()
                  : undefined;
                if (
                  typeof $steps["setHover"] === "object" &&
                  typeof $steps["setHover"].then === "function"
                ) {
                  $steps["setHover"] = await __wrapUserPromise(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariable",
                      interactionUuid: "Pk74AUQncxguW",
                      componentUuid: "ISBy8m_Ls-owR"
                    },
                    $steps["setHover"]
                  );
                }
              }}
            >
              <Star
                data-plasmic-name={"star"}
                data-plasmic-override={overrides.star}
                active={undefined}
                className={classNames("__wab_instance", sty.star)}
              />
            </div>
          ))
        : null}
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "star"],
  freeBox: ["freeBox", "star"],
  star: ["star"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicRating__ArgProps,
          internalVariantPropNames: PlasmicRating__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicRating__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRating";
  } else {
    func.displayName = `PlasmicRating.${nodeName}`;
  }
  return func;
}

export const PlasmicRating = Object.assign(
  // Top-level PlasmicRating renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    star: makeNodeComponent("star"),
    // Metadata about props expected for PlasmicRating
    internalVariantProps: PlasmicRating__VariantProps,
    internalArgProps: PlasmicRating__ArgProps
  }
);

export default PlasmicRating;
/* prettier-ignore-end */
