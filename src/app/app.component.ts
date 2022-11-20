import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as pbi from 'powerbi-client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  name = 'Angular';
  @ViewChild('embeddedReport')
  embeddedReport!: ElementRef;
  //@ViewChild('reportContainer', { static: false }) reportContainer: ElementRef;

  ngOnInit() {}

  ngAfterViewInit() {
    this.showReport();
  }

  showReport() {
    const embedReportId = 'f6bfd646-b718-44dc-a378-b73e6b528204';

    const accessToken =
      'H4sIAAAAAAAEACVWtQ7sCBL8l5d6JTOttIFxzMyZecyMq_v3G2nzDrqruuDfP1b69FNa_Pn7DwsJlaFLGDnrl3tT0gCcmoYlkIh2p8iLSgd17Dffzru10TLLNpQEbRFND6rRdKEOFghzwwufhUKnAKB0aQI_Z8hihRp4B0CjzM-A34-utlGhjgWfAEBPtPAteEfH00CeNYwrhvOsPRkjn7Q_o0hZQXHUQYRz0i123TMPXNUbcq_ysYEFzPSGxbBvMG5WfKPOeF7wY378cdN3UdQGxKaiArK6DjD2z1LDN73l7128--f-3dvQtwMjJOJH1Jlur9UqYTZljhY9rNISiYaNXM2jXx0BElMfsKeII8TbzzaKny0-SVYmkq9hEJX1pCveIkVzmz3MaBOcIQc_FQFUu94hbJ0s3AMo4iDrT0mT4gcsgq55574agZGBUWATJB4n8YVCI3sxf0Q927YvPUiahExlJE8zC4jzSF6sxVRB1mRrkVSpo4x-w6CT0uSrbgm0fT7-fqHD2tDRsrgBqvYNZhfKhxrj3gRhoGAR97b0w9qWC-ltCfMC-IOrQGJBnVNodub6qZxtpIJI5kT2oOxVo7niIaD2xJvMupkoMGQtqNUVSH3hkclkTt_lWW-mRmyW5GRPWhSuOXRbbpljC8TjxGG1nRJDREegCxGBZu9hnkwV_Hya1B5HlENQMKiLjFsi6zAjrk_1UrPexxTt7YzYrvZh2rxD9U25PL2wyVtmjE48dFl4C1F9ZKtFelDBaZ1KZsX1v1Jqfu8NucGrGMT2qmHWql6_UDVARZtLsT2ZttSV0n5rPT38FKTLQtkFh4_KXqBWyRWl-HcKkxm1AzdxK6zOHEgnWa7cASG2m4Rkzjc2EQ8D1CuXgMM6g5acmrhNvyHthbxVMUiSiieYFYsgKQcithMW4l8rlOUSv24nVuxVwqdzsryYQCxY0SSO22MGLu262oE0G30LL5yxNslFINUPpLOri4F84wTyCrB0alVzxlziJ7u1Vq8zI4IuY6GsmeFsq4NXOWqjJqrYnfSo2CQrShQlThVLOcQs4yu8ElNoAWm4GV4UR0O7i4u9tUIzTOGCzZc_Y9DNZO3DP1wVh_rhXSiHV5Oboiy_cVe4SW1xspf2OVjRlcR7uiBjsE4xzh4SRG7kuNNKQvLa0YYLVoLXlIM2qy-KvZRntvvJYvcEfIXUMcR4Mu7QlUEZo_EEi44zAWKCJs-uih_C5kKeXm6VFZRRupuY0eeLVBLcbD7AWsbmdxNt5eJksgqZk7Gt-xwDB8MbvxPMVG9STzgqbUMmrcSpwyERQ8klHxiFx9Y0pZT236N57vgQH06J8Qp0xLAL4Vhdclv02TdSRZfqsMJJGzNmsOnps8IrTcOULWQQ0qpaQEqAsYCJ04tIFmTgtz1xDHuxUiJaDrnCIWlUxxPVE2C9xdAKYVPruMMVsBz6qd2EdhGyStnQOjs5nyozTjNPfgTv_hdmgu_KefvL6XmO-21dPkyTOkDD2SchhbBmBD2CXbpO-8aktEwBoYkM2XRDPBz1A8F4fEjRhWvb4D2uXFkwSOlEqssa5CEJAwQsC42HhDUHPr5eYEC9_LzKrMMLvZnYr-jArO-7HobaSTKxNwY4tPh6j5pc5BIk8PP6J153Bvih0sJMyu_clbnytXzquINxBroU4aqm3B1GekxePcMt4GWnS7vtMgpc7j1E3e60hZOcsgjcrQpWrxT6qG9Sta5HgbX4psDXKzbIWZQmzOPP53MKFKH0qa-oO5_Z7BN4RLcVOz8HpHWIskGt4qG90SVo8ypso6wq437jNApQxaeUFztdPJ4_j6pZhzTn7wObRAe3fL4VeNl6PaWE3puevgmDCPeWS_OsDvOdcI1mUHZ74Th5qOMFEaKSIFmmoLszW4y4yXFkHJaOC0Tpgr5FMuKQfUvBeRZ_pDZKKCToKdpVr1b9utIIDuLAbyjPRR9_fmbzYZFA39oIH-8XdGqyte_v2RTEtDgRvfvZCSMZeFw-pdvfKsmIdWiLZQdHFCstVIz5a27kExHcClJljTdjODPjetVGCX2u-YuCKF6uZLuXG_RWwFBV712FPijN8LMrH9X_3r-AqK9LmHSBNHBQI358R8PFP0WtW0NMDIpyoI4jVEjCGwvgjTLE9dIi7LwOOU3MpkL9cD1GeuXOTjPsZ7oB874NVOxnQpSqM5FwGyHkXIvIUrzYM6ar3X6KPJA4_XxDttlZLl-3CNgClZf0jLZpk3xRPjyZu92zSlzrLCyiUY9f_1WnLJ9BNk4bImZ98PtcDh7FLZePMAAuysboOIDvks6RMstVkoV3u5QxcOugEkeyEe6gscDHeeriTMu19BNiZRUzfJDLQQaejUKkFPGdsJwUoCp1n_nngowTFQ5LnlMhZWxPZx0Uv5o5SPVJaCzhRSeGYy5RbRoVCmOrK5TpK3vg3QmZurYFwUG9VfIo3gIORxRvjM57fWzjO-SsJ7y-bTIxY0ZOzQbAHhNV5pLAotiCKuf7MJHw9Q0JhaixiZOFzbn--efPX3-49Zn3SS2fX02rKW_bi2RaP9kMZYLtFGxqf3-O7-UOifF0SPMaBwdoN71nobDBuWDSSSOnyOJthLA1mhAbTd_VGlHk3InUFMzFryXseyGk0QmbwsUjTZwig7eMJm1JmmlRtdRXowiN1WgIEfp0jb1Xdy6mQp_qjhctco4HoynkMAv_kk6Qwb3Mf5WOZis8Nahp9ruUjh4yvg22flfOh29HQIUOYPp1MQES_ojhOx57bPZFAiAOLglsSwHHRUsOf7sM5pdI0PhqJz_5x-CAEYr8eK4DYrkog4-9-cohih-XcMm4Fu4hlsvIOpi4AV_xT2dNFkoSB9Crm7g_K_u-_i-SBjzfwj3ZOIIs183-D-Zn_parHPxQJmIBM4UwNUemJLBPqL0lhf435Tb1mO7HWv7GHKViYoJ72qWJt26Fr7QBSmowprz29yG9oOHwnm9v9ZkAHmDxfQ3A05lNCRhMKRD7xyR5rcl1KWLUO8a8Hhsq8q_Y7_f5Cdq57xmWsxO0z9oVMx-e9OHGeZ7WnwXBohiqR6Ox4zEe4dzXsS7q1hVSnbeWTmPXVjnvJJuIO-ML-X1hOJAWmUZ90dMYv3y7Yj7HxG5sPBTLEq5l79i38XtsiwiHKYXU4tbePqL-dL6AQ8W-Bdfz9AbujP4J_Av1pvqGHbZjfKAE-qKQ23V5V19XH0DW6WEsvkn7uSV_MHDVPmYB5tuAoEhDYqO05D1kS-gD_YzzYEbT6wWk_0uzAfB1cxaYH8z_-z9hj7ZMmgwAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19';
    let embedUrl =
      'https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d';

    let config = {
      type: 'report',
      tokenType: pbi.models.TokenType.Embed,
      accessToken: accessToken,
      embedUrl: embedUrl,
      id: 'f6bfd646-b718-44dc-a378-b73e6b528204',
      filters: [],
      settings: {
        filterPaneEnabled: true,
        navContentPaneEnabled: true
      }
    };

    let powerbi = new pbi.service.Service(
      pbi.factories.hpmFactory,
      pbi.factories.wpmpFactory,
      pbi.factories.routerFactory
    );
    let report = powerbi.embed(this.embeddedReport.nativeElement, config);
    report.off('loaded');
    report.on('loaded', () => {
      console.log('Loaded');
    });
    report.on('error', () => {
      // this.getToken();
    });
  }
}
