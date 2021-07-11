import {IconName, IconPrefix} from "@fortawesome/free-brands-svg-icons";

export interface Tab {
  label: string;
  route: string;
  faIcon: IconName;
  faPrefix: IconPrefix;
}
