module.exports = {
  overwrite: true,
  schema: "https://5ed1-102-90-44-80.ngrok-free.app/graphql",
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
