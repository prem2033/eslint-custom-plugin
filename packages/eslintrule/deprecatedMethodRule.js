const deprecatedMethod = (context) => {
  return {
    Identifier: (node) => {
      if (
        node.parent.init &&
        node.parent.init.type === "ArrowFunctionExpression" 
      ) {
        const { name } = node;
        if (name === 'payment') {
          context.report(
            node,
            `Method ${name} is deprecated, Please use newPatment.`
          );
        }
      }
    },
  };
};

module.exports = { deprecatedMethod };
