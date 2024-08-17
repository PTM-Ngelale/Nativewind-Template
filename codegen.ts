module.exports = {
  overwrite: true,
  schema: "https://e591-197-210-226-41.ngrok-free.app/graphql",
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
