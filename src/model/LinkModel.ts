import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type LinkModel = {
  label: string;
  alt: string;
  path: string;
  icon?: IconDefinition;
  textColor?: string;
};
