// import "@nextcloud/dialogs/dist/style.css";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "../css/mycss.less";

import DataTable from "datatables.net";
import { globalConfiguration, optionDatatable } from "./modules/mainFunction.js";
import "./listener/main_listener";
import { Produit } from "./objects/produit.js";

window.addEventListener("DOMContentLoaded", function () {
    globalConfiguration();

    Produit.loadProduitDT(new DataTable(".tabledt",optionDatatable));
});