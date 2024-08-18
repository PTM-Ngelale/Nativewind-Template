module.exports = {
  overwrite: true,
  schema: "https://alarm-saas-backend-y2v2v.ondigitalocean.app/graphql",
  documents: ["./graphql/**/*.ts"],
  generates: {
    "generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};
