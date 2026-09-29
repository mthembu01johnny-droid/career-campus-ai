export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff8ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  pNew chat
Agents
Spaces

Fixing Tailwind configuration errors
Copilot Chat
Fixing Tailwind configuration errors
Uploaded image: Screenshot_2026-09-29-23-38-09-744_com.android.chrome.jpg
Uploaded image: Screenshot_2026-09-29-23-38-04-899_com.android.chrome.jpg
Describe this image
This image shows a software deployment dashboard in a browser-like interface. At the top is a status bar with the time “23:38” and mobile signal/battery indicators. The main panel has a left-side app icon, a circular brand mark, and a header reading “Deployments / F9yzi8sSP” or similar.

Below that is a tab row: “Deployment”, “Logs”, “Resources”, “Source”, and “Open Graph”, with “Deployment” highlighted. The screen is mostly light gray with a pale pink error panel over a white content area.

The visible error is:

“TypeError: plugins.forEach is not a function”

and the stack trace shows Node.js/Tailwind/Next.js internals:

“at Array.forEach (<anonymous>)”
“at extractPluginConfigs”
“at resolveConfig”
“at resolveConfig”
“at setupTrackingContext”
This appears to be a deployment or runtime failure in a web app, where a plugin configuration object is being treated like an array and the code calls .forEach on it. The screenshot is technical and focused on a debugging/error page, not a photo of a person.

How to fix this 
This is almost certainly a Tailwind configuration bug, not a Next.js runtime bug.

The key clue is the error:

TypeError: plugins.forEach is not a function

In Tailwind, plugins must always be an array. If it is an object, string, function, or undefined, Tailwind crashes exactly like this.

What to check

Open your Tailwind config file, usually:

tailwind.config.js
or tailwind.config.cjs
Look for something like this:

js
module.exports = {
  plugins: {
    '@tailwindcss/forms': {},
  }
}
This is wrong. It should be:

js
module.exports = {
  plugins: [require('@tailwindcss/forms')],
}
Also check for custom plugins:

js
module.exports = {
  plugins: require('./plugins'),
}
That is also wrong unless require('./plugins') returns an array. It should be:

js
module.exports = {
  plugins: [require('./plugins')],
}
Common causes

plugins was set to an object instead of an array
a plugin import returns a function/object instead of an array item
a custom config file is exporting the wrong shape
the config file got partially overwritten during deployment
How to fix

Open tailwind.config.js
Find the plugins property
Ensure it is an array:
js
plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
],
If you have a custom plugin:
js
const myPlugin = require('./my-plugin')

module.exports = {
  plugins: [myPlugin],
}
Redeploy your app
Example of a valid config

js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
If you want, paste your tailwind.config.js here and I can tell you exactly what to change.

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff8ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
Your Tailwind config looks correct—plugins is an empty array, which is valid.

The error is likely coming from somewhere else in your codebase calling .forEach() on something that isn't an array.

Where to look:

Check your Next.js config (next.config.js or next.config.mjs)

Make sure it doesn't have a malformed plugins property
Search your codebase for places where plugins is being set:

Code
plugins.forEach
plugins.map
Object.keys(plugins)
Look for any custom code that assumes plugins is an array.

Check for a custom Tailwind plugin file

Do you have any files in ./lib/ or elsewhere that export plugins?
Ensure it returns an array, not an object.
Look in package.json or build scripts

Any postinstall or build scripts that manipulate the config?
Check the Tailwind plugin source

The error trace shows /node_modules/tailwindcss/lib/util/resolveConfig.js:198:17
This is Tailwind's internal code trying to iterate over plugins
This means Tailwind received something that isn't an array
Quick fix to test:

Try explicitly converting plugins to an array in your config:

js
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff8ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: Array.isArray([]) ? [] : [],
};
