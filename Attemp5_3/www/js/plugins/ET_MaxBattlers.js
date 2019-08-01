//=============================================================================
// ET_MaxBattlers.js
//=============================================================================

/*:
 * @plugindesc Change the translucentcy of Standard Windows.
 * @author Eivind Teig
 *
 * @param Change Max Battle Members
 * @desc The translucentcy of the standard windows, range from 0-255
 * @default 4
 *
 * @param Members possition
 * @desc Offset the members to avoid overlap.
 * @default -40
 *
 * @param Number of followers
 * @desc The number of followers that can follow you.
 * @default 4
 */

(function() {
    var parameters = PluginManager.parameters('ET_MaxBattlers');
    var members = Number(parameters['Change Max Battle Members'] || 4);
    var membersOffset = Number(parameters['Members possition'] || -40);
    var followers = Number(parameters['Number of followers'] || 4);
    
    Game_Party.prototype.maxBattleMembers = function() {
	return members;
    };

    Sprite_Actor.prototype.setActorHome = function(index) {
	this.setHome(600 + index * 32, 280 + index * 48 + membersOffset);
    };

    Game_Party.prototype.variablePartySize = function(e) {
	return e;
    };
    
    Game_Followers.prototype.initialize = function() {
	this._visible = $dataSystem.optFollowers;
	this._gathering = false;
	this._data = [];
	for (var i = 1; i < $gameParty.variablePartySize(followers); i++) {
            this._data.push(new Game_Follower(i));
	}
};
    
})();
