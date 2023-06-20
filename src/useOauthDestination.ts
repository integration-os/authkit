import { getUrl } from "./helpers/utils";
import {
  CreateOauthDestinationProps,
  OauthDestinationProps,
  OauthDestinations,
} from "./types";
import axios from "axios";

class OauthDestination {
  public type: OauthDestinations;

  constructor({ type }: { type: OauthDestinations }) {
    this.type = type;
  }
}

export const useOauthDestination = <T extends OauthDestinations>(
  props: OauthDestinationProps<T>
) => {
  const { type, state, redirectUri, scopes, clientId } = props;

  const oauthDestination = new OauthDestination({
    type,
  });

  const url = `${getUrl(
    oauthDestination.type
  )}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    " "
  )}&state=${state}`;

  const open = () => {
    window.open(url, "_blank");
  };
  const create = async (props: CreateOauthDestinationProps) => {
    const {
      code,
      group,
      label,
      oauthEndpoint,
      oauthHeaders,
      type: destinationType,
    } = props;
    const type = oauthDestination.type || destinationType;

    try {
      const response = await axios.post(
        oauthEndpoint,
        {
          code,
          group,
          label,
          type,
        },
        {
          headers: oauthHeaders,
        }
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  };

  return {
    open,
    create,
  };
};
