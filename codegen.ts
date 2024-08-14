module.exports = {
  overwrite: true,
  schema: "https://4840-2c0f-2a80-a-6f10-49a7-20a7-5c32-fe2a.ngrok-free.app/graphql",
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
