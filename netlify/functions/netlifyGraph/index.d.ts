// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!

export type NetlifyGraphFunctionOptions = {
  /**
   * The accessToken to use for the request
   */
  accessToken?: string;
  /**
   * The siteId to use for the request
   * @default process.env.SITE_ID
   */
  siteId?: string;
};

export type WebhookEvent = {
  body: string;
  headers: Record<string, string | null | undefined>;
};

export type GraphQLError = {
  path: Array<string | number>;
  message: string;
  extensions: Record<string, unknown>;
};

export type DownloadLastMonth = {
  /**
   * Any data from the function will be returned here
   */
  data: {
    /**
     * The root for npm queries
     */
    npm: {
      /**
       * Find a npm package member by its npm name, e.g. `"fela"`
       */
      package: {
        /**
         * Summary download stats for a package
         */
        downloads: {
          /**
           * The download status for this package over the last month
           */
          lastMonth: {
            /**
             * The download stats for the given package and range. Check out explanation of how [npm download counts work](http://blog.npmjs.org/post/92574016600/numeric-precision-matters-how-npm-download-counts), including "what counts as a download?"
             */
            count: number;
          };
        };
      };
    };
  };
  /**
   * Any errors from the function will be returned here
   */
  errors: Array<GraphQLError>;
};

/**
 * An example query to start with.
 */
export function fetchDownloadLastMonth(
  /**
   * Pass `{}` as no variables are defined for this function.
   */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<DownloadLastMonth>;
