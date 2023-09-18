import { ApiBaseUrl } from "../Services/Config";
import REQUEST from "../Services/Request";

export default async function LOGOUT() {
  return await REQUEST({
    method: "DELETE",
    url: ApiBaseUrl + `cookie`,
    withCredentials: true,
    xhrFields: { withCredentials: true },
  }).catch((error) => console.log(error));
}
