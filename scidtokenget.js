Java.perform(function() {
    var IdAccount = Java.use("com.supercell.id.scid_plugin.IdAccount");

    IdAccount.toString.overload().implementation = function() {
        var result = this.toString();
        var supercellId = this.supercellId.value;
        var email = this.email.value;
        var scidToken = this.scidToken.value;

        console.log(supercellId);
        console.log(email);
        console.log(scidToken);

        return result;
    };
});