/**
 * @fileoverview 마일스톤 항목 클릭 이벤트 핸들러 모듈
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.tui.util;
var config = require('../../config');
var domutil = require('../../common/domutil');

/**
 * 마일스톤 클릭 이벤트 핸들러 모듈
 * @constructor
 * @implelements {Handler}
 * @mixes util.CustomEvents
 * @param {Drag} dragHandler - dragHandler instance
 * @param {Task} taskView - milstone view instance
 * @param {Base} baseController - baseController instance
 */
function TaskClick(dragHandler, taskView, baseController) {
    /**
     * @type {Drag}
     */
    this.dragHandler = dragHandler;

    /**
     * @type {Task}
     */
    this.taskView = taskView;

    /**
     * @type {Base}
     */
    this.baseController = baseController;

    dragHandler.on({
        'click': this._onClick
    }, this);
}

/**
 * Destroy
 */
TaskClick.prototype.destroy = function() {
    this.dragHandler.off(this);
    this.dragHandler = this.taskView = this.baseController = null;
};

/**
 * @param {HTMLElement} target - check reponsibility to this handler module supplied element
 * @returns {boolean|string} return false when handler has no responsibility for supplied element. 
 * otherwise, return event model id that related with target element.
 */
TaskClick.prototype.checkExpectedCondition = function(target) {
    target = domutil.closest(target, '.' + config.classname('task-item'));

    if (!target) {
        return false;
    }

    return domutil.getData(target, 'id');
};

/**
 * @emits TaskClick#clickEvent
 * @param {object} clickEvent - click event object
 */
TaskClick.prototype._onClick = function(clickEvent) {
    var modelID = this.checkExpectedCondition(clickEvent.target);

    if (!modelID) {
        return;
    }

    this.baseController.events.doWhenHas(modelID, function(model) {
        /**
         * @events TaskClick#clickEvent
         * @type {object}
         * @property {CalEvent} model - model instance
         * @property {MouseEvent} jsEvent - MouseEvent object
         */
        this.fire('clickEvent', {
            model:  model,
            jsEvent: clickEvent.originEvent
        });
    }, this);
};

util.CustomEvents.mixin(TaskClick);

module.exports = TaskClick;

