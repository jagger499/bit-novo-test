export type Language = "es";

export type TranslationKeys = {
  [key: string]: any;
};

export type TranslationsType = {
  [key in Language]: Partial<TranslationKeys>;
};
