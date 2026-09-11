export const createClasses = (
  ...args: (string | boolean | undefined)[]
): string => {
  return args.filter(Boolean).join(" ");
};