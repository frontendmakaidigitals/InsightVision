module.exports = {
  extends: ["next", "next/core-web-vitals"], // or whatever your project is using
  rules: {
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-nocheck": false, // allow @ts-nocheck
        "ts-ignore": true,
        "ts-expect-error": true,
      },
    ],
  },
};
