/**
 * List of mobile first breakpoints with its corresponding media query values
 */
const defaults = {
  xs: '',
  sm: 768,
  md: 992,
  lg: 1200
};

/**
 * Creates an object of media queries based on the options defaults or a passed
 * custom object in which case also takes an option to make the grid desktop
 * first
 * @param {Object} bps - List of custom breakpoints
 * @param {string} first - Optional Mobile or Desktop first prefix [min || max]
 * @returns {Object} Object with the namespaces and media queries for the
 * responsive approach
 */
export default function (bps = defaults, first = 'min') {
  const mediaObject = {};

  Object.keys(bps)
    .forEach(key =>
      mediaObject[key] = bps[key] ?
        `@media only screen and (${first}-width: ${bps[key]}px)` :
        ''
    );

  return mediaObject;
}
