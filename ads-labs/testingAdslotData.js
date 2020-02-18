  function adslotsData(data) {
    if (typeof fluidClass == 'function'){
      fluidClass();
    }
    adslotsEventData.push(data);
    as = gptadslots.indexOf(data.slot) + 1
    console.group('%cAdslot: ' + as, 'font-size: 120%;font-weight:bold');
    if (!data.isEmpty) {
      $('#asinfo' + as).show();
      console.log('   %cAdvertiser ID:  ', 'font-style:italic', data.advertiserId);
      console.log('   %cCampaign   ID:  ', 'font-style:italic', data.campaignId);
      console.log('   %cLineItem   ID:  ', 'font-style:italic', data.lineItemId);
      console.log('   %cCreative   ID:  ', 'font-style:italic', data.creativeId);
      $('#aid'+ as).text(data.advertiserId ? data.advertiserId : 'N/A');
      $('#cmid'+ as).text(data.campaignId ? data.campaignId : 'N/A');
      $('#lid'+ as).text(data.lineItemId ? data.lineItemId : 'N/A');
      $('#cid'+ as).text(data.creativeId ? data.creativeId : 'N/A');
      $('#sz' + as).text(data.size[0] + 'x' + data.size[1]);
      $('#asInfo-wrapper' + as).width(data.size[0] >= 300 ? data.size[0] + 22 : 322);
      $('#qid' + as).text(gptadslots[as - 1].getEscapedQemQueryId());

      if(data.size[0] == 1 && data.size[1] == 1){
        window.setTimeout(checkOop, 2000, as);
      }
      if(typeof icsUrls !== 'undefined'){
        icsUrls(as, data);
      }
    } else {
      console.log('   %cNo Ad Returned!', 'font-style:italic');
      $('#noad' + as).show();
      $('#noadqid' + as).text(gptadslots[as - 1].getEscapedQemQueryId());
      $('#noadQID' + as).show();
    }
    console.log('   %cQuery      ID:  ', 'font-style:italic',
                  gptadslots[as - 1].getEscapedQemQueryId());
    console.groupEnd();
  }