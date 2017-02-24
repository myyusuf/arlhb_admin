export default class RestService {

  static post(options, csrfToken) {
    RestService.send("POST", options, csrfToken);
  }

  static send(method, options, csrfToken) {
    $.ajax({
          method: method,
          url: options.url,
          data: JSON.stringify(options.data),
          beforeSend: function(xhr){
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('X-CSRF-Token', csrfToken);
          }
        }).done(function() {
            $("#successNotification").jqxNotification("open");
            if(options.onSuccess){
              options.onSuccess();
            }
        }).fail(function( jqXHR, textStatus, errorThrown) {
            var errorMessage = 'Proses gagal. Status : ' + jqXHR.status + ' [' + jqXHR.statusText + '] : ' + jqXHR.responseText;
            $("#errorNotification").html('<div>' + errorMessage + '</div>');
            $("#errorNotification").jqxNotification("open");

            if(options.onError){
              options.onError();
            }
        });
  }
}
