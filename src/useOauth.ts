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

export const useOauth = <T extends OauthDestinations>(
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
    window.open(url, "connect", "width=500,height=800");
  };
  const create = async (props: CreateOauthDestinationProps) => {
    const {
      code,
      group,
      label,
      endpoint,
      headers,
      type: destinationType,
    } = props;
    const type = oauthDestination.type || destinationType;

    try {
      const response = await axios.post(
        endpoint,
        {
          code,
          group,
          label,
          type,
        },
        {
          headers: headers,
        }
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.error);
      }
      throw new Error("An unknown error occurred");
    }
  };

  return {
    open,
    create,
  };
};
