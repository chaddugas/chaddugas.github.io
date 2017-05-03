function createCalendar(e, d, n) {
   var thisDate, $input = $(e),
      $datepicker = $input.closest(".datepicker"),
      date = new Date(d),
      navClick = n,
      $calendar = $('<div class="datepicker-calendar" />'),
      $headRow = $('<div class="datepicker-calendar-headRow" />'),
      $dayRow = $('<div class="datepicker-calendar-dayRow" />'),
      $bodyRow = $('<div class="datepicker-calendar-bodyRow" />'),
      days = ["S", "M", "T", "W", "T", "F", "S"],
      months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      currentYear = date.getFullYear(),
      currentMonth = date.getMonth(),
      currentDay = date.getDate(),
      todayDay = (new Date).getDate(),
      todayMonth = (new Date).getMonth(),
      todayYear = (new Date).getFullYear(),
      currentMonthValue = currentMonth + 1,
      currentMonthName = months[currentMonth],
      startDay = new Date(currentYear, currentMonth, 1).getDay(),
      daysInMonth = new Date(currentYear, currentMonthValue, 0).getDate(),
      previousDate = new Date(currentYear, currentMonth - 1, 1),
      nextDate = new Date(currentYear, currentMonth + 1, 1),
      gridLocationIndex = 0,
      dayCounter = 1,
      dateTitle = currentMonthName + " " + currentYear;
   $(".datepicker-calendar").remove();
   for (var i = 0; i < 3; i++) 1 == i ? $headRow.append($("<div>" + dateTitle + "</div>")) : 0 === i ? $headRow.append($('<div class="datepicker-nav" data-date="' + previousDate + '" />')) : 2 == i && $headRow.append($('<div class="datepicker-nav" data-date="' + nextDate + '" />'));
   for (var i = 0; i < 7; i++) $dayRow.append($("<div>" + days[i] + "</div>"));
   for (; dayCounter <= daysInMonth;) gridLocationIndex < startDay ? gridLocationIndex == startDay - 1 ? $bodyRow.append($('<div class="empty last" />')) : $bodyRow.append($('<div class="empty" />')) : dayCounter != currentDay || navClick || "" != !$input.val() ? (thisDate = new Date(currentYear, currentMonth, dayCounter), currentYear == todayYear && currentMonth == todayMonth && dayCounter == todayDay ? ($bodyRow.append($('<div class="today date" data-date="' + thisDate + '">' + dayCounter + "</div>")), dayCounter++) : ($bodyRow.append($('<div class="date" data-date="' + thisDate + '">' + dayCounter + "</div>")), dayCounter++)) : (thisDate = new Date(currentYear, currentMonth, dayCounter), currentYear == todayYear && currentMonth == todayMonth && dayCounter == todayDay ? ($bodyRow.append($('<div class="today selected date" data-date="' + thisDate + '">' + dayCounter + "</div>")), dayCounter++) : ($bodyRow.append($('<div class="date selected" data-date="' + thisDate + '">' + dayCounter + "</div>")), dayCounter++)), gridLocationIndex++;
   $calendar.append($headRow).append($dayRow).append($bodyRow), $datepicker.append($calendar) }

function parallax($el) { window.matchMedia("(min-device-width: 700px)").matches && window.matchMedia("(min-width: " + mediaMed + "px)").matches ? $el.each(function() {
      var elementTop = $(this).offset().top,
         elementHight = $(this).outerHeight(),
         scrollTop = $(window).scrollTop(),
         viewHeight = $(window).innerHeight(),
         inViewport = scrollTop - elementTop + viewHeight > 0 && !(scrollTop > elementTop + elementHight),
         bgpos = -((elementTop - scrollTop + elementHight) / (viewHeight + elementHight) * 150);
      inViewport && $(this).css("background-position-y", bgpos + "px") }) : $el.css("background-position-y", "") }

function tabs() { $(".tabs").length && ($(".tabs").each(function() {
      var $firstTab = $(this).children("li").first(),
         $otherTabs = $(this).children("li").not($firstTab),
         $underline = $(this).children(".underline");
      $firstTab.addClass("is-active"), $otherTabs.removeClass("is-active"), underline($underline) }), $(".tabs > .tab > a").click(function(event) { event.preventDefault();
      var $thisTab = $(this).parents(".tab"),
         $otherTabs = $(this).parents(".tabs").children(".tab").not($thisTab),
         $underline = $(this).parents(".tabs").children(".underline");
      if (window.matchMedia("(min-width:851px)").matches) $thisTab.addClass("is-active"), $otherTabs.removeClass("is-active"), underline($underline);
      else if ($thisTab.hasClass("is-active")) {
         var $firstTab = $thisTab.parents(".tabs").children("li").first(),
            headerHeight = 95,
            destination = $firstTab.offset().top - headerHeight;
         $thisTab.removeClass("is-active"), $("html, body").animate({ scrollTop: destination }, 200) } else {
         var headerHeight = 95,
            destination = $thisTab.offset().top - headerHeight;
         $thisTab.addClass("is-active"), $otherTabs.removeClass("is-active"), $("html, body").animate({ scrollTop: destination }, 200) } })) }

function underline(el) {
   var $el = $(el),
      $activeTab = $el.siblings(".is-active");
   $el.css({ top: $activeTab.children("a").outerHeight() - $el.height(), width: $activeTab.width(), left: $activeTab.position().left }) }

function age(birth, now) {
   var one_day = parseFloat(864e5),
      birth_ms = parseFloat(birth.getTime()),
      now_ms = parseFloat(now.getTime()),
      difference_ms = parseFloat(now_ms - birth_ms),
      ageInDays = parseFloat(difference_ms / one_day),
      ageInYears = parseInt(Math.floor(ageInDays / 365.25));
   return ageInYears }! function(global, factory) { "object" == typeof module && "object" == typeof module.exports ? module.exports = global.document ? factory(global, !0) : function(w) {
      if (!w.document) throw new Error("jQuery requires a window with a document");
      return factory(w) } : factory(global) }("undefined" != typeof window ? window : this, function(window, noGlobal) {
   function isArrayLike(obj) {
      var length = !!obj && "length" in obj && obj.length,
         type = jQuery.type(obj);
      return "function" !== type && !jQuery.isWindow(obj) && ("array" === type || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj) }

   function winnow(elements, qualifier, not) {
      if (jQuery.isFunction(qualifier)) return jQuery.grep(elements, function(elem, i) {
         return !!qualifier.call(elem, i, elem) !== not });
      if (qualifier.nodeType) return jQuery.grep(elements, function(elem) {
         return elem === qualifier !== not });
      if ("string" == typeof qualifier) {
         if (risSimple.test(qualifier)) return jQuery.filter(qualifier, elements, not);
         qualifier = jQuery.filter(qualifier, elements) }
      return jQuery.grep(elements, function(elem) {
         return jQuery.inArray(elem, qualifier) > -1 !== not }) }

   function sibling(cur, dir) { do cur = cur[dir]; while (cur && 1 !== cur.nodeType);
      return cur }

   function createOptions(options) {
      var object = {};
      return jQuery.each(options.match(rnotwhite) || [], function(_, flag) { object[flag] = !0 }), object }

   function detach() { document.addEventListener ? (document.removeEventListener("DOMContentLoaded", completed), window.removeEventListener("load", completed)) : (document.detachEvent("onreadystatechange", completed), window.detachEvent("onload", completed)) }

   function completed() {
      (document.addEventListener || "load" === window.event.type || "complete" === document.readyState) && (detach(), jQuery.ready()) }

   function dataAttr(elem, key, data) {
      if (void 0 === data && 1 === elem.nodeType) {
         var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
         if (data = elem.getAttribute(name), "string" == typeof data) {
            try { data = "true" === data || "false" !== data && ("null" === data ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data) } catch (e) {}
            jQuery.data(elem, key, data) } else data = void 0 }
      return data }

   function isEmptyDataObject(obj) {
      var name;
      for (name in obj)
         if (("data" !== name || !jQuery.isEmptyObject(obj[name])) && "toJSON" !== name) return !1;
      return !0 }

   function internalData(elem, name, data, pvt) {
      if (acceptData(elem)) {
         var ret, thisCache, internalKey = jQuery.expando,
            isNode = elem.nodeType,
            cache = isNode ? jQuery.cache : elem,
            id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
         if (id && cache[id] && (pvt || cache[id].data) || void 0 !== data || "string" != typeof name) return id || (id = isNode ? elem[internalKey] = deletedIds.pop() || jQuery.guid++ : internalKey), cache[id] || (cache[id] = isNode ? {} : { toJSON: jQuery.noop }), "object" != typeof name && "function" != typeof name || (pvt ? cache[id] = jQuery.extend(cache[id], name) : cache[id].data = jQuery.extend(cache[id].data, name)), thisCache = cache[id], pvt || (thisCache.data || (thisCache.data = {}), thisCache = thisCache.data), void 0 !== data && (thisCache[jQuery.camelCase(name)] = data), "string" == typeof name ? (ret = thisCache[name], null == ret && (ret = thisCache[jQuery.camelCase(name)])) : ret = thisCache, ret } }

   function internalRemoveData(elem, name, pvt) {
      if (acceptData(elem)) {
         var thisCache, i, isNode = elem.nodeType,
            cache = isNode ? jQuery.cache : elem,
            id = isNode ? elem[jQuery.expando] : jQuery.expando;
         if (cache[id]) {
            if (name && (thisCache = pvt ? cache[id] : cache[id].data)) { jQuery.isArray(name) ? name = name.concat(jQuery.map(name, jQuery.camelCase)) : name in thisCache ? name = [name] : (name = jQuery.camelCase(name), name = name in thisCache ? [name] : name.split(" ")), i = name.length;
               for (; i--;) delete thisCache[name[i]];
               if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) return }(pvt || (delete cache[id].data, isEmptyDataObject(cache[id]))) && (isNode ? jQuery.cleanData([elem], !0) : support.deleteExpando || cache != cache.window ? delete cache[id] : cache[id] = void 0) } } }

   function adjustCSS(elem, prop, valueParts, tween) {
      var adjusted, scale = 1,
         maxIterations = 20,
         currentValue = tween ? function() {
            return tween.cur() } : function() {
            return jQuery.css(elem, prop, "") },
         initial = currentValue(),
         unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
         initialInUnit = (jQuery.cssNumber[prop] || "px" !== unit && +initial) && rcssNum.exec(jQuery.css(elem, prop));
      if (initialInUnit && initialInUnit[3] !== unit) { unit = unit || initialInUnit[3], valueParts = valueParts || [], initialInUnit = +initial || 1;
         do scale = scale || ".5", initialInUnit /= scale, jQuery.style(elem, prop, initialInUnit + unit); while (scale !== (scale = currentValue() / initial) && 1 !== scale && --maxIterations) }
      return valueParts && (initialInUnit = +initialInUnit || +initial || 0, adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2], tween && (tween.unit = unit, tween.start = initialInUnit, tween.end = adjusted)), adjusted }

   function createSafeFragment(document) {
      var list = nodeNames.split("|"),
         safeFrag = document.createDocumentFragment();
      if (safeFrag.createElement)
         for (; list.length;) safeFrag.createElement(list.pop());
      return safeFrag }

   function getAll(context, tag) {
      var elems, elem, i = 0,
         found = "undefined" != typeof context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : "undefined" != typeof context.querySelectorAll ? context.querySelectorAll(tag || "*") : void 0;
      if (!found)
         for (found = [], elems = context.childNodes || context; null != (elem = elems[i]); i++) !tag || jQuery.nodeName(elem, tag) ? found.push(elem) : jQuery.merge(found, getAll(elem, tag));
      return void 0 === tag || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found }

   function setGlobalEval(elems, refElements) {
      for (var elem, i = 0; null != (elem = elems[i]); i++) jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval")) }

   function fixDefaultChecked(elem) { rcheckableType.test(elem.type) && (elem.defaultChecked = elem.checked) }

   function buildFragment(elems, context, scripts, selection, ignored) {
      for (var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length, safe = createSafeFragment(context), nodes = [], i = 0; i < l; i++)
         if (elem = elems[i], elem || 0 === elem)
            if ("object" === jQuery.type(elem)) jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
            else if (rhtml.test(elem)) {
         for (tmp = tmp || safe.appendChild(context.createElement("div")), tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(), wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2], j = wrap[0]; j--;) tmp = tmp.lastChild;
         if (!support.leadingWhitespace && rleadingWhitespace.test(elem) && nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0])), !support.tbody)
            for (elem = "table" !== tag || rtbody.test(elem) ? "<table>" !== wrap[1] || rtbody.test(elem) ? 0 : tmp : tmp.firstChild, j = elem && elem.childNodes.length; j--;) jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length && elem.removeChild(tbody);
         for (jQuery.merge(nodes, tmp.childNodes), tmp.textContent = ""; tmp.firstChild;) tmp.removeChild(tmp.firstChild);
         tmp = safe.lastChild } else nodes.push(context.createTextNode(elem));
      for (tmp && safe.removeChild(tmp), support.appendChecked || jQuery.grep(getAll(nodes, "input"), fixDefaultChecked), i = 0; elem = nodes[i++];)
         if (selection && jQuery.inArray(elem, selection) > -1) ignored && ignored.push(elem);
         else if (contains = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(safe.appendChild(elem), "script"), contains && setGlobalEval(tmp), scripts)
         for (j = 0; elem = tmp[j++];) rscriptType.test(elem.type || "") && scripts.push(elem);
      return tmp = null, safe }

   function returnTrue() {
      return !0 }

   function returnFalse() {
      return !1 }

   function safeActiveElement() {
      try {
         return document.activeElement } catch (err) {} }

   function on(elem, types, selector, data, fn, one) {
      var origFn, type;
      if ("object" == typeof types) { "string" != typeof selector && (data = data || selector, selector = void 0);
         for (type in types) on(elem, type, selector, data, types[type], one);
         return elem }
      if (null == data && null == fn ? (fn = selector, data = selector = void 0) : null == fn && ("string" == typeof selector ? (fn = data, data = void 0) : (fn = data, data = selector, selector = void 0)), fn === !1) fn = returnFalse;
      else if (!fn) return elem;
      return 1 === one && (origFn = fn, fn = function(event) {
         return jQuery().off(event), origFn.apply(this, arguments) }, fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)), elem.each(function() { jQuery.event.add(this, types, fn, data, selector) }) }

   function manipulationTarget(elem, content) {
      return jQuery.nodeName(elem, "table") && jQuery.nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem }

   function disableScript(elem) {
      return elem.type = (null !== jQuery.find.attr(elem, "type")) + "/" + elem.type, elem }

   function restoreScript(elem) {
      var match = rscriptTypeMasked.exec(elem.type);
      return match ? elem.type = match[1] : elem.removeAttribute("type"), elem }

   function cloneCopyEvent(src, dest) {
      if (1 === dest.nodeType && jQuery.hasData(src)) {
         var type, i, l, oldData = jQuery._data(src),
            curData = jQuery._data(dest, oldData),
            events = oldData.events;
         if (events) { delete curData.handle, curData.events = {};
            for (type in events)
               for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i]) }
         curData.data && (curData.data = jQuery.extend({}, curData.data)) } }

   function fixCloneNodeIssues(src, dest) {
      var nodeName, e, data;
      if (1 === dest.nodeType) {
         if (nodeName = dest.nodeName.toLowerCase(), !support.noCloneEvent && dest[jQuery.expando]) { data = jQuery._data(dest);
            for (e in data.events) jQuery.removeEvent(dest, e, data.handle);
            dest.removeAttribute(jQuery.expando) } "script" === nodeName && dest.text !== src.text ? (disableScript(dest).text = src.text, restoreScript(dest)) : "object" === nodeName ? (dest.parentNode && (dest.outerHTML = src.outerHTML), support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML) && (dest.innerHTML = src.innerHTML)) : "input" === nodeName && rcheckableType.test(src.type) ? (dest.defaultChecked = dest.checked = src.checked, dest.value !== src.value && (dest.value = src.value)) : "option" === nodeName ? dest.defaultSelected = dest.selected = src.defaultSelected : "input" !== nodeName && "textarea" !== nodeName || (dest.defaultValue = src.defaultValue) } }

   function domManip(collection, args, callback, ignored) { args = concat.apply([], args);
      var first, node, hasScripts, scripts, doc, fragment, i = 0,
         l = collection.length,
         iNoClone = l - 1,
         value = args[0],
         isFunction = jQuery.isFunction(value);
      if (isFunction || l > 1 && "string" == typeof value && !support.checkClone && rchecked.test(value)) return collection.each(function(index) {
         var self = collection.eq(index);
         isFunction && (args[0] = value.call(this, index, self.html())), domManip(self, args, callback, ignored) });
      if (l && (fragment = buildFragment(args, collection[0].ownerDocument, !1, collection, ignored), first = fragment.firstChild, 1 === fragment.childNodes.length && (fragment = first), first || ignored)) {
         for (scripts = jQuery.map(getAll(fragment, "script"), disableScript), hasScripts = scripts.length; i < l; i++) node = fragment, i !== iNoClone && (node = jQuery.clone(node, !0, !0), hasScripts && jQuery.merge(scripts, getAll(node, "script"))), callback.call(collection[i], node, i);
         if (hasScripts)
            for (doc = scripts[scripts.length - 1].ownerDocument, jQuery.map(scripts, restoreScript), i = 0; i < hasScripts; i++) node = scripts[i], rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node) && (node.src ? jQuery._evalUrl && jQuery._evalUrl(node.src) : jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, "")));
         fragment = first = null }
      return collection }

   function remove(elem, selector, keepData) {
      for (var node, elems = selector ? jQuery.filter(selector, elem) : elem, i = 0; null != (node = elems[i]); i++) keepData || 1 !== node.nodeType || jQuery.cleanData(getAll(node)), node.parentNode && (keepData && jQuery.contains(node.ownerDocument, node) && setGlobalEval(getAll(node, "script")), node.parentNode.removeChild(node));
      return elem }

   function actualDisplay(name, doc) {
      var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
         display = jQuery.css(elem[0], "display");
      return elem.detach(), display }

   function defaultDisplay(nodeName) {
      var doc = document,
         display = elemdisplay[nodeName];
      return display || (display = actualDisplay(nodeName, doc), "none" !== display && display || (iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement), doc = (iframe[0].contentWindow || iframe[0].contentDocument).document, doc.write(), doc.close(), display = actualDisplay(nodeName, doc), iframe.detach()), elemdisplay[nodeName] = display), display }

   function addGetHookIf(conditionFn, hookFn) {
      return { get: function() {
            return conditionFn() ? void delete this.get : (this.get = hookFn).apply(this, arguments) } } }

   function vendorPropName(name) {
      if (name in emptyStyle) return name;
      for (var capName = name.charAt(0).toUpperCase() + name.slice(1), i = cssPrefixes.length; i--;)
         if (name = cssPrefixes[i] + capName, name in emptyStyle) return name }

   function showHide(elements, show) {
      for (var display, elem, hidden, values = [], index = 0, length = elements.length; index < length; index++) elem = elements[index], elem.style && (values[index] = jQuery._data(elem, "olddisplay"), display = elem.style.display, show ? (values[index] || "none" !== display || (elem.style.display = ""), "" === elem.style.display && isHidden(elem) && (values[index] = jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName)))) : (hidden = isHidden(elem), (display && "none" !== display || !hidden) && jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"))));
      for (index = 0; index < length; index++) elem = elements[index], elem.style && (show && "none" !== elem.style.display && "" !== elem.style.display || (elem.style.display = show ? values[index] || "" : "none"));
      return elements }

   function setPositiveNumber(elem, value, subtract) {
      var matches = rnumsplit.exec(value);
      return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value }

   function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
      for (var i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === name ? 1 : 0, val = 0; i < 4; i += 2) "margin" === extra && (val += jQuery.css(elem, extra + cssExpand[i], !0, styles)), isBorderBox ? ("content" === extra && (val -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)), "margin" !== extra && (val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles))) : (val += jQuery.css(elem, "padding" + cssExpand[i], !0, styles), "padding" !== extra && (val += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)));
      return val }

   function getWidthOrHeight(elem, name, extra) {
      var valueIsBorderBox = !0,
         val = "width" === name ? elem.offsetWidth : elem.offsetHeight,
         styles = getStyles(elem),
         isBorderBox = support.boxSizing && "border-box" === jQuery.css(elem, "boxSizing", !1, styles);
      if (document.msFullscreenElement && window.top !== window && elem.getClientRects().length && (val = Math.round(100 * elem.getBoundingClientRect()[name])), val <= 0 || null == val) {
         if (val = curCSS(elem, name, styles), (val < 0 || null == val) && (val = elem.style[name]), rnumnonpx.test(val)) return val;
         valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]), val = parseFloat(val) || 0 }
      return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px" }

   function Tween(elem, options, prop, end, easing) {
      return new Tween.prototype.init(elem, options, prop, end, easing) }

   function createFxNow() {
      return window.setTimeout(function() { fxNow = void 0 }), fxNow = jQuery.now() }

   function genFx(type, includeWidth) {
      var which, attrs = { height: type },
         i = 0;
      for (includeWidth = includeWidth ? 1 : 0; i < 4; i += 2 - includeWidth) which = cssExpand[i], attrs["margin" + which] = attrs["padding" + which] = type;
      return includeWidth && (attrs.opacity = attrs.width = type), attrs }

   function createTween(value, prop, animation) {
      for (var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length; index < length; index++)
         if (tween = collection[index].call(animation, prop, value)) return tween }

   function defaultPrefilter(elem, props, opts) {
      var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this,
         orig = {},
         style = elem.style,
         hidden = elem.nodeType && isHidden(elem),
         dataShow = jQuery._data(elem, "fxshow");
      opts.queue || (hooks = jQuery._queueHooks(elem, "fx"), null == hooks.unqueued && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function() { hooks.unqueued || oldfire() }), hooks.unqueued++, anim.always(function() { anim.always(function() { hooks.unqueued--, jQuery.queue(elem, "fx").length || hooks.empty.fire() }) })), 1 === elem.nodeType && ("height" in props || "width" in props) && (opts.overflow = [style.overflow, style.overflowX, style.overflowY], display = jQuery.css(elem, "display"), checkDisplay = "none" === display ? jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display, "inline" === checkDisplay && "none" === jQuery.css(elem, "float") && (support.inlineBlockNeedsLayout && "inline" !== defaultDisplay(elem.nodeName) ? style.zoom = 1 : style.display = "inline-block")), opts.overflow && (style.overflow = "hidden", support.shrinkWrapBlocks() || anim.always(function() { style.overflow = opts.overflow[0], style.overflowX = opts.overflow[1], style.overflowY = opts.overflow[2] }));
      for (prop in props)
         if (value = props[prop], rfxtypes.exec(value)) {
            if (delete props[prop], toggle = toggle || "toggle" === value, value === (hidden ? "hide" : "show")) {
               if ("show" !== value || !dataShow || void 0 === dataShow[prop]) continue;
               hidden = !0 }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop) } else display = void 0;
      if (jQuery.isEmptyObject(orig)) "inline" === ("none" === display ? defaultDisplay(elem.nodeName) : display) && (style.display = display);
      else { dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : dataShow = jQuery._data(elem, "fxshow", {}), toggle && (dataShow.hidden = !hidden), hidden ? jQuery(elem).show() : anim.done(function() { jQuery(elem).hide() }), anim.done(function() {
            var prop;
            jQuery._removeData(elem, "fxshow");
            for (prop in orig) jQuery.style(elem, prop, orig[prop]) });
         for (prop in orig) tween = createTween(hidden ? dataShow[prop] : 0, prop, anim), prop in dataShow || (dataShow[prop] = tween.start, hidden && (tween.end = tween.start, tween.start = "width" === prop || "height" === prop ? 1 : 0)) } }

   function propFilter(props, specialEasing) {
      var index, name, easing, value, hooks;
      for (index in props)
         if (name = jQuery.camelCase(index), easing = specialEasing[name], value = props[index], jQuery.isArray(value) && (easing = value[1], value = props[index] = value[0]), index !== name && (props[name] = value, delete props[index]), hooks = jQuery.cssHooks[name], hooks && "expand" in hooks) { value = hooks.expand(value), delete props[name];
            for (index in value) index in props || (props[index] = value[index], specialEasing[index] = easing) } else specialEasing[name] = easing }

   function Animation(elem, properties, options) {
      var result, stopped, index = 0,
         length = Animation.prefilters.length,
         deferred = jQuery.Deferred().always(function() { delete tick.elem }),
         tick = function() {
            if (stopped) return !1;
            for (var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length; index < length; index++) animation.tweens[index].run(percent);
            return deferred.notifyWith(elem, [animation, percent, remaining]), percent < 1 && length ? remaining : (deferred.resolveWith(elem, [animation]), !1) },
         animation = deferred.promise({ elem: elem, props: jQuery.extend({}, properties), opts: jQuery.extend(!0, { specialEasing: {}, easing: jQuery.easing._default }, options), originalProperties: properties, originalOptions: options, startTime: fxNow || createFxNow(), duration: options.duration, tweens: [], createTween: function(prop, end) {
               var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
               return animation.tweens.push(tween), tween }, stop: function(gotoEnd) {
               var index = 0,
                  length = gotoEnd ? animation.tweens.length : 0;
               if (stopped) return this;
               for (stopped = !0; index < length; index++) animation.tweens[index].run(1);
               return gotoEnd ? (deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation, gotoEnd])) : deferred.rejectWith(elem, [animation, gotoEnd]), this } }),
         props = animation.props;
      for (propFilter(props, animation.opts.specialEasing); index < length; index++)
         if (result = Animation.prefilters[index].call(animation, elem, props, animation.opts)) return jQuery.isFunction(result.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result)), result;
      return jQuery.map(props, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), jQuery.fx.timer(jQuery.extend(tick, { elem: elem, anim: animation, queue: animation.opts.queue })), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always) }

   function getClass(elem) {
      return jQuery.attr(elem, "class") || "" }

   function addToPrefiltersOrTransports(structure) {
      return function(dataTypeExpression, func) { "string" != typeof dataTypeExpression && (func = dataTypeExpression, dataTypeExpression = "*");
         var dataType, i = 0,
            dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
         if (jQuery.isFunction(func))
            for (; dataType = dataTypes[i++];) "+" === dataType.charAt(0) ? (dataType = dataType.slice(1) || "*", (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func) } }

   function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
      function inspect(dataType) {
         var selected;
         return inspected[dataType] = !0, jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), !1) }), selected }
      var inspected = {},
         seekingTransport = structure === transports;
      return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*") }

   function ajaxExtend(target, src) {
      var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
      for (key in src) void 0 !== src[key] && ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]);
      return deep && jQuery.extend(!0, target, deep), target }

   function ajaxHandleResponses(s, jqXHR, responses) {
      for (var firstDataType, ct, finalDataType, type, contents = s.contents, dataTypes = s.dataTypes;
         "*" === dataTypes[0];) dataTypes.shift(), void 0 === ct && (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
      if (ct)
         for (type in contents)
            if (contents[type] && contents[type].test(ct)) { dataTypes.unshift(type);
               break }
      if (dataTypes[0] in responses) finalDataType = dataTypes[0];
      else {
         for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) { finalDataType = type;
               break }
            firstDataType || (firstDataType = type) }
         finalDataType = finalDataType || firstDataType }
      if (finalDataType) return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType] }

   function ajaxConvert(s, response, jqXHR, isSuccess) {
      var conv2, current, conv, tmp, prev, converters = {},
         dataTypes = s.dataTypes.slice();
      if (dataTypes[1])
         for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
      for (current = dataTypes.shift(); current;)
         if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), prev = current, current = dataTypes.shift())
            if ("*" === current) current = prev;
            else if ("*" !== prev && prev !== current) {
         if (conv = converters[prev + " " + current] || converters["* " + current], !conv)
            for (conv2 in converters)
               if (tmp = conv2.split(" "), tmp[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) { conv === !0 ? conv = converters[conv2] : converters[conv2] !== !0 && (current = tmp[0], dataTypes.unshift(tmp[1]));
                  break }
         if (conv !== !0)
            if (conv && s.throws) response = conv(response);
            else try { response = conv(response) } catch (e) {
               return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current } } }
      return { state: "success", data: response } }

   function getDisplay(elem) {
      return elem.style && elem.style.display || jQuery.css(elem, "display") }

   function filterHidden(elem) {
      for (; elem && 1 === elem.nodeType;) {
         if ("none" === getDisplay(elem) || "hidden" === elem.type) return !0;
         elem = elem.parentNode }
      return !1 }

   function buildParams(prefix, obj, traditional, add) {
      var name;
      if (jQuery.isArray(obj)) jQuery.each(obj, function(i, v) { traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + "[" + ("object" == typeof v && null != v ? i : "") + "]", v, traditional, add) });
      else if (traditional || "object" !== jQuery.type(obj)) add(prefix, obj);
      else
         for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add) }

   function createStandardXHR() {
      try {
         return new window.XMLHttpRequest } catch (e) {} }

   function createActiveXHR() {
      try {
         return new window.ActiveXObject("Microsoft.XMLHTTP") } catch (e) {} }

   function getWindow(elem) {
      return jQuery.isWindow(elem) ? elem : 9 === elem.nodeType && (elem.defaultView || elem.parentWindow) }
   var deletedIds = [],
      document = window.document,
      slice = deletedIds.slice,
      concat = deletedIds.concat,
      push = deletedIds.push,
      indexOf = deletedIds.indexOf,
      class2type = {},
      toString = class2type.toString,
      hasOwn = class2type.hasOwnProperty,
      support = {},
      version = "1.12.3",
      jQuery = function(selector, context) {
         return new jQuery.fn.init(selector, context) },
      rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      rmsPrefix = /^-ms-/,
      rdashAlpha = /-([\da-z])/gi,
      fcamelCase = function(all, letter) {
         return letter.toUpperCase() };
   jQuery.fn = jQuery.prototype = { jquery: version, constructor: jQuery, selector: "", length: 0, toArray: function() {
         return slice.call(this) }, get: function(num) {
         return null != num ? num < 0 ? this[num + this.length] : this[num] : slice.call(this) }, pushStack: function(elems) {
         var ret = jQuery.merge(this.constructor(), elems);
         return ret.prevObject = this, ret.context = this.context, ret }, each: function(callback) {
         return jQuery.each(this, callback) }, map: function(callback) {
         return this.pushStack(jQuery.map(this, function(elem, i) {
            return callback.call(elem, i, elem) })) }, slice: function() {
         return this.pushStack(slice.apply(this, arguments)) }, first: function() {
         return this.eq(0) }, last: function() {
         return this.eq(-1) }, eq: function(i) {
         var len = this.length,
            j = +i + (i < 0 ? len : 0);
         return this.pushStack(j >= 0 && j < len ? [this[j]] : []) }, end: function() {
         return this.prevObject || this.constructor() }, push: push, sort: deletedIds.sort, splice: deletedIds.splice }, jQuery.extend = jQuery.fn.extend = function() {
      var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {},
         i = 1,
         length = arguments.length,
         deep = !1;
      for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, i++), "object" == typeof target || jQuery.isFunction(target) || (target = {}), i === length && (target = this, i--); i < length; i++)
         if (null != (options = arguments[i]))
            for (name in options) src = target[name], copy = options[name], target !== copy && (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, clone = src && jQuery.isArray(src) ? src : []) : clone = src && jQuery.isPlainObject(src) ? src : {}, target[name] = jQuery.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
      return target }, jQuery.extend({
      expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(msg) {
         throw new Error(msg) },
      noop: function() {},
      isFunction: function(obj) {
         return "function" === jQuery.type(obj) },
      isArray: Array.isArray || function(obj) {
         return "array" === jQuery.type(obj) },
      isWindow: function(obj) {
         return null != obj && obj == obj.window },
      isNumeric: function(obj) {
         var realStringObj = obj && obj.toString();
         return !jQuery.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0 },
      isEmptyObject: function(obj) {
         var name;
         for (name in obj) return !1;
         return !0 },
      isPlainObject: function(obj) {
         var key;
         if (!obj || "object" !== jQuery.type(obj) || obj.nodeType || jQuery.isWindow(obj)) return !1;
         try {
            if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) return !1 } catch (e) {
            return !1 }
         if (!support.ownFirst)
            for (key in obj) return hasOwn.call(obj, key);
         for (key in obj);
         return void 0 === key || hasOwn.call(obj, key) },
      type: function(obj) {
         return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj },
      globalEval: function(data) { data && jQuery.trim(data) && (window.execScript || function(data) { window.eval.call(window, data) })(data) },
      camelCase: function(string) {
         return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase) },
      nodeName: function(elem, name) {
         return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase() },
      each: function(obj, callback) {
         var length, i = 0;
         if (isArrayLike(obj))
            for (length = obj.length; i < length && callback.call(obj[i], i, obj[i]) !== !1; i++);
         else
            for (i in obj)
               if (callback.call(obj[i], i, obj[i]) === !1) break;
         return obj
      },
      trim: function(text) {
         return null == text ? "" : (text + "").replace(rtrim, "") },
      makeArray: function(arr, results) {
         var ret = results || [];
         return null != arr && (isArrayLike(Object(arr)) ? jQuery.merge(ret, "string" == typeof arr ? [arr] : arr) : push.call(ret, arr)), ret },
      inArray: function(elem, arr, i) {
         var len;
         if (arr) {
            if (indexOf) return indexOf.call(arr, elem, i);
            for (len = arr.length, i = i ? i < 0 ? Math.max(0, len + i) : i : 0; i < len; i++)
               if (i in arr && arr[i] === elem) return i }
         return -1 },
      merge: function(first, second) {
         for (var len = +second.length, j = 0, i = first.length; j < len;) first[i++] = second[j++];
         if (len !== len)
            for (; void 0 !== second[j];) first[i++] = second[j++];
         return first.length = i, first },
      grep: function(elems, callback, invert) {
         for (var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert; i < length; i++) callbackInverse = !callback(elems[i], i), callbackInverse !== callbackExpect && matches.push(elems[i]);
         return matches },
      map: function(elems, callback, arg) {
         var length, value, i = 0,
            ret = [];
         if (isArrayLike(elems))
            for (length = elems.length; i < length; i++) value = callback(elems[i], i, arg), null != value && ret.push(value);
         else
            for (i in elems) value = callback(elems[i], i, arg), null != value && ret.push(value);
         return concat.apply([], ret) },
      guid: 1,
      proxy: function(fn, context) {
         var args, proxy, tmp;
         if ("string" == typeof context && (tmp = fn[context], context = fn, fn = tmp), jQuery.isFunction(fn)) return args = slice.call(arguments, 2), proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments))) }, proxy.guid = fn.guid = fn.guid || jQuery.guid++, proxy },
      now: function() {
         return +new Date },
      support: support
   }), "function" == typeof Symbol && (jQuery.fn[Symbol.iterator] = deletedIds[Symbol.iterator]), jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) { class2type["[object " + name + "]"] = name.toLowerCase() });
   var Sizzle = function(window) {
      function Sizzle(selector, context, results, seed) {
         var m, i, elem, nid, nidselect, match, groups, newSelector, newContext = context && context.ownerDocument,
            nodeType = context ? context.nodeType : 9;
         if (results = results || [], "string" != typeof selector || !selector || 1 !== nodeType && 9 !== nodeType && 11 !== nodeType) return results;
         if (!seed && ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), context = context || document, documentIsHTML)) {
            if (11 !== nodeType && (match = rquickExpr.exec(selector)))
               if (m = match[1]) {
                  if (9 === nodeType) {
                     if (!(elem = context.getElementById(m))) return results;
                     if (elem.id === m) return results.push(elem), results } else if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) return results.push(elem), results } else {
                  if (match[2]) return push.apply(results, context.getElementsByTagName(selector)), results;
                  if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) return push.apply(results, context.getElementsByClassName(m)), results }
            if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
               if (1 !== nodeType) newContext = context, newSelector = selector;
               else if ("object" !== context.nodeName.toLowerCase()) {
                  for ((nid = context.getAttribute("id")) ? nid = nid.replace(rescape, "\\$&") : context.setAttribute("id", nid = expando), groups = tokenize(selector), i = groups.length, nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']"; i--;) groups[i] = nidselect + " " + toSelector(groups[i]);
                  newSelector = groups.join(","), newContext = rsibling.test(selector) && testContext(context.parentNode) || context }
               if (newSelector) try {
                  return push.apply(results, newContext.querySelectorAll(newSelector)), results } catch (qsaError) {} finally { nid === expando && context.removeAttribute("id") } } }
         return select(selector.replace(rtrim, "$1"), context, results, seed) }

      function createCache() {
         function cache(key, value) {
            return keys.push(key + " ") > Expr.cacheLength && delete cache[keys.shift()], cache[key + " "] = value }
         var keys = [];
         return cache }

      function markFunction(fn) {
         return fn[expando] = !0, fn }

      function assert(fn) {
         var div = document.createElement("div");
         try {
            return !!fn(div) } catch (e) {
            return !1 } finally { div.parentNode && div.parentNode.removeChild(div), div = null } }

      function addHandle(attrs, handler) {
         for (var arr = attrs.split("|"), i = arr.length; i--;) Expr.attrHandle[arr[i]] = handler }

      function siblingCheck(a, b) {
         var cur = b && a,
            diff = cur && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
         if (diff) return diff;
         if (cur)
            for (; cur = cur.nextSibling;)
               if (cur === b) return -1;
         return a ? 1 : -1 }

      function createInputPseudo(type) {
         return function(elem) {
            var name = elem.nodeName.toLowerCase();
            return "input" === name && elem.type === type } }

      function createButtonPseudo(type) {
         return function(elem) {
            var name = elem.nodeName.toLowerCase();
            return ("input" === name || "button" === name) && elem.type === type } }

      function createPositionalPseudo(fn) {
         return markFunction(function(argument) {
            return argument = +argument, markFunction(function(seed, matches) {
               for (var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length; i--;) seed[j = matchIndexes[i]] && (seed[j] = !(matches[j] = seed[j])) }) }) }

      function testContext(context) {
         return context && "undefined" != typeof context.getElementsByTagName && context }

      function setFilters() {}

      function toSelector(tokens) {
         for (var i = 0, len = tokens.length, selector = ""; i < len; i++) selector += tokens[i].value;
         return selector }

      function addCombinator(matcher, combinator, base) {
         var dir = combinator.dir,
            checkNonElements = base && "parentNode" === dir,
            doneName = done++;
         return combinator.first ? function(elem, context, xml) {
            for (; elem = elem[dir];)
               if (1 === elem.nodeType || checkNonElements) return matcher(elem, context, xml) } : function(elem, context, xml) {
            var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
            if (xml) {
               for (; elem = elem[dir];)
                  if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) return !0 } else
               for (; elem = elem[dir];)
                  if (1 === elem.nodeType || checkNonElements) {
                     if (outerCache = elem[expando] || (elem[expando] = {}), uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {}), (oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2];
                     if (uniqueCache[dir] = newCache, newCache[2] = matcher(elem, context, xml)) return !0 } } }

      function elementMatcher(matchers) {
         return matchers.length > 1 ? function(elem, context, xml) {
            for (var i = matchers.length; i--;)
               if (!matchers[i](elem, context, xml)) return !1;
            return !0 } : matchers[0] }

      function multipleContexts(selector, contexts, results) {
         for (var i = 0, len = contexts.length; i < len; i++) Sizzle(selector, contexts[i], results);
         return results }

      function condense(unmatched, map, filter, context, xml) {
         for (var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map; i < len; i++)(elem = unmatched[i]) && (filter && !filter(elem, context, xml) || (newUnmatched.push(elem), mapped && map.push(i)));
         return newUnmatched }

      function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
         return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), markFunction(function(seed, results, context, xml) {
            var temp, i, elem, preMap = [],
               postMap = [],
               preexisting = results.length,
               elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
               matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml),
               matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
            if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter)
               for (temp = condense(matcherOut, postMap), postFilter(temp, [], context, xml), i = temp.length; i--;)(elem = temp[i]) && (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem));
            if (seed) {
               if (postFinder || preFilter) {
                  if (postFinder) {
                     for (temp = [], i = matcherOut.length; i--;)(elem = matcherOut[i]) && temp.push(matcherIn[i] = elem);
                     postFinder(null, matcherOut = [], temp, xml) }
                  for (i = matcherOut.length; i--;)(elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1 && (seed[temp] = !(results[temp] = elem)) } } else matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut), postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut) }) }

      function matcherFromTokens(tokens) {
         for (var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
               return elem === checkContext }, implicitRelative, !0), matchAnyContext = addCombinator(function(elem) {
               return indexOf(checkContext, elem) > -1 }, implicitRelative, !0), matchers = [function(elem, context, xml) {
               var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
               return checkContext = null, ret }]; i < len; i++)
            if (matcher = Expr.relative[tokens[i].type]) matchers = [addCombinator(elementMatcher(matchers), matcher)];
            else {
               if (matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches), matcher[expando]) {
                  for (j = ++i; j < len && !Expr.relative[tokens[j].type]; j++);
                  return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({ value: " " === tokens[i - 2].type ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens)) }
               matchers.push(matcher) }
         return elementMatcher(matchers) }

      function matcherFromGroupMatchers(elementMatchers, setMatchers) {
         var bySet = setMatchers.length > 0,
            byElement = elementMatchers.length > 0,
            superMatcher = function(seed, context, xml, results, outermost) {
               var elem, j, matcher, matchedCount = 0,
                  i = "0",
                  unmatched = seed && [],
                  setMatched = [],
                  contextBackup = outermostContext,
                  elems = seed || byElement && Expr.find.TAG("*", outermost),
                  dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1,
                  len = elems.length;
               for (outermost && (outermostContext = context === document || context || outermost); i !== len && null != (elem = elems[i]); i++) {
                  if (byElement && elem) {
                     for (j = 0, context || elem.ownerDocument === document || (setDocument(elem), xml = !documentIsHTML); matcher = elementMatchers[j++];)
                        if (matcher(elem, context || document, xml)) { results.push(elem);
                           break }
                     outermost && (dirruns = dirrunsUnique) }
                  bySet && ((elem = !matcher && elem) && matchedCount--, seed && unmatched.push(elem)) }
               if (matchedCount += i, bySet && i !== matchedCount) {
                  for (j = 0; matcher = setMatchers[j++];) matcher(unmatched, setMatched, context, xml);
                  if (seed) {
                     if (matchedCount > 0)
                        for (; i--;) unmatched[i] || setMatched[i] || (setMatched[i] = pop.call(results));
                     setMatched = condense(setMatched) }
                  push.apply(results, setMatched), outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1 && Sizzle.uniqueSort(results) }
               return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched };
         return bySet ? markFunction(superMatcher) : superMatcher }
      var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date,
         preferredDoc = window.document,
         dirruns = 0,
         done = 0,
         classCache = createCache(),
         tokenCache = createCache(),
         compilerCache = createCache(),
         sortOrder = function(a, b) {
            return a === b && (hasDuplicate = !0), 0 },
         MAX_NEGATIVE = 1 << 31,
         hasOwn = {}.hasOwnProperty,
         arr = [],
         pop = arr.pop,
         push_native = arr.push,
         push = arr.push,
         slice = arr.slice,
         indexOf = function(list, elem) {
            for (var i = 0, len = list.length; i < len; i++)
               if (list[i] === elem) return i;
            return -1 },
         booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
         whitespace = "[\\x20\\t\\r\\n\\f]",
         identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
         attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
         pseudos = ":(" + identifier + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)",
         rwhitespace = new RegExp(whitespace + "+", "g"),
         rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
         rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
         rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
         rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
         rpseudo = new RegExp(pseudos),
         ridentifier = new RegExp("^" + identifier + "$"),
         matchExpr = { ID: new RegExp("^#(" + identifier + ")"), CLASS: new RegExp("^\\.(" + identifier + ")"), TAG: new RegExp("^(" + identifier + "|[*])"), ATTR: new RegExp("^" + attributes), PSEUDO: new RegExp("^" + pseudos), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"), bool: new RegExp("^(?:" + booleans + ")$", "i"), needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i") },
         rinputs = /^(?:input|select|textarea|button)$/i,
         rheader = /^h\d$/i,
         rnative = /^[^{]+\{\s*\[native \w/,
         rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
         rsibling = /[+~]/,
         rescape = /'|\\/g,
         runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
         funescape = function(_, escaped, escapedWhitespace) {
            var high = "0x" + escaped - 65536;
            return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320) },
         unloadHandler = function() { setDocument() };
      try { push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes), arr[preferredDoc.childNodes.length].nodeType } catch (e) { push = { apply: arr.length ? function(target, els) { push_native.apply(target, slice.call(els)) } : function(target, els) {
               for (var j = target.length, i = 0; target[j++] = els[i++];);
               target.length = j - 1 } } }
      support = Sizzle.support = {}, isXML = Sizzle.isXML = function(elem) {
         var documentElement = elem && (elem.ownerDocument || elem).documentElement;
         return !!documentElement && "HTML" !== documentElement.nodeName }, setDocument = Sizzle.setDocument = function(node) {
         var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
         return doc !== document && 9 === doc.nodeType && doc.documentElement ? (document = doc, docElem = document.documentElement, documentIsHTML = !isXML(document), (parent = document.defaultView) && parent.top !== parent && (parent.addEventListener ? parent.addEventListener("unload", unloadHandler, !1) : parent.attachEvent && parent.attachEvent("onunload", unloadHandler)), support.attributes = assert(function(div) {
            return div.className = "i", !div.getAttribute("className") }), support.getElementsByTagName = assert(function(div) {
            return div.appendChild(document.createComment("")), !div.getElementsByTagName("*").length }), support.getElementsByClassName = rnative.test(document.getElementsByClassName), support.getById = assert(function(div) {
            return docElem.appendChild(div).id = expando, !document.getElementsByName || !document.getElementsByName(expando).length }), support.getById ? (Expr.find.ID = function(id, context) {
            if ("undefined" != typeof context.getElementById && documentIsHTML) {
               var m = context.getElementById(id);
               return m ? [m] : [] } }, Expr.filter.ID = function(id) {
            var attrId = id.replace(runescape, funescape);
            return function(elem) {
               return elem.getAttribute("id") === attrId } }) : (delete Expr.find.ID, Expr.filter.ID = function(id) {
            var attrId = id.replace(runescape, funescape);
            return function(elem) {
               var node = "undefined" != typeof elem.getAttributeNode && elem.getAttributeNode("id");
               return node && node.value === attrId } }), Expr.find.TAG = support.getElementsByTagName ? function(tag, context) {
            return "undefined" != typeof context.getElementsByTagName ? context.getElementsByTagName(tag) : support.qsa ? context.querySelectorAll(tag) : void 0 } : function(tag, context) {
            var elem, tmp = [],
               i = 0,
               results = context.getElementsByTagName(tag);
            if ("*" === tag) {
               for (; elem = results[i++];) 1 === elem.nodeType && tmp.push(elem);
               return tmp }
            return results }, Expr.find.CLASS = support.getElementsByClassName && function(className, context) {
            if ("undefined" != typeof context.getElementsByClassName && documentIsHTML) return context.getElementsByClassName(className) }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(document.querySelectorAll)) && (assert(function(div) { docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>", div.querySelectorAll("[msallowcapture^='']").length && rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"), div.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"), div.querySelectorAll("[id~=" + expando + "-]").length || rbuggyQSA.push("~="), div.querySelectorAll(":checked").length || rbuggyQSA.push(":checked"), div.querySelectorAll("a#" + expando + "+*").length || rbuggyQSA.push(".#.+[+~]") }), assert(function(div) {
            var input = document.createElement("input");
            input.setAttribute("type", "hidden"), div.appendChild(input).setAttribute("name", "D"), div.querySelectorAll("[name=d]").length && rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="), div.querySelectorAll(":enabled").length || rbuggyQSA.push(":enabled", ":disabled"), div.querySelectorAll("*,:x"), rbuggyQSA.push(",.*:") })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(div) { support.disconnectedMatch = matches.call(div, "div"), matches.call(div, "[s!='']:x"), rbuggyMatches.push("!=", pseudos) }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), hasCompare = rnative.test(docElem.compareDocumentPosition), contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
            var adown = 9 === a.nodeType ? a.documentElement : a,
               bup = b && b.parentNode;
            return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup))) } : function(a, b) {
            if (b)
               for (; b = b.parentNode;)
                  if (b === a) return !0;
            return !1 }, sortOrder = hasCompare ? function(a, b) {
            if (a === b) return hasDuplicate = !0, 0;
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            return compare ? compare : (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1) } : function(a, b) {
            if (a === b) return hasDuplicate = !0, 0;
            var cur, i = 0,
               aup = a.parentNode,
               bup = b.parentNode,
               ap = [a],
               bp = [b];
            if (!aup || !bup) return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
            if (aup === bup) return siblingCheck(a, b);
            for (cur = a; cur = cur.parentNode;) ap.unshift(cur);
            for (cur = b; cur = cur.parentNode;) bp.unshift(cur);
            for (; ap[i] === bp[i];) i++;
            return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0 }, document) : document }, Sizzle.matches = function(expr, elements) {
         return Sizzle(expr, null, null, elements) }, Sizzle.matchesSelector = function(elem, expr) {
         if ((elem.ownerDocument || elem) !== document && setDocument(elem), expr = expr.replace(rattributeQuotes, "='$1']"), support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
            var ret = matches.call(elem, expr);
            if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) return ret } catch (e) {}
         return Sizzle(expr, document, null, [elem]).length > 0 }, Sizzle.contains = function(context, elem) {
         return (context.ownerDocument || context) !== document && setDocument(context), contains(context, elem) }, Sizzle.attr = function(elem, name) {
         (elem.ownerDocument || elem) !== document && setDocument(elem);
         var fn = Expr.attrHandle[name.toLowerCase()],
            val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
         return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null }, Sizzle.error = function(msg) {
         throw new Error("Syntax error, unrecognized expression: " + msg) }, Sizzle.uniqueSort = function(results) {
         var elem, duplicates = [],
            j = 0,
            i = 0;
         if (hasDuplicate = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), results.sort(sortOrder), hasDuplicate) {
            for (; elem = results[i++];) elem === results[i] && (j = duplicates.push(i));
            for (; j--;) results.splice(duplicates[j], 1) }
         return sortInput = null, results }, getText = Sizzle.getText = function(elem) {
         var node, ret = "",
            i = 0,
            nodeType = elem.nodeType;
         if (nodeType) {
            if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
               if ("string" == typeof elem.textContent) return elem.textContent;
               for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem) } else if (3 === nodeType || 4 === nodeType) return elem.nodeValue } else
            for (; node = elem[i++];) ret += getText(node);
         return ret }, Expr = Sizzle.selectors = { cacheLength: 50, createPseudo: markFunction, match: matchExpr, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(match) {
               return match[1] = match[1].replace(runescape, funescape), match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape), "~=" === match[2] && (match[3] = " " + match[3] + " "), match.slice(0, 4) }, CHILD: function(match) {
               return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match }, PSEUDO: function(match) {
               var excess, unquoted = !match[6] && match[2];
               return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3)) } }, filter: { TAG: function(nodeNameSelector) {
               var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
               return "*" === nodeNameSelector ? function() {
                  return !0 } : function(elem) {
                  return elem.nodeName && elem.nodeName.toLowerCase() === nodeName } }, CLASS: function(className) {
               var pattern = classCache[className + " "];
               return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                  return pattern.test("string" == typeof elem.className && elem.className || "undefined" != typeof elem.getAttribute && elem.getAttribute("class") || "") }) }, ATTR: function(name, operator, check) {
               return function(elem) {
                  var result = Sizzle.attr(elem, name);
                  return null == result ? "!=" === operator : !operator || (result += "", "=" === operator ? result === check : "!=" === operator ? result !== check : "^=" === operator ? check && 0 === result.indexOf(check) : "*=" === operator ? check && result.indexOf(check) > -1 : "$=" === operator ? check && result.slice(-check.length) === check : "~=" === operator ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : "|=" === operator && (result === check || result.slice(0, check.length + 1) === check + "-")) } }, CHILD: function(type, what, argument, first, last) {
               var simple = "nth" !== type.slice(0, 3),
                  forward = "last" !== type.slice(-4),
                  ofType = "of-type" === what;
               return 1 === first && 0 === last ? function(elem) {
                  return !!elem.parentNode } : function(elem, context, xml) {
                  var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
                     parent = elem.parentNode,
                     name = ofType && elem.nodeName.toLowerCase(),
                     useCache = !xml && !ofType,
                     diff = !1;
                  if (parent) {
                     if (simple) {
                        for (; dir;) {
                           for (node = elem; node = node[dir];)
                              if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) return !1;
                           start = dir = "only" === type && !start && "nextSibling" }
                        return !0 }
                     if (start = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                        for (node = parent, outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), cache = uniqueCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex && cache[2], node = nodeIndex && parent.childNodes[nodeIndex]; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();)
                           if (1 === node.nodeType && ++diff && node === elem) { uniqueCache[type] = [dirruns, nodeIndex, diff];
                              break } } else if (useCache && (node = elem, outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), cache = uniqueCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex), diff === !1)
                        for (;
                           (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((ofType ? node.nodeName.toLowerCase() !== name : 1 !== node.nodeType) || !++diff || (useCache && (outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), uniqueCache[type] = [dirruns, diff]), node !== elem)););
                     return diff -= last, diff === first || diff % first === 0 && diff / first >= 0 } } }, PSEUDO: function(pseudo, argument) {
               var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
               return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                  for (var idx, matched = fn(seed, argument), i = matched.length; i--;) idx = indexOf(seed, matched[i]), seed[idx] = !(matches[idx] = matched[i]) }) : function(elem) {
                  return fn(elem, 0, args) }) : fn } }, pseudos: { not: markFunction(function(selector) {
               var input = [],
                  results = [],
                  matcher = compile(selector.replace(rtrim, "$1"));
               return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                  for (var elem, unmatched = matcher(seed, null, xml, []), i = seed.length; i--;)(elem = unmatched[i]) && (seed[i] = !(matches[i] = elem)) }) : function(elem, context, xml) {
                  return input[0] = elem, matcher(input, null, xml, results), input[0] = null, !results.pop() } }), has: markFunction(function(selector) {
               return function(elem) {
                  return Sizzle(selector, elem).length > 0 } }), contains: markFunction(function(text) {
               return text = text.replace(runescape, funescape),
                  function(elem) {
                     return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1 } }), lang: markFunction(function(lang) {
               return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(runescape, funescape).toLowerCase(),
                  function(elem) {
                     var elemLang;
                     do
                        if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) return elemLang = elemLang.toLowerCase(), elemLang === lang || 0 === elemLang.indexOf(lang + "-");
                     while ((elem = elem.parentNode) && 1 === elem.nodeType);
                     return !1 } }), target: function(elem) {
               var hash = window.location && window.location.hash;
               return hash && hash.slice(1) === elem.id }, root: function(elem) {
               return elem === docElem }, focus: function(elem) {
               return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex) }, enabled: function(elem) {
               return elem.disabled === !1 }, disabled: function(elem) {
               return elem.disabled === !0 }, checked: function(elem) {
               var nodeName = elem.nodeName.toLowerCase();
               return "input" === nodeName && !!elem.checked || "option" === nodeName && !!elem.selected }, selected: function(elem) {
               return elem.parentNode && elem.parentNode.selectedIndex, elem.selected === !0 }, empty: function(elem) {
               for (elem = elem.firstChild; elem; elem = elem.nextSibling)
                  if (elem.nodeType < 6) return !1;
               return !0 }, parent: function(elem) {
               return !Expr.pseudos.empty(elem) }, header: function(elem) {
               return rheader.test(elem.nodeName) }, input: function(elem) {
               return rinputs.test(elem.nodeName) }, button: function(elem) {
               var name = elem.nodeName.toLowerCase();
               return "input" === name && "button" === elem.type || "button" === name }, text: function(elem) {
               var attr;
               return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (attr = elem.getAttribute("type")) || "text" === attr.toLowerCase()) }, first: createPositionalPseudo(function() {
               return [0] }), last: createPositionalPseudo(function(matchIndexes, length) {
               return [length - 1] }), eq: createPositionalPseudo(function(matchIndexes, length, argument) {
               return [argument < 0 ? argument + length : argument] }), even: createPositionalPseudo(function(matchIndexes, length) {
               for (var i = 0; i < length; i += 2) matchIndexes.push(i);
               return matchIndexes }), odd: createPositionalPseudo(function(matchIndexes, length) {
               for (var i = 1; i < length; i += 2) matchIndexes.push(i);
               return matchIndexes }), lt: createPositionalPseudo(function(matchIndexes, length, argument) {
               for (var i = argument < 0 ? argument + length : argument; --i >= 0;) matchIndexes.push(i);
               return matchIndexes }), gt: createPositionalPseudo(function(matchIndexes, length, argument) {
               for (var i = argument < 0 ? argument + length : argument; ++i < length;) matchIndexes.push(i);
               return matchIndexes }) } }, Expr.pseudos.nth = Expr.pseudos.eq;
      for (i in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) Expr.pseudos[i] = createInputPseudo(i);
      for (i in { submit: !0, reset: !0 }) Expr.pseudos[i] = createButtonPseudo(i);
      return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function(selector, parseOnly) {
         var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
         if (cached) return parseOnly ? 0 : cached.slice(0);
         for (soFar = selector, groups = [], preFilters = Expr.preFilter; soFar;) { matched && !(match = rcomma.exec(soFar)) || (match && (soFar = soFar.slice(match[0].length) || soFar), groups.push(tokens = [])), matched = !1, (match = rcombinators.exec(soFar)) && (matched = match.shift(), tokens.push({ value: matched, type: match[0].replace(rtrim, " ") }), soFar = soFar.slice(matched.length));
            for (type in Expr.filter) !(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)) || (matched = match.shift(), tokens.push({ value: matched, type: type, matches: match }), soFar = soFar.slice(matched.length));
            if (!matched) break }
         return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0) }, compile = Sizzle.compile = function(selector, match) {
         var i, setMatchers = [],
            elementMatchers = [],
            cached = compilerCache[selector + " "];
         if (!cached) {
            for (match || (match = tokenize(selector)), i = match.length; i--;) cached = matcherFromTokens(match[i]), cached[expando] ? setMatchers.push(cached) : elementMatchers.push(cached);
            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)), cached.selector = selector }
         return cached }, select = Sizzle.select = function(selector, context, results, seed) {
         var i, tokens, token, type, find, compiled = "function" == typeof selector && selector,
            match = !seed && tokenize(selector = compiled.selector || selector);
         if (results = results || [], 1 === match.length) {
            if (tokens = match[0] = match[0].slice(0), tokens.length > 2 && "ID" === (token = tokens[0]).type && support.getById && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
               if (context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0], !context) return results;
               compiled && (context = context.parentNode), selector = selector.slice(tokens.shift().value.length) }
            for (i = matchExpr.needsContext.test(selector) ? 0 : tokens.length; i-- && (token = tokens[i], !Expr.relative[type = token.type]);)
               if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                  if (tokens.splice(i, 1), selector = seed.length && toSelector(tokens), !selector) return push.apply(results, seed), results;
                  break } }
         return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context), results }, support.sortStable = expando.split("").sort(sortOrder).join("") === expando, support.detectDuplicates = !!hasDuplicate, setDocument(), support.sortDetached = assert(function(div1) {
         return 1 & div1.compareDocumentPosition(document.createElement("div")) }), assert(function(div) {
         return div.innerHTML = "<a href='#'></a>", "#" === div.firstChild.getAttribute("href") }) || addHandle("type|href|height|width", function(elem, name, isXML) {
         if (!isXML) return elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2) }), support.attributes && assert(function(div) {
         return div.innerHTML = "<input/>", div.firstChild.setAttribute("value", ""), "" === div.firstChild.getAttribute("value") }) || addHandle("value", function(elem, name, isXML) {
         if (!isXML && "input" === elem.nodeName.toLowerCase()) return elem.defaultValue }), assert(function(div) {
         return null == div.getAttribute("disabled") }) || addHandle(booleans, function(elem, name, isXML) {
         var val;
         if (!isXML) return elem[name] === !0 ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null }), Sizzle }(window);
   jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML,
      jQuery.contains = Sizzle.contains;
   var dir = function(elem, dir, until) {
         for (var matched = [], truncate = void 0 !== until;
            (elem = elem[dir]) && 9 !== elem.nodeType;)
            if (1 === elem.nodeType) {
               if (truncate && jQuery(elem).is(until)) break;
               matched.push(elem) }
         return matched },
      siblings = function(n, elem) {
         for (var matched = []; n; n = n.nextSibling) 1 === n.nodeType && n !== elem && matched.push(n);
         return matched },
      rneedsContext = jQuery.expr.match.needsContext,
      rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      risSimple = /^.[^:#\[\.,]*$/;
   jQuery.filter = function(expr, elems, not) {
      var elem = elems[0];
      return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
         return 1 === elem.nodeType })) }, jQuery.fn.extend({ find: function(selector) {
         var i, ret = [],
            self = this,
            len = self.length;
         if ("string" != typeof selector) return this.pushStack(jQuery(selector).filter(function() {
            for (i = 0; i < len; i++)
               if (jQuery.contains(self[i], this)) return !0 }));
         for (i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
         return ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret), ret.selector = this.selector ? this.selector + " " + selector : selector, ret }, filter: function(selector) {
         return this.pushStack(winnow(this, selector || [], !1)) }, not: function(selector) {
         return this.pushStack(winnow(this, selector || [], !0)) }, is: function(selector) {
         return !!winnow(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length } });
   var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      init = jQuery.fn.init = function(selector, context, root) {
         var match, elem;
         if (!selector) return this;
         if (root = root || rootjQuery, "string" == typeof selector) {
            if (match = "<" === selector.charAt(0) && ">" === selector.charAt(selector.length - 1) && selector.length >= 3 ? [null, selector, null] : rquickExpr.exec(selector), !match || !match[1] && context) return !context || context.jquery ? (context || root).find(selector) : this.constructor(context).find(selector);
            if (match[1]) {
               if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context))
                  for (match in context) jQuery.isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
               return this }
            if (elem = document.getElementById(match[2]), elem && elem.parentNode) {
               if (elem.id !== match[2]) return rootjQuery.find(selector);
               this.length = 1, this[0] = elem }
            return this.context = document, this.selector = selector, this }
         return selector.nodeType ? (this.context = this[0] = selector, this.length = 1, this) : jQuery.isFunction(selector) ? "undefined" != typeof root.ready ? root.ready(selector) : selector(jQuery) : (void 0 !== selector.selector && (this.selector = selector.selector, this.context = selector.context), jQuery.makeArray(selector, this)) };
   init.prototype = jQuery.fn, rootjQuery = jQuery(document);
   var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      guaranteedUnique = { children: !0, contents: !0, next: !0, prev: !0 };
   jQuery.fn.extend({ has: function(target) {
         var i, targets = jQuery(target, this),
            len = targets.length;
         return this.filter(function() {
            for (i = 0; i < len; i++)
               if (jQuery.contains(this, targets[i])) return !0 }) }, closest: function(selectors, context) {
         for (var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || "string" != typeof selectors ? jQuery(selectors, context || this.context) : 0; i < l; i++)
            for (cur = this[i]; cur && cur !== context; cur = cur.parentNode)
               if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) { matched.push(cur);
                  break }
         return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched) }, index: function(elem) {
         return elem ? "string" == typeof elem ? jQuery.inArray(this[0], jQuery(elem)) : jQuery.inArray(elem.jquery ? elem[0] : elem, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(selector, context) {
         return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context)))) }, addBack: function(selector) {
         return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector)) } }), jQuery.each({ parent: function(elem) {
         var parent = elem.parentNode;
         return parent && 11 !== parent.nodeType ? parent : null }, parents: function(elem) {
         return dir(elem, "parentNode") }, parentsUntil: function(elem, i, until) {
         return dir(elem, "parentNode", until) }, next: function(elem) {
         return sibling(elem, "nextSibling") }, prev: function(elem) {
         return sibling(elem, "previousSibling") }, nextAll: function(elem) {
         return dir(elem, "nextSibling") }, prevAll: function(elem) {
         return dir(elem, "previousSibling") }, nextUntil: function(elem, i, until) {
         return dir(elem, "nextSibling", until) }, prevUntil: function(elem, i, until) {
         return dir(elem, "previousSibling", until) }, siblings: function(elem) {
         return siblings((elem.parentNode || {}).firstChild, elem) }, children: function(elem) {
         return siblings(elem.firstChild) }, contents: function(elem) {
         return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes) } }, function(name, fn) { jQuery.fn[name] = function(until, selector) {
         var ret = jQuery.map(this, fn, until);
         return "Until" !== name.slice(-5) && (selector = until), selector && "string" == typeof selector && (ret = jQuery.filter(selector, ret)), this.length > 1 && (guaranteedUnique[name] || (ret = jQuery.uniqueSort(ret)), rparentsprev.test(name) && (ret = ret.reverse())), this.pushStack(ret) } });
   var rnotwhite = /\S+/g;
   jQuery.Callbacks = function(options) { options = "string" == typeof options ? createOptions(options) : jQuery.extend({}, options);
      var firing, memory, fired, locked, list = [],
         queue = [],
         firingIndex = -1,
         fire = function() {
            for (locked = options.once, fired = firing = !0; queue.length; firingIndex = -1)
               for (memory = queue.shift(); ++firingIndex < list.length;) list[firingIndex].apply(memory[0], memory[1]) === !1 && options.stopOnFalse && (firingIndex = list.length, memory = !1);
            options.memory || (memory = !1), firing = !1, locked && (list = memory ? [] : "") },
         self = { add: function() {
               return list && (memory && !firing && (firingIndex = list.length - 1, queue.push(memory)), function add(args) { jQuery.each(args, function(_, arg) { jQuery.isFunction(arg) ? options.unique && self.has(arg) || list.push(arg) : arg && arg.length && "string" !== jQuery.type(arg) && add(arg) }) }(arguments), memory && !firing && fire()), this }, remove: function() {
               return jQuery.each(arguments, function(_, arg) {
                  for (var index;
                     (index = jQuery.inArray(arg, list, index)) > -1;) list.splice(index, 1), index <= firingIndex && firingIndex-- }), this }, has: function(fn) {
               return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0 }, empty: function() {
               return list && (list = []), this }, disable: function() {
               return locked = queue = [], list = memory = "", this }, disabled: function() {
               return !list }, lock: function() {
               return locked = !0, memory || self.disable(), this }, locked: function() {
               return !!locked }, fireWith: function(context, args) {
               return locked || (args = args || [], args = [context, args.slice ? args.slice() : args], queue.push(args), firing || fire()), this }, fire: function() {
               return self.fireWith(this, arguments), this }, fired: function() {
               return !!fired } };
      return self }, jQuery.extend({ Deferred: function(func) {
         var tuples = [
               ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
               ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
               ["notify", "progress", jQuery.Callbacks("memory")]
            ],
            state = "pending",
            promise = { state: function() {
                  return state }, always: function() {
                  return deferred.done(arguments).fail(arguments), this }, then: function() {
                  var fns = arguments;
                  return jQuery.Deferred(function(newDefer) { jQuery.each(tuples, function(i, tuple) {
                        var fn = jQuery.isFunction(fns[i]) && fns[i];
                        deferred[tuple[1]](function() {
                           var returned = fn && fn.apply(this, arguments);
                           returned && jQuery.isFunction(returned.promise) ? returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject) : newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments) }) }), fns = null }).promise() }, promise: function(obj) {
                  return null != obj ? jQuery.extend(obj, promise) : promise } },
            deferred = {};
         return promise.pipe = promise.then, jQuery.each(tuples, function(i, tuple) {
            var list = tuple[2],
               stateString = tuple[3];
            promise[tuple[1]] = list.add, stateString && list.add(function() { state = stateString }, tuples[1 ^ i][2].disable, tuples[2][2].lock), deferred[tuple[0]] = function() {
               return deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments), this }, deferred[tuple[0] + "With"] = list.fireWith }), promise.promise(deferred), func && func.call(deferred, deferred), deferred }, when: function(subordinate) {
         var progressValues, progressContexts, resolveContexts, i = 0,
            resolveValues = slice.call(arguments),
            length = resolveValues.length,
            remaining = 1 !== length || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
            deferred = 1 === remaining ? subordinate : jQuery.Deferred(),
            updateFunc = function(i, contexts, values) {
               return function(value) { contexts[i] = this, values[i] = arguments.length > 1 ? slice.call(arguments) : value, values === progressValues ? deferred.notifyWith(contexts, values) : --remaining || deferred.resolveWith(contexts, values) } };
         if (length > 1)
            for (progressValues = new Array(length), progressContexts = new Array(length), resolveContexts = new Array(length); i < length; i++) resolveValues[i] && jQuery.isFunction(resolveValues[i].promise) ? resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject) : --remaining;
         return remaining || deferred.resolveWith(resolveContexts, resolveValues), deferred.promise() } });
   var readyList;
   jQuery.fn.ready = function(fn) {
      return jQuery.ready.promise().done(fn), this }, jQuery.extend({ isReady: !1, readyWait: 1, holdReady: function(hold) { hold ? jQuery.readyWait++ : jQuery.ready(!0) }, ready: function(wait) {
         (wait === !0 ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = !0, wait !== !0 && --jQuery.readyWait > 0 || (readyList.resolveWith(document, [jQuery]), jQuery.fn.triggerHandler && (jQuery(document).triggerHandler("ready"), jQuery(document).off("ready")))) } }), jQuery.ready.promise = function(obj) {
      if (!readyList)
         if (readyList = jQuery.Deferred(), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll) window.setTimeout(jQuery.ready);
         else if (document.addEventListener) document.addEventListener("DOMContentLoaded", completed), window.addEventListener("load", completed);
      else { document.attachEvent("onreadystatechange", completed), window.attachEvent("onload", completed);
         var top = !1;
         try { top = null == window.frameElement && document.documentElement } catch (e) {}
         top && top.doScroll && ! function doScrollCheck() {
            if (!jQuery.isReady) {
               try { top.doScroll("left") } catch (e) {
                  return window.setTimeout(doScrollCheck, 50) }
               detach(), jQuery.ready() } }() }
      return readyList.promise(obj) }, jQuery.ready.promise();
   var i;
   for (i in jQuery(support)) break;
   support.ownFirst = "0" === i, support.inlineBlockNeedsLayout = !1, jQuery(function() {
         var val, div, body, container;
         body = document.getElementsByTagName("body")[0], body && body.style && (div = document.createElement("div"), container = document.createElement("div"), container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", body.appendChild(container).appendChild(div), "undefined" != typeof div.style.zoom && (div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", support.inlineBlockNeedsLayout = val = 3 === div.offsetWidth, val && (body.style.zoom = 1)), body.removeChild(container)) }),
      function() {
         var div = document.createElement("div");
         support.deleteExpando = !0;
         try { delete div.test } catch (e) { support.deleteExpando = !1 }
         div = null }();
   var acceptData = function(elem) {
         var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
            nodeType = +elem.nodeType || 1;
         return (1 === nodeType || 9 === nodeType) && (!noData || noData !== !0 && elem.getAttribute("classid") === noData) },
      rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /([A-Z])/g;
   jQuery.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(elem) {
            return elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando], !!elem && !isEmptyDataObject(elem) }, data: function(elem, name, data) {
            return internalData(elem, name, data) }, removeData: function(elem, name) {
            return internalRemoveData(elem, name) }, _data: function(elem, name, data) {
            return internalData(elem, name, data, !0) }, _removeData: function(elem, name) {
            return internalRemoveData(elem, name, !0) } }), jQuery.fn.extend({ data: function(key, value) {
            var i, name, data, elem = this[0],
               attrs = elem && elem.attributes;
            if (void 0 === key) {
               if (this.length && (data = jQuery.data(elem), 1 === elem.nodeType && !jQuery._data(elem, "parsedAttrs"))) {
                  for (i = attrs.length; i--;) attrs[i] && (name = attrs[i].name, 0 === name.indexOf("data-") && (name = jQuery.camelCase(name.slice(5)), dataAttr(elem, name, data[name])));
                  jQuery._data(elem, "parsedAttrs", !0) }
               return data }
            return "object" == typeof key ? this.each(function() { jQuery.data(this, key) }) : arguments.length > 1 ? this.each(function() { jQuery.data(this, key, value) }) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : void 0 }, removeData: function(key) {
            return this.each(function() { jQuery.removeData(this, key) }) } }), jQuery.extend({ queue: function(elem, type, data) {
            var queue;
            if (elem) return type = (type || "fx") + "queue", queue = jQuery._data(elem, type), data && (!queue || jQuery.isArray(data) ? queue = jQuery._data(elem, type, jQuery.makeArray(data)) : queue.push(data)), queue || [] }, dequeue: function(elem, type) { type = type || "fx";
            var queue = jQuery.queue(elem, type),
               startLength = queue.length,
               fn = queue.shift(),
               hooks = jQuery._queueHooks(elem, type),
               next = function() { jQuery.dequeue(elem, type) }; "inprogress" === fn && (fn = queue.shift(), startLength--), fn && ("fx" === type && queue.unshift("inprogress"), delete hooks.stop, fn.call(elem, next, hooks)), !startLength && hooks && hooks.empty.fire() }, _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return jQuery._data(elem, key) || jQuery._data(elem, key, { empty: jQuery.Callbacks("once memory").add(function() { jQuery._removeData(elem, type + "queue"), jQuery._removeData(elem, key) }) }) } }), jQuery.fn.extend({ queue: function(type, data) {
            var setter = 2;
            return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
               var queue = jQuery.queue(this, type, data);
               jQuery._queueHooks(this, type), "fx" === type && "inprogress" !== queue[0] && jQuery.dequeue(this, type) }) }, dequeue: function(type) {
            return this.each(function() { jQuery.dequeue(this, type) }) }, clearQueue: function(type) {
            return this.queue(type || "fx", []) }, promise: function(type, obj) {
            var tmp, count = 1,
               defer = jQuery.Deferred(),
               elements = this,
               i = this.length,
               resolve = function() {--count || defer.resolveWith(elements, [elements]) };
            for ("string" != typeof type && (obj = type, type = void 0), type = type || "fx"; i--;) tmp = jQuery._data(elements[i], type + "queueHooks"), tmp && tmp.empty && (count++, tmp.empty.add(resolve));
            return resolve(), defer.promise(obj) } }),
      function() {
         var shrinkWrapBlocksVal;
         support.shrinkWrapBlocks = function() {
            if (null != shrinkWrapBlocksVal) return shrinkWrapBlocksVal;
            shrinkWrapBlocksVal = !1;
            var div, body, container;
            return body = document.getElementsByTagName("body")[0], body && body.style ? (div = document.createElement("div"), container = document.createElement("div"), container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", body.appendChild(container).appendChild(div), "undefined" != typeof div.style.zoom && (div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", div.appendChild(document.createElement("div")).style.width = "5px", shrinkWrapBlocksVal = 3 !== div.offsetWidth), body.removeChild(container), shrinkWrapBlocksVal) : void 0 } }();
   var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
      cssExpand = ["Top", "Right", "Bottom", "Left"],
      isHidden = function(elem, el) {
         return elem = el || elem, "none" === jQuery.css(elem, "display") || !jQuery.contains(elem.ownerDocument, elem) },
      access = function(elems, fn, key, value, chainable, emptyGet, raw) {
         var i = 0,
            length = elems.length,
            bulk = null == key;
         if ("object" === jQuery.type(key)) { chainable = !0;
            for (i in key) access(elems, fn, i, key[i], !0, emptyGet, raw) } else if (void 0 !== value && (chainable = !0, jQuery.isFunction(value) || (raw = !0), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(elem, key, value) {
               return bulk.call(jQuery(elem), value) })), fn))
            for (; i < length; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
         return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet },
      rcheckableType = /^(?:checkbox|radio)$/i,
      rtagName = /<([\w:-]+)/,
      rscriptType = /^$|\/(?:java|ecma)script/i,
      rleadingWhitespace = /^\s+/,
      nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
   ! function() {
      var div = document.createElement("div"),
         fragment = document.createDocumentFragment(),
         input = document.createElement("input");
      div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", support.leadingWhitespace = 3 === div.firstChild.nodeType, support.tbody = !div.getElementsByTagName("tbody").length, support.htmlSerialize = !!div.getElementsByTagName("link").length, support.html5Clone = "<:nav></:nav>" !== document.createElement("nav").cloneNode(!0).outerHTML, input.type = "checkbox", input.checked = !0, fragment.appendChild(input), support.appendChecked = input.checked, div.innerHTML = "<textarea>x</textarea>", support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue, fragment.appendChild(div), input = document.createElement("input"), input.setAttribute("type", "radio"), input.setAttribute("checked", "checked"), input.setAttribute("name", "t"), div.appendChild(input), support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked, support.noCloneEvent = !!div.addEventListener, div[jQuery.expando] = 1, support.attributes = !div.getAttribute(jQuery.expando) }();
   var wrapMap = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };
   wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, wrapMap.th = wrapMap.td;
   var rhtml = /<|&#?\w+;/,
      rtbody = /<tbody/i;
   ! function() {
      var i, eventName, div = document.createElement("div");
      for (i in { submit: !0, change: !0, focusin: !0 }) eventName = "on" + i, (support[i] = eventName in window) || (div.setAttribute(eventName, "t"), support[i] = div.attributes[eventName].expando === !1);
      div = null }();
   var rformElems = /^(?:input|select|textarea)$/i,
      rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
   jQuery.event = { global: {}, add: function(elem, types, handler, data, selector) {
         var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
         if (elemData) {
            for (handler.handler && (handleObjIn = handler, handler = handleObjIn.handler, selector = handleObjIn.selector), handler.guid || (handler.guid = jQuery.guid++), (events = elemData.events) || (events = elemData.events = {}), (eventHandle = elemData.handle) || (eventHandle = elemData.handle = function(e) {
                  return "undefined" == typeof jQuery || e && jQuery.event.triggered === e.type ? void 0 : jQuery.event.dispatch.apply(eventHandle.elem, arguments) }, eventHandle.elem = elem), types = (types || "").match(rnotwhite) || [""], t = types.length; t--;) tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type && (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, special = jQuery.event.special[type] || {}, handleObj = jQuery.extend({ type: type, origType: origType, data: data, handler: handler, guid: handler.guid, selector: selector, needsContext: selector && jQuery.expr.match.needsContext.test(selector), namespace: namespaces.join(".") }, handleObjIn), (handlers = events[type]) || (handlers = events[type] = [], handlers.delegateCount = 0, special.setup && special.setup.call(elem, data, namespaces, eventHandle) !== !1 || (elem.addEventListener ? elem.addEventListener(type, eventHandle, !1) : elem.attachEvent && elem.attachEvent("on" + type, eventHandle))), special.add && (special.add.call(elem, handleObj), handleObj.handler.guid || (handleObj.handler.guid = handler.guid)), selector ? handlers.splice(handlers.delegateCount++, 0, handleObj) : handlers.push(handleObj), jQuery.event.global[type] = !0);
            elem = null } }, remove: function(elem, types, handler, selector, mappedTypes) {
         var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
         if (elemData && (events = elemData.events)) {
            for (types = (types || "").match(rnotwhite) || [""], t = types.length; t--;)
               if (tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type) {
                  for (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, handlers = events[type] || [], tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), origCount = j = handlers.length; j--;) handleObj = handlers[j], !mappedTypes && origType !== handleObj.origType || handler && handler.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector) || (handlers.splice(j, 1), handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
                  origCount && !handlers.length && (special.teardown && special.teardown.call(elem, namespaces, elemData.handle) !== !1 || jQuery.removeEvent(elem, type, elemData.handle), delete events[type]) } else
                  for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, !0);
            jQuery.isEmptyObject(events) && (delete elemData.handle, jQuery._removeData(elem, "events")) } }, trigger: function(event, data, elem, onlyHandlers) {
         var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [elem || document],
            type = hasOwn.call(event, "type") ? event.type : event,
            namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
         if (cur = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") > -1 && (namespaces = type.split("."), type = namespaces.shift(), namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event), event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = namespaces.join("."), event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), data = null == data ? [event] : jQuery.makeArray(data, [event]), special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || special.trigger.apply(elem, data) !== !1)) {
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
               for (bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode) eventPath.push(cur), tmp = cur;
               tmp === (elem.ownerDocument || document) && eventPath.push(tmp.defaultView || tmp.parentWindow || window) }
            for (i = 0;
               (cur = eventPath[i++]) && !event.isPropagationStopped();) event.type = i > 1 ? bubbleType : special.bindType || type, handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle"), handle && handle.apply(cur, data), handle = ontype && cur[ontype], handle && handle.apply && acceptData(cur) && (event.result = handle.apply(cur, data), event.result === !1 && event.preventDefault());
            if (event.type = type, !onlyHandlers && !event.isDefaultPrevented() && (!special._default || special._default.apply(eventPath.pop(), data) === !1) && acceptData(elem) && ontype && elem[type] && !jQuery.isWindow(elem)) { tmp = elem[ontype], tmp && (elem[ontype] = null), jQuery.event.triggered = type;
               try { elem[type]() } catch (e) {}
               jQuery.event.triggered = void 0, tmp && (elem[ontype] = tmp) }
            return event.result } }, dispatch: function(event) { event = jQuery.event.fix(event);
         var i, j, ret, matched, handleObj, handlerQueue = [],
            args = slice.call(arguments),
            handlers = (jQuery._data(this, "events") || {})[event.type] || [],
            special = jQuery.event.special[event.type] || {};
         if (args[0] = event, event.delegateTarget = this, !special.preDispatch || special.preDispatch.call(this, event) !== !1) {
            for (handlerQueue = jQuery.event.handlers.call(this, event, handlers), i = 0;
               (matched = handlerQueue[i++]) && !event.isPropagationStopped();)
               for (event.currentTarget = matched.elem, j = 0;
                  (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) event.rnamespace && !event.rnamespace.test(handleObj.namespace) || (event.handleObj = handleObj, event.data = handleObj.data, ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args), void 0 !== ret && (event.result = ret) === !1 && (event.preventDefault(), event.stopPropagation()));
            return special.postDispatch && special.postDispatch.call(this, event), event.result } }, handlers: function(event, handlers) {
         var i, matches, sel, handleObj, handlerQueue = [],
            delegateCount = handlers.delegateCount,
            cur = event.target;
         if (delegateCount && cur.nodeType && ("click" !== event.type || isNaN(event.button) || event.button < 1))
            for (; cur != this; cur = cur.parentNode || this)
               if (1 === cur.nodeType && (cur.disabled !== !0 || "click" !== event.type)) {
                  for (matches = [], i = 0; i < delegateCount; i++) handleObj = handlers[i], sel = handleObj.selector + " ", void 0 === matches[sel] && (matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length), matches[sel] && matches.push(handleObj);
                  matches.length && handlerQueue.push({ elem: cur, handlers: matches }) }
         return delegateCount < handlers.length && handlerQueue.push({ elem: this, handlers: handlers.slice(delegateCount) }), handlerQueue }, fix: function(event) {
         if (event[jQuery.expando]) return event;
         var i, prop, copy, type = event.type,
            originalEvent = event,
            fixHook = this.fixHooks[type];
         for (fixHook || (this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}), copy = fixHook.props ? this.props.concat(fixHook.props) : this.props, event = new jQuery.Event(originalEvent), i = copy.length; i--;) prop = copy[i], event[prop] = originalEvent[prop];
         return event.target || (event.target = originalEvent.srcElement || document), 3 === event.target.nodeType && (event.target = event.target.parentNode), event.metaKey = !!event.metaKey, fixHook.filter ? fixHook.filter(event, originalEvent) : event }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(event, original) {
            return null == event.which && (event.which = null != original.charCode ? original.charCode : original.keyCode), event } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(event, original) {
            var body, eventDoc, doc, button = original.button,
               fromElement = original.fromElement;
            return null == event.pageX && null != original.clientX && (eventDoc = event.target.ownerDocument || document, doc = eventDoc.documentElement, body = eventDoc.body, event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)), !event.relatedTarget && fromElement && (event.relatedTarget = fromElement === event.target ? original.toElement : fromElement), event.which || void 0 === button || (event.which = 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0), event } }, special: { load: { noBubble: !0 }, focus: { trigger: function() {
               if (this !== safeActiveElement() && this.focus) try {
                  return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() {
               if (this === safeActiveElement() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() {
               if (jQuery.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1 }, _default: function(event) {
               return jQuery.nodeName(event.target, "a") } }, beforeunload: { postDispatch: function(event) { void 0 !== event.result && event.originalEvent && (event.originalEvent.returnValue = event.result) } } }, simulate: function(type, elem, event) {
         var e = jQuery.extend(new jQuery.Event, event, { type: type, isSimulated: !0 });
         jQuery.event.trigger(e, null, elem), e.isDefaultPrevented() && event.preventDefault() } }, jQuery.removeEvent = document.removeEventListener ? function(elem, type, handle) { elem.removeEventListener && elem.removeEventListener(type, handle) } : function(elem, type, handle) {
      var name = "on" + type;
      elem.detachEvent && ("undefined" == typeof elem[name] && (elem[name] = null), elem.detachEvent(name, handle)) }, jQuery.Event = function(src, props) {
      return this instanceof jQuery.Event ? (src && src.type ? (this.originalEvent = src, this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && src.returnValue === !1 ? returnTrue : returnFalse) : this.type = src, props && jQuery.extend(this, props), this.timeStamp = src && src.timeStamp || jQuery.now(), void(this[jQuery.expando] = !0)) : new jQuery.Event(src, props) }, jQuery.Event.prototype = { constructor: jQuery.Event, isDefaultPrevented: returnFalse, isPropagationStopped: returnFalse, isImmediatePropagationStopped: returnFalse, preventDefault: function() {
         var e = this.originalEvent;
         this.isDefaultPrevented = returnTrue, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function() {
         var e = this.originalEvent;
         this.isPropagationStopped = returnTrue, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function() {
         var e = this.originalEvent;
         this.isImmediatePropagationStopped = returnTrue, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation() } }, jQuery.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(orig, fix) { jQuery.event.special[orig] = { delegateType: fix, bindType: fix, handle: function(event) {
            var ret, target = this,
               related = event.relatedTarget,
               handleObj = event.handleObj;
            return related && (related === target || jQuery.contains(target, related)) || (event.type = handleObj.origType, ret = handleObj.handler.apply(this, arguments), event.type = fix), ret } } }), support.submit || (jQuery.event.special.submit = { setup: function() {
         return !jQuery.nodeName(this, "form") && void jQuery.event.add(this, "click._submit keypress._submit", function(e) {
            var elem = e.target,
               form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? jQuery.prop(elem, "form") : void 0;
            form && !jQuery._data(form, "submit") && (jQuery.event.add(form, "submit._submit", function(event) { event._submitBubble = !0 }), jQuery._data(form, "submit", !0)) }) }, postDispatch: function(event) { event._submitBubble && (delete event._submitBubble, this.parentNode && !event.isTrigger && jQuery.event.simulate("submit", this.parentNode, event)) }, teardown: function() {
         return !jQuery.nodeName(this, "form") && void jQuery.event.remove(this, "._submit") } }), support.change || (jQuery.event.special.change = { setup: function() {
         return rformElems.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (jQuery.event.add(this, "propertychange._change", function(event) { "checked" === event.originalEvent.propertyName && (this._justChanged = !0) }), jQuery.event.add(this, "click._change", function(event) { this._justChanged && !event.isTrigger && (this._justChanged = !1), jQuery.event.simulate("change", this, event) })), !1) : void jQuery.event.add(this, "beforeactivate._change", function(e) {
            var elem = e.target;
            rformElems.test(elem.nodeName) && !jQuery._data(elem, "change") && (jQuery.event.add(elem, "change._change", function(event) {!this.parentNode || event.isSimulated || event.isTrigger || jQuery.event.simulate("change", this.parentNode, event) }), jQuery._data(elem, "change", !0)) }) }, handle: function(event) {
         var elem = event.target;
         if (this !== elem || event.isSimulated || event.isTrigger || "radio" !== elem.type && "checkbox" !== elem.type) return event.handleObj.handler.apply(this, arguments) }, teardown: function() {
         return jQuery.event.remove(this, "._change"), !rformElems.test(this.nodeName) } }), support.focusin || jQuery.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
      var handler = function(event) { jQuery.event.simulate(fix, event.target, jQuery.event.fix(event)) };
      jQuery.event.special[fix] = {
         setup: function() {
            var doc = this.ownerDocument || this,
               attaches = jQuery._data(doc, fix);
            attaches || doc.addEventListener(orig, handler, !0), jQuery._data(doc, fix, (attaches || 0) + 1) },
         teardown: function() {
            var doc = this.ownerDocument || this,
               attaches = jQuery._data(doc, fix) - 1;
            attaches ? jQuery._data(doc, fix, attaches) : (doc.removeEventListener(orig, handler, !0),
               jQuery._removeData(doc, fix))
         }
      }
   }), jQuery.fn.extend({ on: function(types, selector, data, fn) {
         return on(this, types, selector, data, fn) }, one: function(types, selector, data, fn) {
         return on(this, types, selector, data, fn, 1) }, off: function(types, selector, fn) {
         var handleObj, type;
         if (types && types.preventDefault && types.handleObj) return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
         if ("object" == typeof types) {
            for (type in types) this.off(type, selector, types[type]);
            return this }
         return selector !== !1 && "function" != typeof selector || (fn = selector, selector = void 0), fn === !1 && (fn = returnFalse), this.each(function() { jQuery.event.remove(this, types, fn, selector) }) }, trigger: function(type, data) {
         return this.each(function() { jQuery.event.trigger(type, data, this) }) }, triggerHandler: function(type, data) {
         var elem = this[0];
         if (elem) return jQuery.event.trigger(type, data, elem, !0) } });
   var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
      rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
      rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      rnoInnerhtml = /<script|<style|<link/i,
      rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rscriptTypeMasked = /^true\/(.*)/,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      safeFragment = createSafeFragment(document),
      fragmentDiv = safeFragment.appendChild(document.createElement("div"));
   jQuery.extend({ htmlPrefilter: function(html) {
         return html.replace(rxhtmlTag, "<$1></$2>") }, clone: function(elem, dataAndEvents, deepDataAndEvents) {
         var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
         if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">") ? clone = elem.cloneNode(!0) : (fragmentDiv.innerHTML = elem.outerHTML, fragmentDiv.removeChild(clone = fragmentDiv.firstChild)), !(support.noCloneEvent && support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem)))
            for (destElements = getAll(clone), srcElements = getAll(elem), i = 0; null != (node = srcElements[i]); ++i) destElements[i] && fixCloneNodeIssues(node, destElements[i]);
         if (dataAndEvents)
            if (deepDataAndEvents)
               for (srcElements = srcElements || getAll(elem), destElements = destElements || getAll(clone), i = 0; null != (node = srcElements[i]); i++) cloneCopyEvent(node, destElements[i]);
            else cloneCopyEvent(elem, clone);
         return destElements = getAll(clone, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), destElements = srcElements = node = null, clone }, cleanData: function(elems, forceAcceptData) {
         for (var elem, type, id, data, i = 0, internalKey = jQuery.expando, cache = jQuery.cache, attributes = support.attributes, special = jQuery.event.special; null != (elem = elems[i]); i++)
            if ((forceAcceptData || acceptData(elem)) && (id = elem[internalKey], data = id && cache[id])) {
               if (data.events)
                  for (type in data.events) special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
               cache[id] && (delete cache[id], attributes || "undefined" == typeof elem.removeAttribute ? elem[internalKey] = void 0 : elem.removeAttribute(internalKey), deletedIds.push(id)) } } }), jQuery.fn.extend({ domManip: domManip, detach: function(selector) {
         return remove(this, selector, !0) }, remove: function(selector) {
         return remove(this, selector) }, text: function(value) {
         return access(this, function(value) {
            return void 0 === value ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value)) }, null, value, arguments.length) }, append: function() {
         return domManip(this, arguments, function(elem) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
               var target = manipulationTarget(this, elem);
               target.appendChild(elem) } }) }, prepend: function() {
         return domManip(this, arguments, function(elem) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
               var target = manipulationTarget(this, elem);
               target.insertBefore(elem, target.firstChild) } }) }, before: function() {
         return domManip(this, arguments, function(elem) { this.parentNode && this.parentNode.insertBefore(elem, this) }) }, after: function() {
         return domManip(this, arguments, function(elem) { this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling) }) }, empty: function() {
         for (var elem, i = 0; null != (elem = this[i]); i++) {
            for (1 === elem.nodeType && jQuery.cleanData(getAll(elem, !1)); elem.firstChild;) elem.removeChild(elem.firstChild);
            elem.options && jQuery.nodeName(elem, "select") && (elem.options.length = 0) }
         return this }, clone: function(dataAndEvents, deepDataAndEvents) {
         return dataAndEvents = null != dataAndEvents && dataAndEvents, deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents, this.map(function() {
            return jQuery.clone(this, dataAndEvents, deepDataAndEvents) }) }, html: function(value) {
         return access(this, function(value) {
            var elem = this[0] || {},
               i = 0,
               l = this.length;
            if (void 0 === value) return 1 === elem.nodeType ? elem.innerHTML.replace(rinlinejQuery, "") : void 0;
            if ("string" == typeof value && !rnoInnerhtml.test(value) && (support.htmlSerialize || !rnoshimcache.test(value)) && (support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) { value = jQuery.htmlPrefilter(value);
               try {
                  for (; i < l; i++) elem = this[i] || {}, 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), elem.innerHTML = value);
                  elem = 0 } catch (e) {} }
            elem && this.empty().append(value) }, null, value, arguments.length) }, replaceWith: function() {
         var ignored = [];
         return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            jQuery.inArray(this, ignored) < 0 && (jQuery.cleanData(getAll(this)), parent && parent.replaceChild(elem, this)) }, ignored) } }), jQuery.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(name, original) { jQuery.fn[name] = function(selector) {
         for (var elems, i = 0, ret = [], insert = jQuery(selector), last = insert.length - 1; i <= last; i++) elems = i === last ? this : this.clone(!0), jQuery(insert[i])[original](elems), push.apply(ret, elems.get());
         return this.pushStack(ret) } });
   var iframe, elemdisplay = { HTML: "block", BODY: "block" },
      rmargin = /^margin/,
      rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"),
      swap = function(elem, options, callback, args) {
         var ret, name, old = {};
         for (name in options) old[name] = elem.style[name], elem.style[name] = options[name];
         ret = callback.apply(elem, args || []);
         for (name in options) elem.style[name] = old[name];
         return ret },
      documentElement = document.documentElement;
   ! function() {
      function computeStyleTests() {
         var contents, divStyle, documentElement = document.documentElement;
         documentElement.appendChild(container), div.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = !1, pixelMarginRightVal = reliableMarginRightVal = !0, window.getComputedStyle && (divStyle = window.getComputedStyle(div), pixelPositionVal = "1%" !== (divStyle || {}).top, reliableMarginLeftVal = "2px" === (divStyle || {}).marginLeft, boxSizingReliableVal = "4px" === (divStyle || { width: "4px" }).width, div.style.marginRight = "50%", pixelMarginRightVal = "4px" === (divStyle || { marginRight: "4px" }).marginRight, contents = div.appendChild(document.createElement("div")), contents.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", contents.style.marginRight = contents.style.width = "0", div.style.width = "1px", reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents) || {}).marginRight), div.removeChild(contents)), div.style.display = "none", reliableHiddenOffsetsVal = 0 === div.getClientRects().length, reliableHiddenOffsetsVal && (div.style.display = "", div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", contents = div.getElementsByTagName("td"), contents[0].style.cssText = "margin:0;border:0;padding:0;display:none", reliableHiddenOffsetsVal = 0 === contents[0].offsetHeight, reliableHiddenOffsetsVal && (contents[0].style.display = "", contents[1].style.display = "none", reliableHiddenOffsetsVal = 0 === contents[0].offsetHeight)), documentElement.removeChild(container) }
      var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal, reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal, container = document.createElement("div"),
         div = document.createElement("div");
      div.style && (div.style.cssText = "float:left;opacity:.5", support.opacity = "0.5" === div.style.opacity, support.cssFloat = !!div.style.cssFloat, div.style.backgroundClip = "content-box", div.cloneNode(!0).style.backgroundClip = "", support.clearCloneStyle = "content-box" === div.style.backgroundClip, container = document.createElement("div"), container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", div.innerHTML = "", container.appendChild(div), support.boxSizing = "" === div.style.boxSizing || "" === div.style.MozBoxSizing || "" === div.style.WebkitBoxSizing, jQuery.extend(support, { reliableHiddenOffsets: function() {
            return null == pixelPositionVal && computeStyleTests(), reliableHiddenOffsetsVal }, boxSizingReliable: function() {
            return null == pixelPositionVal && computeStyleTests(), boxSizingReliableVal }, pixelMarginRight: function() {
            return null == pixelPositionVal && computeStyleTests(), pixelMarginRightVal }, pixelPosition: function() {
            return null == pixelPositionVal && computeStyleTests(), pixelPositionVal }, reliableMarginRight: function() {
            return null == pixelPositionVal && computeStyleTests(), reliableMarginRightVal }, reliableMarginLeft: function() {
            return null == pixelPositionVal && computeStyleTests(), reliableMarginLeftVal } })) }();
   var getStyles, curCSS, rposition = /^(top|right|bottom|left)$/;
   window.getComputedStyle ? (getStyles = function(elem) {
      var view = elem.ownerDocument.defaultView;
      return view && view.opener || (view = window), view.getComputedStyle(elem) }, curCSS = function(elem, name, computed) {
      var width, minWidth, maxWidth, ret, style = elem.style;
      return computed = computed || getStyles(elem), ret = computed ? computed.getPropertyValue(name) || computed[name] : void 0, "" !== ret && void 0 !== ret || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), computed && !support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name) && (width = style.width, minWidth = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = width, style.minWidth = minWidth, style.maxWidth = maxWidth), void 0 === ret ? ret : ret + "" }) : documentElement.currentStyle && (getStyles = function(elem) {
      return elem.currentStyle }, curCSS = function(elem, name, computed) {
      var left, rs, rsLeft, ret, style = elem.style;
      return computed = computed || getStyles(elem), ret = computed ? computed[name] : void 0, null == ret && style && style[name] && (ret = style[name]), rnumnonpx.test(ret) && !rposition.test(name) && (left = style.left, rs = elem.runtimeStyle, rsLeft = rs && rs.left, rsLeft && (rs.left = elem.currentStyle.left), style.left = "fontSize" === name ? "1em" : ret, ret = style.pixelLeft + "px", style.left = left, rsLeft && (rs.left = rsLeft)), void 0 === ret ? ret : ret + "" || "auto" });
   var ralpha = /alpha\([^)]*\)/i,
      ropacity = /opacity\s*=\s*([^)]*)/i,
      rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
      cssShow = { position: "absolute", visibility: "hidden", display: "block" },
      cssNormalTransform = { letterSpacing: "0", fontWeight: "400" },
      cssPrefixes = ["Webkit", "O", "Moz", "ms"],
      emptyStyle = document.createElement("div").style;
   jQuery.extend({ cssHooks: { opacity: { get: function(elem, computed) {
               if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return "" === ret ? "1" : ret } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: support.cssFloat ? "cssFloat" : "styleFloat" }, style: function(elem, name, value, extra) {
         if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
            var ret, type, hooks, origName = jQuery.camelCase(name),
               style = elem.style;
            if (name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], void 0 === value) return hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, !1, extra)) ? ret : style[name];
            if (type = typeof value, "string" === type && (ret = rcssNum.exec(value)) && ret[1] && (value = adjustCSS(elem, name, ret), type = "number"), null != value && value === value && ("number" === type && (value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px")), support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background") || (style[name] = "inherit"), !(hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra))))) try { style[name] = value } catch (e) {} } }, css: function(elem, name, extra, styles) {
         var num, val, hooks, origName = jQuery.camelCase(name);
         return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], hooks && "get" in hooks && (val = hooks.get(elem, !0, extra)), void 0 === val && (val = curCSS(elem, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === extra || extra ? (num = parseFloat(val), extra === !0 || isFinite(num) ? num || 0 : val) : val } }), jQuery.each(["height", "width"], function(i, name) { jQuery.cssHooks[name] = { get: function(elem, computed, extra) {
            if (computed) return rdisplayswap.test(jQuery.css(elem, "display")) && 0 === elem.offsetWidth ? swap(elem, cssShow, function() {
               return getWidthOrHeight(elem, name, extra) }) : getWidthOrHeight(elem, name, extra) }, set: function(elem, value, extra) {
            var styles = extra && getStyles(elem);
            return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, support.boxSizing && "border-box" === jQuery.css(elem, "boxSizing", !1, styles), styles) : 0) } } }), support.opacity || (jQuery.cssHooks.opacity = { get: function(elem, computed) {
         return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "" }, set: function(elem, value) {
         var style = elem.style,
            currentStyle = elem.currentStyle,
            opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + 100 * value + ")" : "",
            filter = currentStyle && currentStyle.filter || style.filter || "";
         style.zoom = 1, (value >= 1 || "" === value) && "" === jQuery.trim(filter.replace(ralpha, "")) && style.removeAttribute && (style.removeAttribute("filter"), "" === value || currentStyle && !currentStyle.filter) || (style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity) } }), jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
      if (computed) return swap(elem, { display: "inline-block" }, curCSS, [elem, "marginRight"]) }), jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
      if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || (jQuery.contains(elem.ownerDocument, elem) ? elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
         return elem.getBoundingClientRect().left }) : 0)) + "px" }), jQuery.each({ margin: "", padding: "", border: "Width" }, function(prefix, suffix) { jQuery.cssHooks[prefix + suffix] = { expand: function(value) {
            for (var i = 0, expanded = {}, parts = "string" == typeof value ? value.split(" ") : [value]; i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            return expanded } }, rmargin.test(prefix) || (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber) }), jQuery.fn.extend({ css: function(name, value) {
         return access(this, function(elem, name, value) {
            var styles, len, map = {},
               i = 0;
            if (jQuery.isArray(name)) {
               for (styles = getStyles(elem), len = name.length; i < len; i++) map[name[i]] = jQuery.css(elem, name[i], !1, styles);
               return map }
            return void 0 !== value ? jQuery.style(elem, name, value) : jQuery.css(elem, name) }, name, value, arguments.length > 1) }, show: function() {
         return showHide(this, !0) }, hide: function() {
         return showHide(this) }, toggle: function(state) {
         return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() { isHidden(this) ? jQuery(this).show() : jQuery(this).hide() }) } }), jQuery.Tween = Tween, Tween.prototype = { constructor: Tween, init: function(elem, options, prop, end, easing, unit) { this.elem = elem, this.prop = prop, this.easing = easing || jQuery.easing._default, this.options = options, this.start = this.now = this.cur(), this.end = end, this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px") }, cur: function() {
         var hooks = Tween.propHooks[this.prop];
         return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this) }, run: function(percent) {
         var eased, hooks = Tween.propHooks[this.prop];
         return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this } }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = { _default: { get: function(tween) {
            var result;
            return 1 !== tween.elem.nodeType || null != tween.elem[tween.prop] && null == tween.elem.style[tween.prop] ? tween.elem[tween.prop] : (result = jQuery.css(tween.elem, tween.prop, ""), result && "auto" !== result ? result : 0) }, set: function(tween) { jQuery.fx.step[tween.prop] ? jQuery.fx.step[tween.prop](tween) : 1 !== tween.elem.nodeType || null == tween.elem.style[jQuery.cssProps[tween.prop]] && !jQuery.cssHooks[tween.prop] ? tween.elem[tween.prop] = tween.now : jQuery.style(tween.elem, tween.prop, tween.now + tween.unit) } } }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = { set: function(tween) { tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now) } }, jQuery.easing = { linear: function(p) {
         return p }, swing: function(p) {
         return .5 - Math.cos(p * Math.PI) / 2 }, _default: "swing" }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
   var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;
   jQuery.Animation = jQuery.extend(Animation, { tweeners: { "*": [function(prop, value) {
               var tween = this.createTween(prop, value);
               return adjustCSS(tween.elem, prop, rcssNum.exec(value), tween), tween }] }, tweener: function(props, callback) { jQuery.isFunction(props) ? (callback = props, props = ["*"]) : props = props.match(rnotwhite);
            for (var prop, index = 0, length = props.length; index < length; index++) prop = props[index], Animation.tweeners[prop] = Animation.tweeners[prop] || [], Animation.tweeners[prop].unshift(callback) }, prefilters: [defaultPrefilter], prefilter: function(callback, prepend) { prepend ? Animation.prefilters.unshift(callback) : Animation.prefilters.push(callback) } }), jQuery.speed = function(speed, easing, fn) {
         var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : { complete: fn || !fn && easing || jQuery.isFunction(speed) && speed, duration: speed, easing: fn && easing || easing && !jQuery.isFunction(easing) && easing };
         return opt.duration = jQuery.fx.off ? 0 : "number" == typeof opt.duration ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default, null != opt.queue && opt.queue !== !0 || (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() { jQuery.isFunction(opt.old) && opt.old.call(this), opt.queue && jQuery.dequeue(this, opt.queue) }, opt }, jQuery.fn.extend({ fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback) }, animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop),
               optall = jQuery.speed(speed, easing, callback),
               doAnimation = function() {
                  var anim = Animation(this, jQuery.extend({}, prop), optall);
                  (empty || jQuery._data(this, "finish")) && anim.stop(!0) };
            return doAnimation.finish = doAnimation, empty || optall.queue === !1 ? this.each(doAnimation) : this.queue(optall.queue, doAnimation) }, stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
               var stop = hooks.stop;
               delete hooks.stop, stop(gotoEnd) };
            return "string" != typeof type && (gotoEnd = clearQueue, clearQueue = type, type = void 0), clearQueue && type !== !1 && this.queue(type || "fx", []), this.each(function() {
               var dequeue = !0,
                  index = null != type && type + "queueHooks",
                  timers = jQuery.timers,
                  data = jQuery._data(this);
               if (index) data[index] && data[index].stop && stopQueue(data[index]);
               else
                  for (index in data) data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]);
               for (index = timers.length; index--;) timers[index].elem !== this || null != type && timers[index].queue !== type || (timers[index].anim.stop(gotoEnd), dequeue = !1, timers.splice(index, 1));!dequeue && gotoEnd || jQuery.dequeue(this, type) }) }, finish: function(type) {
            return type !== !1 && (type = type || "fx"), this.each(function() {
               var index, data = jQuery._data(this),
                  queue = data[type + "queue"],
                  hooks = data[type + "queueHooks"],
                  timers = jQuery.timers,
                  length = queue ? queue.length : 0;
               for (data.finish = !0, jQuery.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0), index = timers.length; index--;) timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0), timers.splice(index, 1));
               for (index = 0; index < length; index++) queue[index] && queue[index].finish && queue[index].finish.call(this);
               delete data.finish }) } }), jQuery.each(["toggle", "show", "hide"], function(i, name) {
         var cssFn = jQuery.fn[name];
         jQuery.fn[name] = function(speed, easing, callback) {
            return null == speed || "boolean" == typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback) } }), jQuery.each({ slideDown: genFx("show"), slideUp: genFx("hide"), slideToggle: genFx("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(name, props) { jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback) } }), jQuery.timers = [], jQuery.fx.tick = function() {
         var timer, timers = jQuery.timers,
            i = 0;
         for (fxNow = jQuery.now(); i < timers.length; i++) timer = timers[i], timer() || timers[i] !== timer || timers.splice(i--, 1);
         timers.length || jQuery.fx.stop(), fxNow = void 0 }, jQuery.fx.timer = function(timer) { jQuery.timers.push(timer), timer() ? jQuery.fx.start() : jQuery.timers.pop() }, jQuery.fx.interval = 13, jQuery.fx.start = function() { timerId || (timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval)) }, jQuery.fx.stop = function() { window.clearInterval(timerId), timerId = null }, jQuery.fx.speeds = { slow: 600, fast: 200, _default: 400 }, jQuery.fn.delay = function(time, type) {
         return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || "fx", this.queue(type, function(next, hooks) {
            var timeout = window.setTimeout(next, time);
            hooks.stop = function() { window.clearTimeout(timeout) } }) },
      function() {
         var a, input = document.createElement("input"),
            div = document.createElement("div"),
            select = document.createElement("select"),
            opt = select.appendChild(document.createElement("option"));
         div = document.createElement("div"), div.setAttribute("className", "t"), div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = div.getElementsByTagName("a")[0], input.setAttribute("type", "checkbox"), div.appendChild(input), a = div.getElementsByTagName("a")[0], a.style.cssText = "top:1px", support.getSetAttribute = "t" !== div.className, support.style = /top/.test(a.getAttribute("style")), support.hrefNormalized = "/a" === a.getAttribute("href"), support.checkOn = !!input.value, support.optSelected = opt.selected, support.enctype = !!document.createElement("form").enctype, select.disabled = !0, support.optDisabled = !opt.disabled, input = document.createElement("input"), input.setAttribute("value", ""), support.input = "" === input.getAttribute("value"), input.value = "t", input.setAttribute("type", "radio"), support.radioValue = "t" === input.value }();
   var rreturn = /\r/g,
      rspaces = /[\x20\t\r\n\f]+/g;
   jQuery.fn.extend({ val: function(value) {
         var hooks, ret, isFunction, elem = this[0]; {
            if (arguments.length) return isFunction = jQuery.isFunction(value), this.each(function(i) {
               var val;
               1 === this.nodeType && (val = isFunction ? value.call(this, i, jQuery(this).val()) : value, null == val ? val = "" : "number" == typeof val ? val += "" : jQuery.isArray(val) && (val = jQuery.map(val, function(value) {
                  return null == value ? "" : value + "" })), hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()], hooks && "set" in hooks && void 0 !== hooks.set(this, val, "value") || (this.value = val)) });
            if (elem) return hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, "value")) ? ret : (ret = elem.value, "string" == typeof ret ? ret.replace(rreturn, "") : null == ret ? "" : ret) } } }), jQuery.extend({ valHooks: { option: { get: function(elem) {
               var val = jQuery.find.attr(elem, "value");
               return null != val ? val : jQuery.trim(jQuery.text(elem)).replace(rspaces, " ") } }, select: { get: function(elem) {
               for (var value, option, options = elem.options, index = elem.selectedIndex, one = "select-one" === elem.type || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0; i < max; i++)
                  if (option = options[i], (option.selected || i === index) && (support.optDisabled ? !option.disabled : null === option.getAttribute("disabled")) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                     if (value = jQuery(option).val(), one) return value;
                     values.push(value) }
               return values }, set: function(elem, value) {
               for (var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length; i--;)
                  if (option = options[i], jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) try { option.selected = optionSet = !0 } catch (_) { option.scrollHeight } else option.selected = !1;
               return optionSet || (elem.selectedIndex = -1), options } } } }), jQuery.each(["radio", "checkbox"], function() { jQuery.valHooks[this] = { set: function(elem, value) {
            if (jQuery.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1 } }, support.checkOn || (jQuery.valHooks[this].get = function(elem) {
         return null === elem.getAttribute("value") ? "on" : elem.value }) });
   var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle,
      ruseDefault = /^(?:checked|selected)$/i,
      getSetAttribute = support.getSetAttribute,
      getSetInput = support.input;
   jQuery.fn.extend({ attr: function(name, value) {
         return access(this, jQuery.attr, name, value, arguments.length > 1) }, removeAttr: function(name) {
         return this.each(function() { jQuery.removeAttr(this, name) }) } }), jQuery.extend({ attr: function(elem, name, value) {
         var ret, hooks, nType = elem.nodeType;
         if (3 !== nType && 8 !== nType && 2 !== nType) return "undefined" == typeof elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === nType && jQuery.isXMLDoc(elem) || (name = name.toLowerCase(), hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook)), void 0 !== value ? null === value ? void jQuery.removeAttr(elem, name) : hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), value) : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : (ret = jQuery.find.attr(elem, name), null == ret ? void 0 : ret)) }, attrHooks: { type: { set: function(elem, value) {
               if (!support.radioValue && "radio" === value && jQuery.nodeName(elem, "input")) {
                  var val = elem.value;
                  return elem.setAttribute("type", value), val && (elem.value = val), value } } } }, removeAttr: function(elem, value) {
         var name, propName, i = 0,
            attrNames = value && value.match(rnotwhite);
         if (attrNames && 1 === elem.nodeType)
            for (; name = attrNames[i++];) propName = jQuery.propFix[name] || name, jQuery.expr.match.bool.test(name) ? getSetInput && getSetAttribute || !ruseDefault.test(name) ? elem[propName] = !1 : elem[jQuery.camelCase("default-" + name)] = elem[propName] = !1 : jQuery.attr(elem, name, ""), elem.removeAttribute(getSetAttribute ? name : propName) } }), boolHook = { set: function(elem, value, name) {
         return value === !1 ? jQuery.removeAttr(elem, name) : getSetInput && getSetAttribute || !ruseDefault.test(name) ? elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name) : elem[jQuery.camelCase("default-" + name)] = elem[name] = !0, name } }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
      var getter = attrHandle[name] || jQuery.find.attr;
      getSetInput && getSetAttribute || !ruseDefault.test(name) ? attrHandle[name] = function(elem, name, isXML) {
         var ret, handle;
         return isXML || (handle = attrHandle[name], attrHandle[name] = ret, ret = null != getter(elem, name, isXML) ? name.toLowerCase() : null, attrHandle[name] = handle), ret } : attrHandle[name] = function(elem, name, isXML) {
         if (!isXML) return elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null } }), getSetInput && getSetAttribute || (jQuery.attrHooks.value = { set: function(elem, value, name) {
         return jQuery.nodeName(elem, "input") ? void(elem.defaultValue = value) : nodeHook && nodeHook.set(elem, value, name) } }), getSetAttribute || (nodeHook = { set: function(elem, value, name) {
         var ret = elem.getAttributeNode(name);
         if (ret || elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name)), ret.value = value += "", "value" === name || value === elem.getAttribute(name)) return value } }, attrHandle.id = attrHandle.name = attrHandle.coords = function(elem, name, isXML) {
      var ret;
      if (!isXML) return (ret = elem.getAttributeNode(name)) && "" !== ret.value ? ret.value : null }, jQuery.valHooks.button = { get: function(elem, name) {
         var ret = elem.getAttributeNode(name);
         if (ret && ret.specified) return ret.value }, set: nodeHook.set }, jQuery.attrHooks.contenteditable = { set: function(elem, value, name) { nodeHook.set(elem, "" !== value && value, name) } }, jQuery.each(["width", "height"], function(i, name) { jQuery.attrHooks[name] = { set: function(elem, value) {
            if ("" === value) return elem.setAttribute(name, "auto"), value } } })), support.style || (jQuery.attrHooks.style = { get: function(elem) {
         return elem.style.cssText || void 0 }, set: function(elem, value) {
         return elem.style.cssText = value + "" } });
   var rfocusable = /^(?:input|select|textarea|button|object)$/i,
      rclickable = /^(?:a|area)$/i;
   jQuery.fn.extend({ prop: function(name, value) {
         return access(this, jQuery.prop, name, value, arguments.length > 1) }, removeProp: function(name) {
         return name = jQuery.propFix[name] || name, this.each(function() {
            try { this[name] = void 0, delete this[name] } catch (e) {} }) } }), jQuery.extend({ prop: function(elem, name, value) {
         var ret, hooks, nType = elem.nodeType;
         if (3 !== nType && 8 !== nType && 2 !== nType) return 1 === nType && jQuery.isXMLDoc(elem) || (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name] }, propHooks: { tabIndex: { get: function(elem) {
               var tabindex = jQuery.find.attr(elem, "tabindex");
               return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), support.hrefNormalized || jQuery.each(["href", "src"], function(i, name) { jQuery.propHooks[name] = { get: function(elem) {
            return elem.getAttribute(name, 4) } } }), support.optSelected || (jQuery.propHooks.selected = { get: function(elem) {
         var parent = elem.parentNode;
         return parent && (parent.selectedIndex, parent.parentNode && parent.parentNode.selectedIndex), null }, set: function(elem) {
         var parent = elem.parentNode;
         parent && (parent.selectedIndex, parent.parentNode && parent.parentNode.selectedIndex) } }), jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { jQuery.propFix[this.toLowerCase()] = this }), support.enctype || (jQuery.propFix.enctype = "encoding");
   var rclass = /[\t\r\n\f]/g;
   jQuery.fn.extend({
      addClass: function(value) {
         var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
         if (jQuery.isFunction(value)) return this.each(function(j) { jQuery(this).addClass(value.call(this, j, getClass(this))) });
         if ("string" == typeof value && value)
            for (classes = value.match(rnotwhite) || []; elem = this[i++];)
               if (curValue = getClass(elem), cur = 1 === elem.nodeType && (" " + curValue + " ").replace(rclass, " ")) {
                  for (j = 0; clazz = classes[j++];) cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
                  finalValue = jQuery.trim(cur), curValue !== finalValue && jQuery.attr(elem, "class", finalValue) }
         return this },
      removeClass: function(value) {
         var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
         if (jQuery.isFunction(value)) return this.each(function(j) { jQuery(this).removeClass(value.call(this, j, getClass(this))) });
         if (!arguments.length) return this.attr("class", "");
         if ("string" == typeof value && value)
            for (classes = value.match(rnotwhite) || []; elem = this[i++];)
               if (curValue = getClass(elem), cur = 1 === elem.nodeType && (" " + curValue + " ").replace(rclass, " ")) {
                  for (j = 0; clazz = classes[j++];)
                     for (; cur.indexOf(" " + clazz + " ") > -1;) cur = cur.replace(" " + clazz + " ", " ");
                  finalValue = jQuery.trim(cur), curValue !== finalValue && jQuery.attr(elem, "class", finalValue) }
         return this },
      toggleClass: function(value, stateVal) {
         var type = typeof value;
         return "boolean" == typeof stateVal && "string" === type ? stateVal ? this.addClass(value) : this.removeClass(value) : jQuery.isFunction(value) ? this.each(function(i) { jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal) }) : this.each(function() {
            var className, i, self, classNames;
            if ("string" === type)
               for (i = 0, self = jQuery(this), classNames = value.match(rnotwhite) || []; className = classNames[i++];) self.hasClass(className) ? self.removeClass(className) : self.addClass(className);
            else void 0 !== value && "boolean" !== type || (className = getClass(this),
               className && jQuery._data(this, "__className__", className), jQuery.attr(this, "class", className || value === !1 ? "" : jQuery._data(this, "__className__") || ""))
         })
      },
      hasClass: function(selector) {
         var className, elem, i = 0;
         for (className = " " + selector + " "; elem = this[i++];)
            if (1 === elem.nodeType && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) return !0;
         return !1 }
   }), jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(i, name) { jQuery.fn[name] = function(data, fn) {
         return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name) } }), jQuery.fn.extend({ hover: function(fnOver, fnOut) {
         return this.mouseenter(fnOver).mouseleave(fnOut || fnOver) } });
   var location = window.location,
      nonce = jQuery.now(),
      rquery = /\?/,
      rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
   jQuery.parseJSON = function(data) {
      if (window.JSON && window.JSON.parse) return window.JSON.parse(data + "");
      var requireNonComma, depth = null,
         str = jQuery.trim(data + "");
      return str && !jQuery.trim(str.replace(rvalidtokens, function(token, comma, open, close) {
         return requireNonComma && comma && (depth = 0), 0 === depth ? token : (requireNonComma = open || comma, depth += !close - !open, "") })) ? Function("return " + str)() : jQuery.error("Invalid JSON: " + data) }, jQuery.parseXML = function(data) {
      var xml, tmp;
      if (!data || "string" != typeof data) return null;
      try { window.DOMParser ? (tmp = new window.DOMParser, xml = tmp.parseFromString(data, "text/xml")) : (xml = new window.ActiveXObject("Microsoft.XMLDOM"), xml.async = "false", xml.loadXML(data)) } catch (e) { xml = void 0 }
      return xml && xml.documentElement && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), xml };
   var rhash = /#.*$/,
      rts = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,
      rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      prefilters = {},
      transports = {},
      allTypes = "*/".concat("*"),
      ajaxLocation = location.href,
      ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
   jQuery.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ajaxLocation, type: "GET", isLocal: rlocalProtocol.test(ajaxLocParts[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": allTypes, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(target, settings) {
         return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target) }, ajaxPrefilter: addToPrefiltersOrTransports(prefilters), ajaxTransport: addToPrefiltersOrTransports(transports), ajax: function(url, options) {
         function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
            2 !== state && (state = 2, timeoutTimer && window.clearTimeout(timeoutTimer), transport = void 0, responseHeadersString = headers || "", jqXHR.readyState = status > 0 ? 4 : 0, isSuccess = status >= 200 && status < 300 || 304 === status, responses && (response = ajaxHandleResponses(s, jqXHR, responses)), response = ajaxConvert(s, response, jqXHR, isSuccess), isSuccess ? (s.ifModified && (modified = jqXHR.getResponseHeader("Last-Modified"), modified && (jQuery.lastModified[cacheURL] = modified), modified = jqXHR.getResponseHeader("etag"), modified && (jQuery.etag[cacheURL] = modified)), 204 === status || "HEAD" === s.type ? statusText = "nocontent" : 304 === status ? statusText = "notmodified" : (statusText = response.state, success = response.data, error = response.error, isSuccess = !error)) : (error = statusText, !status && statusText || (statusText = "error", status < 0 && (status = 0))), jqXHR.status = status, jqXHR.statusText = (nativeStatusText || statusText) + "", isSuccess ? deferred.resolveWith(callbackContext, [success, statusText, jqXHR]) : deferred.rejectWith(callbackContext, [jqXHR, statusText, error]), jqXHR.statusCode(statusCode), statusCode = void 0, fireGlobals && globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]), completeDeferred.fireWith(callbackContext, [jqXHR, statusText]), fireGlobals && (globalEventContext.trigger("ajaxComplete", [jqXHR, s]), --jQuery.active || jQuery.event.trigger("ajaxStop"))) } "object" == typeof url && (options = url, url = void 0), options = options || {};
         var parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options),
            callbackContext = s.context || s,
            globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
            deferred = jQuery.Deferred(),
            completeDeferred = jQuery.Callbacks("once memory"),
            statusCode = s.statusCode || {},
            requestHeaders = {},
            requestHeadersNames = {},
            state = 0,
            strAbort = "canceled",
            jqXHR = { readyState: 0, getResponseHeader: function(key) {
                  var match;
                  if (2 === state) {
                     if (!responseHeaders)
                        for (responseHeaders = {}; match = rheaders.exec(responseHeadersString);) responseHeaders[match[1].toLowerCase()] = match[2];
                     match = responseHeaders[key.toLowerCase()] }
                  return null == match ? null : match }, getAllResponseHeaders: function() {
                  return 2 === state ? responseHeadersString : null }, setRequestHeader: function(name, value) {
                  var lname = name.toLowerCase();
                  return state || (name = requestHeadersNames[lname] = requestHeadersNames[lname] || name, requestHeaders[name] = value), this }, overrideMimeType: function(type) {
                  return state || (s.mimeType = type), this }, statusCode: function(map) {
                  var code;
                  if (map)
                     if (state < 2)
                        for (code in map) statusCode[code] = [statusCode[code], map[code]];
                     else jqXHR.always(map[jqXHR.status]);
                  return this }, abort: function(statusText) {
                  var finalText = statusText || strAbort;
                  return transport && transport.abort(finalText), done(0, finalText), this } };
         if (deferred.promise(jqXHR).complete = completeDeferred.add, jqXHR.success = jqXHR.done, jqXHR.error = jqXHR.fail, s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""], null == s.crossDomain && (parts = rurl.exec(s.url.toLowerCase()), s.crossDomain = !(!parts || parts[1] === ajaxLocParts[1] && parts[2] === ajaxLocParts[2] && (parts[3] || ("http:" === parts[1] ? "80" : "443")) === (ajaxLocParts[3] || ("http:" === ajaxLocParts[1] ? "80" : "443")))), s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), 2 === state) return jqXHR;
         fireGlobals = jQuery.event && s.global, fireGlobals && 0 === jQuery.active++ && jQuery.event.trigger("ajaxStart"), s.type = s.type.toUpperCase(), s.hasContent = !rnoContent.test(s.type), cacheURL = s.url, s.hasContent || (s.data && (cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data, delete s.data), s.cache === !1 && (s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++)), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), (s.data && s.hasContent && s.contentType !== !1 || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType), jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
         for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
         if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === !1 || 2 === state)) return jqXHR.abort();
         strAbort = "abort";
         for (i in { success: 1, error: 1, complete: 1 }) jqXHR[i](s[i]);
         if (transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
            if (jqXHR.readyState = 1, fireGlobals && globalEventContext.trigger("ajaxSend", [jqXHR, s]), 2 === state) return jqXHR;
            s.async && s.timeout > 0 && (timeoutTimer = window.setTimeout(function() { jqXHR.abort("timeout") }, s.timeout));
            try { state = 1, transport.send(requestHeaders, done) } catch (e) {
               if (!(state < 2)) throw e;
               done(-1, e) } } else done(-1, "No Transport");
         return jqXHR }, getJSON: function(url, data, callback) {
         return jQuery.get(url, data, callback, "json") }, getScript: function(url, callback) {
         return jQuery.get(url, void 0, callback, "script") } }), jQuery.each(["get", "post"], function(i, method) { jQuery[method] = function(url, data, callback, type) {
         return jQuery.isFunction(data) && (type = type || callback, callback = data, data = void 0), jQuery.ajax(jQuery.extend({ url: url, type: method, dataType: type, data: data, success: callback }, jQuery.isPlainObject(url) && url)) } }), jQuery._evalUrl = function(url) {
      return jQuery.ajax({ url: url, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, jQuery.fn.extend({ wrapAll: function(html) {
         if (jQuery.isFunction(html)) return this.each(function(i) { jQuery(this).wrapAll(html.call(this, i)) });
         if (this[0]) {
            var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && wrap.insertBefore(this[0]), wrap.map(function() {
               for (var elem = this; elem.firstChild && 1 === elem.firstChild.nodeType;) elem = elem.firstChild;
               return elem }).append(this) }
         return this }, wrapInner: function(html) {
         return jQuery.isFunction(html) ? this.each(function(i) { jQuery(this).wrapInner(html.call(this, i)) }) : this.each(function() {
            var self = jQuery(this),
               contents = self.contents();
            contents.length ? contents.wrapAll(html) : self.append(html) }) }, wrap: function(html) {
         var isFunction = jQuery.isFunction(html);
         return this.each(function(i) { jQuery(this).wrapAll(isFunction ? html.call(this, i) : html) }) }, unwrap: function() {
         return this.parent().each(function() { jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes) }).end() } }), jQuery.expr.filters.hidden = function(elem) {
      return support.reliableHiddenOffsets() ? elem.offsetWidth <= 0 && elem.offsetHeight <= 0 && !elem.getClientRects().length : filterHidden(elem) }, jQuery.expr.filters.visible = function(elem) {
      return !jQuery.expr.filters.hidden(elem) };
   var r20 = /%20/g,
      rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;
   jQuery.param = function(a, traditional) {
      var prefix, s = [],
         add = function(key, value) { value = jQuery.isFunction(value) ? value() : null == value ? "" : value, s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value) };
      if (void 0 === traditional && (traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional), jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, function() { add(this.name, this.value) });
      else
         for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
      return s.join("&").replace(r20, "+") }, jQuery.fn.extend({ serialize: function() {
         return jQuery.param(this.serializeArray()) }, serializeArray: function() {
         return this.map(function() {
            var elements = jQuery.prop(this, "elements");
            return elements ? jQuery.makeArray(elements) : this }).filter(function() {
            var type = this.type;
            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type)) }).map(function(i, elem) {
            var val = jQuery(this).val();
            return null == val ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
               return { name: elem.name, value: val.replace(rCRLF, "\r\n") } }) : { name: elem.name, value: val.replace(rCRLF, "\r\n") } }).get() } }), jQuery.ajaxSettings.xhr = void 0 !== window.ActiveXObject ? function() {
      return this.isLocal ? createActiveXHR() : document.documentMode > 8 ? createStandardXHR() : /^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR() } : createStandardXHR;
   var xhrId = 0,
      xhrCallbacks = {},
      xhrSupported = jQuery.ajaxSettings.xhr();
   window.attachEvent && window.attachEvent("onunload", function() {
      for (var key in xhrCallbacks) xhrCallbacks[key](void 0, !0) }), support.cors = !!xhrSupported && "withCredentials" in xhrSupported, xhrSupported = support.ajax = !!xhrSupported, xhrSupported && jQuery.ajaxTransport(function(options) {
      if (!options.crossDomain || support.cors) {
         var callback;
         return { send: function(headers, complete) {
               var i, xhr = options.xhr(),
                  id = ++xhrId;
               if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields)
                  for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
               options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), options.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest");
               for (i in headers) void 0 !== headers[i] && xhr.setRequestHeader(i, headers[i] + "");
               xhr.send(options.hasContent && options.data || null), callback = function(_, isAbort) {
                  var status, statusText, responses;
                  if (callback && (isAbort || 4 === xhr.readyState))
                     if (delete xhrCallbacks[id], callback = void 0, xhr.onreadystatechange = jQuery.noop, isAbort) 4 !== xhr.readyState && xhr.abort();
                     else { responses = {}, status = xhr.status, "string" == typeof xhr.responseText && (responses.text = xhr.responseText);
                        try { statusText = xhr.statusText } catch (e) { statusText = "" }
                        status || !options.isLocal || options.crossDomain ? 1223 === status && (status = 204) : status = responses.text ? 200 : 404 }
                  responses && complete(status, statusText, responses, xhr.getAllResponseHeaders()) }, options.async ? 4 === xhr.readyState ? window.setTimeout(callback) : xhr.onreadystatechange = xhrCallbacks[id] = callback : callback() }, abort: function() { callback && callback(void 0, !0) } } } }), jQuery.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(text) {
            return jQuery.globalEval(text), text } } }), jQuery.ajaxPrefilter("script", function(s) { void 0 === s.cache && (s.cache = !1), s.crossDomain && (s.type = "GET", s.global = !1) }), jQuery.ajaxTransport("script", function(s) {
      if (s.crossDomain) {
         var script, head = document.head || jQuery("head")[0] || document.documentElement;
         return { send: function(_, callback) { script = document.createElement("script"), script.async = !0, s.scriptCharset && (script.charset = s.scriptCharset), script.src = s.url, script.onload = script.onreadystatechange = function(_, isAbort) {
                  (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) && (script.onload = script.onreadystatechange = null, script.parentNode && script.parentNode.removeChild(script), script = null, isAbort || callback(200, "success")) }, head.insertBefore(script, head.firstChild) }, abort: function() { script && script.onload(void 0, !0) } } } });
   var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/;
   jQuery.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
         var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
         return this[callback] = !0, callback } }), jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
      var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== !1 && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
      if (jsonProp || "jsonp" === s.dataTypes[0]) return callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : s.jsonp !== !1 && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
         return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0] }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() { responseContainer = arguments }, jqXHR.always(function() { void 0 === overwritten ? jQuery(window).removeProp(callbackName) : window[callbackName] = overwritten, s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback, oldCallbacks.push(callbackName)), responseContainer && jQuery.isFunction(overwritten) && overwritten(responseContainer[0]), responseContainer = overwritten = void 0 }), "script" }), jQuery.parseHTML = function(data, context, keepScripts) {
      if (!data || "string" != typeof data) return null; "boolean" == typeof context && (keepScripts = context, context = !1), context = context || document;
      var parsed = rsingleTag.exec(data),
         scripts = !keepScripts && [];
      return parsed ? [context.createElement(parsed[1])] : (parsed = buildFragment([data], context, scripts), scripts && scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes)) };
   var _load = jQuery.fn.load;
   jQuery.fn.load = function(url, params, callback) {
      if ("string" != typeof url && _load) return _load.apply(this, arguments);
      var selector, type, response, self = this,
         off = url.indexOf(" ");
      return off > -1 && (selector = jQuery.trim(url.slice(off, url.length)), url = url.slice(0, off)), jQuery.isFunction(params) ? (callback = params, params = void 0) : params && "object" == typeof params && (type = "POST"), self.length > 0 && jQuery.ajax({ url: url, type: type || "GET", dataType: "html", data: params }).done(function(responseText) { response = arguments, self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText) }).always(callback && function(jqXHR, status) { self.each(function() { callback.apply(this, response || [jqXHR.responseText, status, jqXHR]) }) }), this }, jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) { jQuery.fn[type] = function(fn) {
         return this.on(type, fn) } }), jQuery.expr.filters.animated = function(elem) {
      return jQuery.grep(jQuery.timers, function(fn) {
         return elem === fn.elem }).length }, jQuery.offset = { setOffset: function(elem, options, i) {
         var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"),
            curElem = jQuery(elem),
            props = {}; "static" === position && (elem.style.position = "relative"), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = ("absolute" === position || "fixed" === position) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1, calculatePosition ? (curPosition = curElem.position(), curTop = curPosition.top, curLeft = curPosition.left) : (curTop = parseFloat(curCSSTop) || 0, curLeft = parseFloat(curCSSLeft) || 0), jQuery.isFunction(options) && (options = options.call(elem, i, jQuery.extend({}, curOffset))), null != options.top && (props.top = options.top - curOffset.top + curTop), null != options.left && (props.left = options.left - curOffset.left + curLeft), "using" in options ? options.using.call(elem, props) : curElem.css(props) } }, jQuery.fn.extend({ offset: function(options) {
         if (arguments.length) return void 0 === options ? this : this.each(function(i) { jQuery.offset.setOffset(this, options, i) });
         var docElem, win, box = { top: 0, left: 0 },
            elem = this[0],
            doc = elem && elem.ownerDocument;
         if (doc) return docElem = doc.documentElement, jQuery.contains(docElem, elem) ? ("undefined" != typeof elem.getBoundingClientRect && (box = elem.getBoundingClientRect()), win = getWindow(doc), { top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0), left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0) }) : box }, position: function() {
         if (this[0]) {
            var offsetParent, offset, parentOffset = { top: 0, left: 0 },
               elem = this[0];
            return "fixed" === jQuery.css(elem, "position") ? offset = elem.getBoundingClientRect() : (offsetParent = this.offsetParent(), offset = this.offset(), jQuery.nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", !0), parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", !0)), { top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0), left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0) } } }, offsetParent: function() {
         return this.map(function() {
            for (var offsetParent = this.offsetParent; offsetParent && !jQuery.nodeName(offsetParent, "html") && "static" === jQuery.css(offsetParent, "position");) offsetParent = offsetParent.offsetParent;
            return offsetParent || documentElement }) } }), jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
      var top = /Y/.test(prop);
      jQuery.fn[method] = function(val) {
         return access(this, function(elem, method, val) {
            var win = getWindow(elem);
            return void 0 === val ? win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method] : void(win ? win.scrollTo(top ? jQuery(win).scrollLeft() : val, top ? val : jQuery(win).scrollTop()) : elem[method] = val) }, method, val, arguments.length, null) } }), jQuery.each(["top", "left"], function(i, prop) { jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
         if (computed) return computed = curCSS(elem, prop), rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed }) }), jQuery.each({ Height: "height", Width: "width" }, function(name, type) { jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function(defaultExtra, funcName) { jQuery.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin),
               extra = defaultExtra || (margin === !0 || value === !0 ? "margin" : "border");
            return access(this, function(elem, type, value) {
               var doc;
               return jQuery.isWindow(elem) ? elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement, Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === value ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra) }, type, chainable ? margin : void 0, chainable, null) } }) }), jQuery.fn.extend({ bind: function(types, data, fn) {
         return this.on(types, null, data, fn) }, unbind: function(types, fn) {
         return this.off(types, null, fn) }, delegate: function(selector, types, data, fn) {
         return this.on(types, selector, data, fn) }, undelegate: function(selector, types, fn) {
         return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn) } }), jQuery.fn.size = function() {
      return this.length }, jQuery.fn.andSelf = jQuery.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
      return jQuery });
   var _jQuery = window.jQuery,
      _$ = window.$;
   return jQuery.noConflict = function(deep) {
      return window.$ === jQuery && (window.$ = _$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery }, noGlobal || (window.jQuery = window.$ = jQuery), jQuery
}),
function($, window, document, undefined) { $.fn.doubleTapToGo = function(params) {
      return !!("ontouchstart" in window || navigator.msMaxTouchPoints || navigator.userAgent.toLowerCase().match(/windows phone os 7/i)) && (this.each(function() {
         var curItem = !1;
         $(this).on("click", function(e) {
            var item = $(this);
            item[0] != curItem[0] && (e.preventDefault(), curItem = item) }), $(document).on("click touchstart MSPointerDown", function(e) {
            for (var resetItem = !0, parents = $(e.target).parents(), i = 0; i < parents.length; i++) parents[i] == curItem[0] && (resetItem = !1);
            resetItem && (curItem = !1) }) }), this) } }(jQuery, window, document),
function(factory) { "function" == typeof define && define.amd ? define(["jquery"], factory) : factory("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function($) {
   var mfp, _prevStatus, _document, _prevContentType, _wrapClasses, _currPopupType, CLOSE_EVENT = "Close",
      BEFORE_CLOSE_EVENT = "BeforeClose",
      AFTER_CLOSE_EVENT = "AfterClose",
      BEFORE_APPEND_EVENT = "BeforeAppend",
      MARKUP_PARSE_EVENT = "MarkupParse",
      OPEN_EVENT = "Open",
      CHANGE_EVENT = "Change",
      NS = "mfp",
      EVENT_NS = "." + NS,
      READY_CLASS = "mfp-ready",
      REMOVING_CLASS = "mfp-removing",
      PREVENT_CLOSE_CLASS = "mfp-prevent-close",
      MagnificPopup = function() {},
      _isJQ = !!window.jQuery,
      _window = $(window),
      _mfpOn = function(name, f) { mfp.ev.on(NS + name + EVENT_NS, f) },
      _getEl = function(className, appendTo, html, raw) {
         var el = document.createElement("div");
         return el.className = "mfp-" + className, html && (el.innerHTML = html), raw ? appendTo && appendTo.appendChild(el) : (el = $(el), appendTo && el.appendTo(appendTo)), el },
      _mfpTrigger = function(e, data) { mfp.ev.triggerHandler(NS + e, data), mfp.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1), mfp.st.callbacks[e] && mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data])) },
      _getCloseBtn = function(type) {
         return type === _currPopupType && mfp.currTemplate.closeBtn || (mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace("%title%", mfp.st.tClose)), _currPopupType = type), mfp.currTemplate.closeBtn },
      _checkInstance = function() { $.magnificPopup.instance || (mfp = new MagnificPopup, mfp.init(), $.magnificPopup.instance = mfp) },
      supportsTransitions = function() {
         var s = document.createElement("p").style,
            v = ["ms", "O", "Moz", "Webkit"];
         if (void 0 !== s.transition) return !0;
         for (; v.length;)
            if (v.pop() + "Transition" in s) return !0;
         return !1 };
   MagnificPopup.prototype = {
      constructor: MagnificPopup,
      init: function() {
         var appVersion = navigator.appVersion;
         mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener, mfp.isAndroid = /android/gi.test(appVersion), mfp.isIOS = /iphone|ipad|ipod/gi.test(appVersion), mfp.supportsTransition = supportsTransitions(), mfp.probablyMobile = mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), _document = $(document), mfp.popupsCache = {} },
      open: function(data) {
         var i;
         if (data.isObj === !1) { mfp.items = data.items.toArray(), mfp.index = 0;
            var item, items = data.items;
            for (i = 0; i < items.length; i++)
               if (item = items[i], item.parsed && (item = item.el[0]), item === data.el[0]) { mfp.index = i;
                  break } } else mfp.items = $.isArray(data.items) ? data.items : [data.items], mfp.index = data.index || 0;
         if (mfp.isOpen) return void mfp.updateItemHTML();
         mfp.types = [], _wrapClasses = "", data.mainEl && data.mainEl.length ? mfp.ev = data.mainEl.eq(0) : mfp.ev = _document, data.key ? (mfp.popupsCache[data.key] || (mfp.popupsCache[data.key] = {}), mfp.currTemplate = mfp.popupsCache[data.key]) : mfp.currTemplate = {}, mfp.st = $.extend(!0, {}, $.magnificPopup.defaults, data), mfp.fixedContentPos = "auto" === mfp.st.fixedContentPos ? !mfp.probablyMobile : mfp.st.fixedContentPos, mfp.st.modal && (mfp.st.closeOnContentClick = !1, mfp.st.closeOnBgClick = !1, mfp.st.showCloseBtn = !1, mfp.st.enableEscapeKey = !1), mfp.bgOverlay || (mfp.bgOverlay = _getEl("bg").on("click" + EVENT_NS, function() { mfp.close() }), mfp.wrap = _getEl("wrap").attr("tabindex", -1).on("click" + EVENT_NS, function(e) { mfp._checkIfClose(e.target) && mfp.close() }), mfp.container = _getEl("container", mfp.wrap)), mfp.contentContainer = _getEl("content"), mfp.st.preloader && (mfp.preloader = _getEl("preloader", mfp.container, mfp.st.tLoading));
         var modules = $.magnificPopup.modules;
         for (i = 0; i < modules.length; i++) {
            var n = modules[i];
            n = n.charAt(0).toUpperCase() + n.slice(1), mfp["init" + n].call(mfp) }
         _mfpTrigger("BeforeOpen"), mfp.st.showCloseBtn && (mfp.st.closeBtnInside ? (_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) { values.close_replaceWith = _getCloseBtn(item.type) }), _wrapClasses += " mfp-close-btn-in") : mfp.wrap.append(_getCloseBtn())), mfp.st.alignTop && (_wrapClasses += " mfp-align-top"), mfp.fixedContentPos ? mfp.wrap.css({ overflow: mfp.st.overflowY, overflowX: "hidden", overflowY: mfp.st.overflowY }) : mfp.wrap.css({ top: _window.scrollTop(), position: "absolute" }), (mfp.st.fixedBgPos === !1 || "auto" === mfp.st.fixedBgPos && !mfp.fixedContentPos) && mfp.bgOverlay.css({ height: _document.height(), position: "absolute" }), mfp.st.enableEscapeKey && _document.on("keyup" + EVENT_NS, function(e) { 27 === e.keyCode && mfp.close() }), _window.on("resize" + EVENT_NS, function() { mfp.updateSize() }), mfp.st.closeOnContentClick || (_wrapClasses += " mfp-auto-cursor"), _wrapClasses && mfp.wrap.addClass(_wrapClasses);
         var windowHeight = mfp.wH = _window.height(),
            windowStyles = {};
         if (mfp.fixedContentPos && mfp._hasScrollBar(windowHeight)) {
            var s = mfp._getScrollbarSize();
            s && (windowStyles.marginRight = s) }
         mfp.fixedContentPos && (mfp.isIE7 ? $("body, html").css("overflow", "hidden") : windowStyles.overflow = "hidden");
         var classesToadd = mfp.st.mainClass;
         return mfp.isIE7 && (classesToadd += " mfp-ie7"), classesToadd && mfp._addClassToMFP(classesToadd), mfp.updateItemHTML(), _mfpTrigger("BuildControls"), $("html").css(windowStyles), mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body)), mfp._lastFocusedEl = document.activeElement, setTimeout(function() { mfp.content ? (mfp._addClassToMFP(READY_CLASS), mfp._setFocus()) : mfp.bgOverlay.addClass(READY_CLASS), _document.on("focusin" + EVENT_NS, mfp._onFocusIn) }, 16), mfp.isOpen = !0, mfp.updateSize(windowHeight), _mfpTrigger(OPEN_EVENT), data },
      close: function() { mfp.isOpen && (_mfpTrigger(BEFORE_CLOSE_EVENT), mfp.isOpen = !1, mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition ? (mfp._addClassToMFP(REMOVING_CLASS), setTimeout(function() { mfp._close() }, mfp.st.removalDelay)) : mfp._close()) },
      _close: function() { _mfpTrigger(CLOSE_EVENT);
         var classesToRemove = REMOVING_CLASS + " " + READY_CLASS + " ";
         if (mfp.bgOverlay.detach(), mfp.wrap.detach(), mfp.container.empty(), mfp.st.mainClass && (classesToRemove += mfp.st.mainClass + " "), mfp._removeClassFromMFP(classesToRemove), mfp.fixedContentPos) {
            var windowStyles = { marginRight: "" };
            mfp.isIE7 ? $("body, html").css("overflow", "") : windowStyles.overflow = "", $("html").css(windowStyles) }
         _document.off("keyup" + EVENT_NS + " focusin" + EVENT_NS), mfp.ev.off(EVENT_NS), mfp.wrap.attr("class", "mfp-wrap").removeAttr("style"), mfp.bgOverlay.attr("class", "mfp-bg"), mfp.container.attr("class", "mfp-container"), !mfp.st.showCloseBtn || mfp.st.closeBtnInside && mfp.currTemplate[mfp.currItem.type] !== !0 || mfp.currTemplate.closeBtn && mfp.currTemplate.closeBtn.detach(), mfp.st.autoFocusLast && mfp._lastFocusedEl && $(mfp._lastFocusedEl).focus(), mfp.currItem = null, mfp.content = null, mfp.currTemplate = null, mfp.prevHeight = 0, _mfpTrigger(AFTER_CLOSE_EVENT) },
      updateSize: function(winHeight) {
         if (mfp.isIOS) {
            var zoomLevel = document.documentElement.clientWidth / window.innerWidth,
               height = window.innerHeight * zoomLevel;
            mfp.wrap.css("height", height), mfp.wH = height } else mfp.wH = winHeight || _window.height();
         mfp.fixedContentPos || mfp.wrap.css("height", mfp.wH), _mfpTrigger("Resize") },
      updateItemHTML: function() {
         var item = mfp.items[mfp.index];
         mfp.contentContainer.detach(), mfp.content && mfp.content.detach(), item.parsed || (item = mfp.parseEl(mfp.index));
         var type = item.type;
         if (_mfpTrigger("BeforeChange", [mfp.currItem ? mfp.currItem.type : "", type]), mfp.currItem = item, !mfp.currTemplate[type]) {
            var markup = !!mfp.st[type] && mfp.st[type].markup;
            _mfpTrigger("FirstMarkupParse", markup), markup ? mfp.currTemplate[type] = $(markup) : mfp.currTemplate[type] = !0 }
         _prevContentType && _prevContentType !== item.type && mfp.container.removeClass("mfp-" + _prevContentType + "-holder");
         var newContent = mfp["get" + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
         mfp.appendContent(newContent, type), item.preloaded = !0, _mfpTrigger(CHANGE_EVENT, item), _prevContentType = item.type, mfp.container.prepend(mfp.contentContainer), _mfpTrigger("AfterChange") },
      appendContent: function(newContent, type) { mfp.content = newContent, newContent ? mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === !0 ? mfp.content.find(".mfp-close").length || mfp.content.append(_getCloseBtn()) : mfp.content = newContent : mfp.content = "", _mfpTrigger(BEFORE_APPEND_EVENT), mfp.container.addClass("mfp-" + type + "-holder"), mfp.contentContainer.append(mfp.content) },
      parseEl: function(index) {
         var type, item = mfp.items[index];
         if (item.tagName ? item = { el: $(item) } : (type = item.type, item = { data: item, src: item.src }), item.el) {
            for (var types = mfp.types, i = 0; i < types.length; i++)
               if (item.el.hasClass("mfp-" + types[i])) { type = types[i];
                  break }
            item.src = item.el.attr("data-mfp-src"), item.src || (item.src = item.el.attr("href")) }
         return item.type = type || mfp.st.type || "inline", item.index = index, item.parsed = !0, mfp.items[index] = item, _mfpTrigger("ElementParse", item), mfp.items[index] },
      addGroup: function(el, options) {
         var eHandler = function(e) { e.mfpEl = this, mfp._openClick(e, el, options) };
         options || (options = {});
         var eName = "click.magnificPopup";
         options.mainEl = el, options.items ? (options.isObj = !0, el.off(eName).on(eName, eHandler)) : (options.isObj = !1, options.delegate ? el.off(eName).on(eName, options.delegate, eHandler) : (options.items = el, el.off(eName).on(eName, eHandler))) },
      _openClick: function(e, el, options) {
         var midClick = void 0 !== options.midClick ? options.midClick : $.magnificPopup.defaults.midClick;
         if (midClick || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
            var disableOn = void 0 !== options.disableOn ? options.disableOn : $.magnificPopup.defaults.disableOn;
            if (disableOn)
               if ($.isFunction(disableOn)) {
                  if (!disableOn.call(mfp)) return !0 } else if (_window.width() < disableOn) return !0;
            e.type && (e.preventDefault(), mfp.isOpen && e.stopPropagation()), options.el = $(e.mfpEl), options.delegate && (options.items = el.find(options.delegate)), mfp.open(options) } },
      updateStatus: function(status, text) {
         if (mfp.preloader) {
            _prevStatus !== status && mfp.container.removeClass("mfp-s-" + _prevStatus), text || "loading" !== status || (text = mfp.st.tLoading);
            var data = { status: status, text: text };
            _mfpTrigger("UpdateStatus", data), status = data.status,
               text = data.text, mfp.preloader.html(text), mfp.preloader.find("a").on("click", function(e) { e.stopImmediatePropagation() }), mfp.container.addClass("mfp-s-" + status), _prevStatus = status
         }
      },
      _checkIfClose: function(target) {
         if (!$(target).hasClass(PREVENT_CLOSE_CLASS)) {
            var closeOnContent = mfp.st.closeOnContentClick,
               closeOnBg = mfp.st.closeOnBgClick;
            if (closeOnContent && closeOnBg) return !0;
            if (!mfp.content || $(target).hasClass("mfp-close") || mfp.preloader && target === mfp.preloader[0]) return !0;
            if (target === mfp.content[0] || $.contains(mfp.content[0], target)) {
               if (closeOnContent) return !0 } else if (closeOnBg && $.contains(document, target)) return !0;
            return !1 } },
      _addClassToMFP: function(cName) { mfp.bgOverlay.addClass(cName), mfp.wrap.addClass(cName) },
      _removeClassFromMFP: function(cName) { this.bgOverlay.removeClass(cName), mfp.wrap.removeClass(cName) },
      _hasScrollBar: function(winHeight) {
         return (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) },
      _setFocus: function() {
         (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus() },
      _onFocusIn: function(e) {
         if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) return mfp._setFocus(), !1 },
      _parseMarkup: function(template, values, item) {
         var arr;
         item.data && (values = $.extend(item.data, values)), _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]), $.each(values, function(key, value) {
            if (void 0 === value || value === !1) return !0;
            if (arr = key.split("_"), arr.length > 1) {
               var el = template.find(EVENT_NS + "-" + arr[0]);
               if (el.length > 0) {
                  var attr = arr[1]; "replaceWith" === attr ? el[0] !== value[0] && el.replaceWith(value) : "img" === attr ? el.is("img") ? el.attr("src", value) : el.replaceWith($("<img>").attr("src", value).attr("class", el.attr("class"))) : el.attr(arr[1], value) } } else template.find(EVENT_NS + "-" + key).html(value) }) },
      _getScrollbarSize: function() {
         if (void 0 === mfp.scrollbarSize) {
            var scrollDiv = document.createElement("div");
            scrollDiv.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(scrollDiv), mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth, document.body.removeChild(scrollDiv) }
         return mfp.scrollbarSize }
   }, $.magnificPopup = { instance: null, proto: MagnificPopup.prototype, modules: [], open: function(options, index) {
         return _checkInstance(), options = options ? $.extend(!0, {}, options) : {}, options.isObj = !0, options.index = index || 0, this.instance.open(options) }, close: function() {
         return $.magnificPopup.instance && $.magnificPopup.instance.close() }, registerModule: function(name, module) { module.options && ($.magnificPopup.defaults[name] = module.options), $.extend(this.proto, module.proto), this.modules.push(name) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, $.fn.magnificPopup = function(options) { _checkInstance();
      var jqEl = $(this);
      if ("string" == typeof options)
         if ("open" === options) {
            var items, itemOpts = _isJQ ? jqEl.data("magnificPopup") : jqEl[0].magnificPopup,
               index = parseInt(arguments[1], 10) || 0;
            itemOpts.items ? items = itemOpts.items[index] : (items = jqEl, itemOpts.delegate && (items = items.find(itemOpts.delegate)), items = items.eq(index)), mfp._openClick({ mfpEl: items }, jqEl, itemOpts) } else mfp.isOpen && mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
      else options = $.extend(!0, {}, options), _isJQ ? jqEl.data("magnificPopup", options) : jqEl[0].magnificPopup = options, mfp.addGroup(jqEl, options);
      return jqEl };
   var _hiddenClass, _inlinePlaceholder, _lastInlineElement, INLINE_NS = "inline",
      _putInlineElementsBack = function() { _lastInlineElement && (_inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach(), _lastInlineElement = null) };
   $.magnificPopup.registerModule(INLINE_NS, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function() { mfp.types.push(INLINE_NS), _mfpOn(CLOSE_EVENT + "." + INLINE_NS, function() { _putInlineElementsBack() }) }, getInline: function(item, template) {
            if (_putInlineElementsBack(), item.src) {
               var inlineSt = mfp.st.inline,
                  el = $(item.src);
               if (el.length) {
                  var parent = el[0].parentNode;
                  parent && parent.tagName && (_inlinePlaceholder || (_hiddenClass = inlineSt.hiddenClass, _inlinePlaceholder = _getEl(_hiddenClass), _hiddenClass = "mfp-" + _hiddenClass), _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass)), mfp.updateStatus("ready") } else mfp.updateStatus("error", inlineSt.tNotFound), el = $("<div>");
               return item.inlineElement = el, el }
            return mfp.updateStatus("ready"), mfp._parseMarkup(template, {}, item), template } } });
   var _ajaxCur, AJAX_NS = "ajax",
      _removeAjaxCursor = function() { _ajaxCur && $(document.body).removeClass(_ajaxCur) },
      _destroyAjaxRequest = function() { _removeAjaxCursor(), mfp.req && mfp.req.abort() };
   $.magnificPopup.registerModule(AJAX_NS, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function() { mfp.types.push(AJAX_NS), _ajaxCur = mfp.st.ajax.cursor, _mfpOn(CLOSE_EVENT + "." + AJAX_NS, _destroyAjaxRequest), _mfpOn("BeforeChange." + AJAX_NS, _destroyAjaxRequest) }, getAjax: function(item) { _ajaxCur && $(document.body).addClass(_ajaxCur), mfp.updateStatus("loading");
            var opts = $.extend({ url: item.src, success: function(data, textStatus, jqXHR) {
                  var temp = { data: data, xhr: jqXHR };
                  _mfpTrigger("ParseAjax", temp), mfp.appendContent($(temp.data), AJAX_NS), item.finished = !0, _removeAjaxCursor(), mfp._setFocus(), setTimeout(function() { mfp.wrap.addClass(READY_CLASS) }, 16), mfp.updateStatus("ready"), _mfpTrigger("AjaxContentAdded") }, error: function() { _removeAjaxCursor(), item.finished = item.loadError = !0, mfp.updateStatus("error", mfp.st.ajax.tError.replace("%url%", item.src)) } }, mfp.st.ajax.settings);
            return mfp.req = $.ajax(opts), "" } } });
   var _imgInterval, _getTitle = function(item) {
      if (item.data && void 0 !== item.data.title) return item.data.title;
      var src = mfp.st.image.titleSrc;
      if (src) {
         if ($.isFunction(src)) return src.call(mfp, item);
         if (item.el) return item.el.attr(src) || "" }
      return "" };
   $.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function() {
            var imgSt = mfp.st.image,
               ns = ".image";
            mfp.types.push("image"), _mfpOn(OPEN_EVENT + ns, function() { "image" === mfp.currItem.type && imgSt.cursor && $(document.body).addClass(imgSt.cursor) }), _mfpOn(CLOSE_EVENT + ns, function() { imgSt.cursor && $(document.body).removeClass(imgSt.cursor), _window.off("resize" + EVENT_NS) }), _mfpOn("Resize" + ns, mfp.resizeImage), mfp.isLowIE && _mfpOn("AfterChange", mfp.resizeImage) }, resizeImage: function() {
            var item = mfp.currItem;
            if (item && item.img && mfp.st.image.verticalFit) {
               var decr = 0;
               mfp.isLowIE && (decr = parseInt(item.img.css("padding-top"), 10) + parseInt(item.img.css("padding-bottom"), 10)), item.img.css("max-height", mfp.wH - decr) } }, _onImageHasSize: function(item) { item.img && (item.hasSize = !0, _imgInterval && clearInterval(_imgInterval), item.isCheckingImgSize = !1, _mfpTrigger("ImageHasSize", item), item.imgHidden && (mfp.content && mfp.content.removeClass("mfp-loading"), item.imgHidden = !1)) }, findImageSize: function(item) {
            var counter = 0,
               img = item.img[0],
               mfpSetInterval = function(delay) { _imgInterval && clearInterval(_imgInterval), _imgInterval = setInterval(function() {
                     return img.naturalWidth > 0 ? void mfp._onImageHasSize(item) : (counter > 200 && clearInterval(_imgInterval), counter++, void(3 === counter ? mfpSetInterval(10) : 40 === counter ? mfpSetInterval(50) : 100 === counter && mfpSetInterval(500))) }, delay) };
            mfpSetInterval(1) }, getImage: function(item, template) {
            var guard = 0,
               onLoadComplete = function() { item && (item.img[0].complete ? (item.img.off(".mfploader"), item === mfp.currItem && (mfp._onImageHasSize(item), mfp.updateStatus("ready")), item.hasSize = !0, item.loaded = !0, _mfpTrigger("ImageLoadComplete")) : (guard++, guard < 200 ? setTimeout(onLoadComplete, 100) : onLoadError())) },
               onLoadError = function() { item && (item.img.off(".mfploader"), item === mfp.currItem && (mfp._onImageHasSize(item), mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src))), item.hasSize = !0, item.loaded = !0, item.loadError = !0) },
               imgSt = mfp.st.image,
               el = template.find(".mfp-img");
            if (el.length) {
               var img = document.createElement("img");
               img.className = "mfp-img", item.el && item.el.find("img").length && (img.alt = item.el.find("img").attr("alt")), item.img = $(img).on("load.mfploader", onLoadComplete).on("error.mfploader", onLoadError), img.src = item.src, el.is("img") && (item.img = item.img.clone()), img = item.img[0], img.naturalWidth > 0 ? item.hasSize = !0 : img.width || (item.hasSize = !1) }
            return mfp._parseMarkup(template, { title: _getTitle(item), img_replaceWith: item.img }, item), mfp.resizeImage(), item.hasSize ? (_imgInterval && clearInterval(_imgInterval), item.loadError ? (template.addClass("mfp-loading"), mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src))) : (template.removeClass("mfp-loading"), mfp.updateStatus("ready")), template) : (mfp.updateStatus("loading"), item.loading = !0, item.hasSize || (item.imgHidden = !0, template.addClass("mfp-loading"), mfp.findImageSize(item)), template) } } });
   var hasMozTransform, getHasMozTransform = function() {
      return void 0 === hasMozTransform && (hasMozTransform = void 0 !== document.createElement("p").style.MozTransform), hasMozTransform };
   $.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(element) {
            return element.is("img") ? element : element.find("img") } }, proto: { initZoom: function() {
            var image, zoomSt = mfp.st.zoom,
               ns = ".zoom";
            if (zoomSt.enabled && mfp.supportsTransition) {
               var openTimeout, animatedImg, duration = zoomSt.duration,
                  getElToAnimate = function(image) {
                     var newImg = image.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                        transition = "all " + zoomSt.duration / 1e3 + "s " + zoomSt.easing,
                        cssObj = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                        t = "transition";
                     return cssObj["-webkit-" + t] = cssObj["-moz-" + t] = cssObj["-o-" + t] = cssObj[t] = transition, newImg.css(cssObj), newImg },
                  showMainContent = function() { mfp.content.css("visibility", "visible") };
               _mfpOn("BuildControls" + ns, function() {
                  if (mfp._allowZoom()) {
                     if (clearTimeout(openTimeout), mfp.content.css("visibility", "hidden"), image = mfp._getItemToZoom(), !image) return void showMainContent();
                     animatedImg = getElToAnimate(image), animatedImg.css(mfp._getOffset()), mfp.wrap.append(animatedImg), openTimeout = setTimeout(function() { animatedImg.css(mfp._getOffset(!0)), openTimeout = setTimeout(function() { showMainContent(), setTimeout(function() { animatedImg.remove(), image = animatedImg = null, _mfpTrigger("ZoomAnimationEnded") }, 16) }, duration) }, 16) } }), _mfpOn(BEFORE_CLOSE_EVENT + ns, function() {
                  if (mfp._allowZoom()) {
                     if (clearTimeout(openTimeout), mfp.st.removalDelay = duration, !image) {
                        if (image = mfp._getItemToZoom(), !image) return;
                        animatedImg = getElToAnimate(image) }
                     animatedImg.css(mfp._getOffset(!0)), mfp.wrap.append(animatedImg), mfp.content.css("visibility", "hidden"), setTimeout(function() { animatedImg.css(mfp._getOffset()) }, 16) } }), _mfpOn(CLOSE_EVENT + ns, function() { mfp._allowZoom() && (showMainContent(), animatedImg && animatedImg.remove(), image = null) }) } }, _allowZoom: function() {
            return "image" === mfp.currItem.type }, _getItemToZoom: function() {
            return !!mfp.currItem.hasSize && mfp.currItem.img }, _getOffset: function(isLarge) {
            var el;
            el = isLarge ? mfp.currItem.img : mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
            var offset = el.offset(),
               paddingTop = parseInt(el.css("padding-top"), 10),
               paddingBottom = parseInt(el.css("padding-bottom"), 10);
            offset.top -= $(window).scrollTop() - paddingTop;
            var obj = { width: el.width(), height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop };
            return getHasMozTransform() ? obj["-moz-transform"] = obj.transform = "translate(" + offset.left + "px," + offset.top + "px)" : (obj.left = offset.left, obj.top = offset.top), obj } } });
   var IFRAME_NS = "iframe",
      _emptyPage = "//about:blank",
      _fixIframeBugs = function(isShowing) {
         if (mfp.currTemplate[IFRAME_NS]) {
            var el = mfp.currTemplate[IFRAME_NS].find("iframe");
            el.length && (isShowing || (el[0].src = _emptyPage), mfp.isIE8 && el.css("display", isShowing ? "block" : "none")) } };
   $.magnificPopup.registerModule(IFRAME_NS, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function() { mfp.types.push(IFRAME_NS), _mfpOn("BeforeChange", function(e, prevType, newType) { prevType !== newType && (prevType === IFRAME_NS ? _fixIframeBugs() : newType === IFRAME_NS && _fixIframeBugs(!0)) }), _mfpOn(CLOSE_EVENT + "." + IFRAME_NS, function() { _fixIframeBugs() }) }, getIframe: function(item, template) {
            var embedSrc = item.src,
               iframeSt = mfp.st.iframe;
            $.each(iframeSt.patterns, function() {
               if (embedSrc.indexOf(this.index) > -1) return this.id && (embedSrc = "string" == typeof this.id ? embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length) : this.id.call(this, embedSrc)), embedSrc = this.src.replace("%id%", embedSrc), !1 });
            var dataObj = {};
            return iframeSt.srcAction && (dataObj[iframeSt.srcAction] = embedSrc), mfp._parseMarkup(template, dataObj, item), mfp.updateStatus("ready"), template } } });
   var _getLoopedId = function(index) {
         var numSlides = mfp.items.length;
         return index > numSlides - 1 ? index - numSlides : index < 0 ? numSlides + index : index },
      _replaceCurrTotal = function(text, curr, total) {
         return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total) };
   $.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function() {
            var gSt = mfp.st.gallery,
               ns = ".mfp-gallery";
            return mfp.direction = !0, !(!gSt || !gSt.enabled) && (_wrapClasses += " mfp-gallery", _mfpOn(OPEN_EVENT + ns, function() { gSt.navigateByImgClick && mfp.wrap.on("click" + ns, ".mfp-img", function() {
                  if (mfp.items.length > 1) return mfp.next(), !1 }), _document.on("keydown" + ns, function(e) { 37 === e.keyCode ? mfp.prev() : 39 === e.keyCode && mfp.next() }) }), _mfpOn("UpdateStatus" + ns, function(e, data) { data.text && (data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length)) }), _mfpOn(MARKUP_PARSE_EVENT + ns, function(e, element, values, item) {
               var l = mfp.items.length;
               values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : "" }), _mfpOn("BuildControls" + ns, function() {
               if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
                  var markup = gSt.arrowMarkup,
                     arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, "left")).addClass(PREVENT_CLOSE_CLASS),
                     arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, "right")).addClass(PREVENT_CLOSE_CLASS);
                  arrowLeft.click(function() { mfp.prev() }), arrowRight.click(function() { mfp.next() }), mfp.container.append(arrowLeft.add(arrowRight)) } }), _mfpOn(CHANGE_EVENT + ns, function() { mfp._preloadTimeout && clearTimeout(mfp._preloadTimeout), mfp._preloadTimeout = setTimeout(function() { mfp.preloadNearbyImages(), mfp._preloadTimeout = null }, 16) }), void _mfpOn(CLOSE_EVENT + ns, function() { _document.off(ns), mfp.wrap.off("click" + ns), mfp.arrowRight = mfp.arrowLeft = null })) }, next: function() { mfp.direction = !0, mfp.index = _getLoopedId(mfp.index + 1), mfp.updateItemHTML() }, prev: function() { mfp.direction = !1, mfp.index = _getLoopedId(mfp.index - 1), mfp.updateItemHTML() }, goTo: function(newIndex) { mfp.direction = newIndex >= mfp.index, mfp.index = newIndex, mfp.updateItemHTML() }, preloadNearbyImages: function() {
            var i, p = mfp.st.gallery.preload,
               preloadBefore = Math.min(p[0], mfp.items.length),
               preloadAfter = Math.min(p[1], mfp.items.length);
            for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) mfp._preloadItem(mfp.index + i);
            for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) mfp._preloadItem(mfp.index - i) }, _preloadItem: function(index) {
            if (index = _getLoopedId(index), !mfp.items[index].preloaded) {
               var item = mfp.items[index];
               item.parsed || (item = mfp.parseEl(index)), _mfpTrigger("LazyLoad", item), "image" === item.type && (item.img = $('<img class="mfp-img" />').on("load.mfploader", function() { item.hasSize = !0 }).on("error.mfploader", function() { item.hasSize = !0, item.loadError = !0, _mfpTrigger("LazyLoadError", item) }).attr("src", item.src)), item.preloaded = !0 } } } });
   var RETINA_NS = "retina";
   $.magnificPopup.registerModule(RETINA_NS, { options: { replaceSrc: function(item) {
            return item.src.replace(/\.\w+$/, function(m) {
               return "@2x" + m }) }, ratio: 1 }, proto: { initRetina: function() {
            if (window.devicePixelRatio > 1) {
               var st = mfp.st.retina,
                  ratio = st.ratio;
               ratio = isNaN(ratio) ? ratio() : ratio, ratio > 1 && (_mfpOn("ImageHasSize." + RETINA_NS, function(e, item) { item.img.css({ "max-width": item.img[0].naturalWidth / ratio, width: "100%" }) }), _mfpOn("ElementParse." + RETINA_NS, function(e, item) { item.src = st.replaceSrc(item, ratio) })) } } } }), _checkInstance()
}), $.fn.randomize = function(selector) {
      return (selector ? this.find(selector) : this).parent().each(function() { $(this).children(selector).sort(function() {
            return Math.random() - .5 }).detach().appendTo(this) }), this },
   function(factory) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], factory) : "undefined" != typeof exports ? module.exports = factory(require("jquery")) : factory(jQuery) }(function($) {
      "use strict";
      var Slick = window.Slick || {};
      Slick = function() {
         function Slick(element, settings) {
            var dataSettings, _ = this;
            _.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: $(element), appendDots: $(element), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(slider, i) {
                  return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, _.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, $.extend(_, _.initials), _.activeBreakpoint = null, _.animType = null, _.animProp = null, _.breakpoints = [], _.breakpointSettings = [], _.cssTransitions = !1, _.focussed = !1, _.interrupted = !1, _.hidden = "hidden", _.paused = !0, _.positionProp = null, _.respondTo = null, _.rowCount = 1, _.shouldClick = !0, _.$slider = $(element), _.$slidesCache = null, _.transformType = null, _.transitionType = null, _.visibilityChange = "visibilitychange", _.windowWidth = 0, _.windowTimer = null, dataSettings = $(element).data("slick") || {}, _.options = $.extend({}, _.defaults, settings, dataSettings), _.currentSlide = _.options.initialSlide, _.originalSettings = _.options, "undefined" != typeof document.mozHidden ? (_.hidden = "mozHidden", _.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (_.hidden = "webkitHidden", _.visibilityChange = "webkitvisibilitychange"), _.autoPlay = $.proxy(_.autoPlay, _), _.autoPlayClear = $.proxy(_.autoPlayClear, _), _.autoPlayIterator = $.proxy(_.autoPlayIterator, _), _.changeSlide = $.proxy(_.changeSlide, _), _.clickHandler = $.proxy(_.clickHandler, _), _.selectHandler = $.proxy(_.selectHandler, _), _.setPosition = $.proxy(_.setPosition, _), _.swipeHandler = $.proxy(_.swipeHandler, _), _.dragHandler = $.proxy(_.dragHandler, _), _.keyHandler = $.proxy(_.keyHandler, _), _.instanceUid = instanceUid++, _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, _.registerBreakpoints(), _.init(!0) }
         var instanceUid = 0;
         return Slick }(), Slick.prototype.activateADA = function() {
         var _ = this;
         _.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
         var _ = this;
         if ("boolean" == typeof index) addBefore = index, index = null;
         else if (index < 0 || index >= _.slideCount) return !1;
         _.unload(), "number" == typeof index ? 0 === index && 0 === _.$slides.length ? $(markup).appendTo(_.$slideTrack) : addBefore ? $(markup).insertBefore(_.$slides.eq(index)) : $(markup).insertAfter(_.$slides.eq(index)) : addBefore === !0 ? $(markup).prependTo(_.$slideTrack) : $(markup).appendTo(_.$slideTrack), _.$slides = _.$slideTrack.children(this.options.slide), _.$slideTrack.children(this.options.slide).detach(), _.$slideTrack.append(_.$slides), _.$slides.each(function(index, element) { $(element).attr("data-slick-index", index) }), _.$slidesCache = _.$slides, _.reinit() }, Slick.prototype.animateHeight = function() {
         var _ = this;
         if (1 === _.options.slidesToShow && _.options.adaptiveHeight === !0 && _.options.vertical === !1) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(!0);
            _.$list.animate({ height: targetHeight }, _.options.speed) } }, Slick.prototype.animateSlide = function(targetLeft, callback) {
         var animProps = {},
            _ = this;
         _.animateHeight(), _.options.rtl === !0 && _.options.vertical === !1 && (targetLeft = -targetLeft), _.transformsEnabled === !1 ? _.options.vertical === !1 ? _.$slideTrack.animate({ left: targetLeft }, _.options.speed, _.options.easing, callback) : _.$slideTrack.animate({ top: targetLeft }, _.options.speed, _.options.easing, callback) : _.cssTransitions === !1 ? (_.options.rtl === !0 && (_.currentLeft = -_.currentLeft), $({ animStart: _.currentLeft }).animate({ animStart: targetLeft }, { duration: _.options.speed, easing: _.options.easing, step: function(now) { now = Math.ceil(now), _.options.vertical === !1 ? (animProps[_.animType] = "translate(" + now + "px, 0px)", _.$slideTrack.css(animProps)) : (animProps[_.animType] = "translate(0px," + now + "px)", _.$slideTrack.css(animProps)) }, complete: function() { callback && callback.call() } })) : (_.applyTransition(), targetLeft = Math.ceil(targetLeft), _.options.vertical === !1 ? animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)" : animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)", _.$slideTrack.css(animProps), callback && setTimeout(function() { _.disableTransition(), callback.call() }, _.options.speed)) }, Slick.prototype.getNavTarget = function() {
         var _ = this,
            asNavFor = _.options.asNavFor;
         return asNavFor && null !== asNavFor && (asNavFor = $(asNavFor).not(_.$slider)), asNavFor }, Slick.prototype.asNavFor = function(index) {
         var _ = this,
            asNavFor = _.getNavTarget();
         null !== asNavFor && "object" == typeof asNavFor && asNavFor.each(function() {
            var target = $(this).slick("getSlick");
            target.unslicked || target.slideHandler(index, !0) }) }, Slick.prototype.applyTransition = function(slide) {
         var _ = this,
            transition = {};
         _.options.fade === !1 ? transition[_.transitionType] = _.transformType + " " + _.options.speed + "ms " + _.options.cssEase : transition[_.transitionType] = "opacity " + _.options.speed + "ms " + _.options.cssEase, _.options.fade === !1 ? _.$slideTrack.css(transition) : _.$slides.eq(slide).css(transition) }, Slick.prototype.autoPlay = function() {
         var _ = this;
         _.autoPlayClear(), _.slideCount > _.options.slidesToShow && (_.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed)) }, Slick.prototype.autoPlayClear = function() {
         var _ = this;
         _.autoPlayTimer && clearInterval(_.autoPlayTimer) }, Slick.prototype.autoPlayIterator = function() {
         var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;
         _.paused || _.interrupted || _.focussed || (_.options.infinite === !1 && (1 === _.direction && _.currentSlide + 1 === _.slideCount - 1 ? _.direction = 0 : 0 === _.direction && (slideTo = _.currentSlide - _.options.slidesToScroll, _.currentSlide - 1 === 0 && (_.direction = 1))), _.slideHandler(slideTo)) }, Slick.prototype.buildArrows = function() {
         var _ = this;
         _.options.arrows === !0 && (_.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow"), _.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow"), _.slideCount > _.options.slidesToShow ? (_.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), _.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), _.htmlExpr.test(_.options.prevArrow) && _.$prevArrow.prependTo(_.options.appendArrows), _.htmlExpr.test(_.options.nextArrow) && _.$nextArrow.appendTo(_.options.appendArrows), _.options.infinite !== !0 && _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : _.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, Slick.prototype.buildDots = function() {
         var i, dot, _ = this;
         if (_.options.dots === !0 && _.slideCount > _.options.slidesToShow) {
            for (_.$slider.addClass("slick-dotted"), dot = $("<ul />").addClass(_.options.dotsClass), i = 0; i <= _.getDotCount(); i += 1) dot.append($("<li />").append(_.options.customPaging.call(this, _, i)));
            _.$dots = dot.appendTo(_.options.appendDots), _.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false") } }, Slick.prototype.buildOut = function() {
         var _ = this;
         _.$slides = _.$slider.children(_.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), _.slideCount = _.$slides.length, _.$slides.each(function(index, element) { $(element).attr("data-slick-index", index).data("originalStyling", $(element).attr("style") || "") }), _.$slider.addClass("slick-slider"), _.$slideTrack = 0 === _.slideCount ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent(), _.$list = _.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), _.$slideTrack.css("opacity", 0), _.options.centerMode !== !0 && _.options.swipeToSlide !== !0 || (_.options.slidesToScroll = 1), $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading"), _.setupInfinite(), _.buildArrows(), _.buildDots(), _.updateDots(), _.setSlideClasses("number" == typeof _.currentSlide ? _.currentSlide : 0), _.options.draggable === !0 && _.$list.addClass("draggable") }, Slick.prototype.buildRows = function() {
         var a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection, _ = this;
         if (newSlides = document.createDocumentFragment(), originalSlides = _.$slider.children(), _.options.rows > 1) {
            for (slidesPerSection = _.options.slidesPerRow * _.options.rows, numOfSlides = Math.ceil(originalSlides.length / slidesPerSection), a = 0; a < numOfSlides; a++) {
               var slide = document.createElement("div");
               for (b = 0; b < _.options.rows; b++) {
                  var row = document.createElement("div");
                  for (c = 0; c < _.options.slidesPerRow; c++) {
                     var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
                     originalSlides.get(target) && row.appendChild(originalSlides.get(target)) }
                  slide.appendChild(row) }
               newSlides.appendChild(slide) }
            _.$slider.empty().append(newSlides), _.$slider.children().children().children().css({ width: 100 / _.options.slidesPerRow + "%", display: "inline-block" }) } }, Slick.prototype.checkResponsive = function(initial, forceUpdate) {
         var breakpoint, targetBreakpoint, respondToWidth, _ = this,
            triggerBreakpoint = !1,
            sliderWidth = _.$slider.width(),
            windowWidth = window.innerWidth || $(window).width();
         if ("window" === _.respondTo ? respondToWidth = windowWidth : "slider" === _.respondTo ? respondToWidth = sliderWidth : "min" === _.respondTo && (respondToWidth = Math.min(windowWidth, sliderWidth)), _.options.responsive && _.options.responsive.length && null !== _.options.responsive) { targetBreakpoint = null;
            for (breakpoint in _.breakpoints) _.breakpoints.hasOwnProperty(breakpoint) && (_.originalSettings.mobileFirst === !1 ? respondToWidth < _.breakpoints[breakpoint] && (targetBreakpoint = _.breakpoints[breakpoint]) : respondToWidth > _.breakpoints[breakpoint] && (targetBreakpoint = _.breakpoints[breakpoint]));
            null !== targetBreakpoint ? null !== _.activeBreakpoint ? (targetBreakpoint !== _.activeBreakpoint || forceUpdate) && (_.activeBreakpoint = targetBreakpoint, "unslick" === _.breakpointSettings[targetBreakpoint] ? _.unslick(targetBreakpoint) : (_.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]), initial === !0 && (_.currentSlide = _.options.initialSlide), _.refresh(initial)), triggerBreakpoint = targetBreakpoint) : (_.activeBreakpoint = targetBreakpoint, "unslick" === _.breakpointSettings[targetBreakpoint] ? _.unslick(targetBreakpoint) : (_.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]), initial === !0 && (_.currentSlide = _.options.initialSlide), _.refresh(initial)), triggerBreakpoint = targetBreakpoint) : null !== _.activeBreakpoint && (_.activeBreakpoint = null, _.options = _.originalSettings, initial === !0 && (_.currentSlide = _.options.initialSlide), _.refresh(initial), triggerBreakpoint = targetBreakpoint), initial || triggerBreakpoint === !1 || _.$slider.trigger("breakpoint", [_, triggerBreakpoint]) } }, Slick.prototype.changeSlide = function(event, dontAnimate) {
         var indexOffset, slideOffset, unevenOffset, _ = this,
            $target = $(event.currentTarget);
         switch ($target.is("a") && event.preventDefault(), $target.is("li") || ($target = $target.closest("li")), unevenOffset = _.slideCount % _.options.slidesToScroll !== 0, indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll, event.data.message) {
            case "previous":
               slideOffset = 0 === indexOffset ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset, _.slideCount > _.options.slidesToShow && _.slideHandler(_.currentSlide - slideOffset, !1, dontAnimate);
               break;
            case "next":
               slideOffset = 0 === indexOffset ? _.options.slidesToScroll : indexOffset, _.slideCount > _.options.slidesToShow && _.slideHandler(_.currentSlide + slideOffset, !1, dontAnimate);
               break;
            case "index":
               var index = 0 === event.data.index ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
               _.slideHandler(_.checkNavigable(index), !1, dontAnimate), $target.children().trigger("focus");
               break;
            default:
               return } }, Slick.prototype.checkNavigable = function(index) {
         var navigables, prevNavigable, _ = this;
         if (navigables = _.getNavigableIndexes(), prevNavigable = 0, index > navigables[navigables.length - 1]) index = navigables[navigables.length - 1];
         else
            for (var n in navigables) {
               if (index < navigables[n]) { index = prevNavigable;
                  break }
               prevNavigable = navigables[n] }
         return index }, Slick.prototype.cleanUpEvents = function() {
         var _ = this;
         _.options.dots && null !== _.$dots && $("li", _.$dots).off("click.slick", _.changeSlide).off("mouseenter.slick", $.proxy(_.interrupt, _, !0)).off("mouseleave.slick", $.proxy(_.interrupt, _, !1)), _.$slider.off("focus.slick blur.slick"), _.options.arrows === !0 && _.slideCount > _.options.slidesToShow && (_.$prevArrow && _.$prevArrow.off("click.slick", _.changeSlide), _.$nextArrow && _.$nextArrow.off("click.slick", _.changeSlide)), _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler), _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler), _.$list.off("touchend.slick mouseup.slick", _.swipeHandler), _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler), _.$list.off("click.slick", _.clickHandler), $(document).off(_.visibilityChange, _.visibility), _.cleanUpSlideEvents(), _.options.accessibility === !0 && _.$list.off("keydown.slick", _.keyHandler), _.options.focusOnSelect === !0 && $(_.$slideTrack).children().off("click.slick", _.selectHandler), $(window).off("orientationchange.slick.slick-" + _.instanceUid, _.orientationChange), $(window).off("resize.slick.slick-" + _.instanceUid, _.resize), $("[draggable!=true]", _.$slideTrack).off("dragstart", _.preventDefault), $(window).off("load.slick.slick-" + _.instanceUid, _.setPosition), $(document).off("ready.slick.slick-" + _.instanceUid, _.setPosition) }, Slick.prototype.cleanUpSlideEvents = function() {
         var _ = this;
         _.$list.off("mouseenter.slick", $.proxy(_.interrupt, _, !0)), _.$list.off("mouseleave.slick", $.proxy(_.interrupt, _, !1)) }, Slick.prototype.cleanUpRows = function() {
         var originalSlides, _ = this;
         _.options.rows > 1 && (originalSlides = _.$slides.children().children(), originalSlides.removeAttr("style"), _.$slider.empty().append(originalSlides)) }, Slick.prototype.clickHandler = function(event) {
         var _ = this;
         _.shouldClick === !1 && (event.stopImmediatePropagation(),
            event.stopPropagation(), event.preventDefault())
      }, Slick.prototype.destroy = function(refresh) {
         var _ = this;
         _.autoPlayClear(), _.touchObject = {}, _.cleanUpEvents(), $(".slick-cloned", _.$slider).detach(), _.$dots && _.$dots.remove(), _.$prevArrow && _.$prevArrow.length && (_.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), _.htmlExpr.test(_.options.prevArrow) && _.$prevArrow.remove()), _.$nextArrow && _.$nextArrow.length && (_.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), _.htmlExpr.test(_.options.nextArrow) && _.$nextArrow.remove()), _.$slides && (_.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { $(this).attr("style", $(this).data("originalStyling")) }), _.$slideTrack.children(this.options.slide).detach(), _.$slideTrack.detach(), _.$list.detach(), _.$slider.append(_.$slides)), _.cleanUpRows(), _.$slider.removeClass("slick-slider"), _.$slider.removeClass("slick-initialized"), _.$slider.removeClass("slick-dotted"), _.unslicked = !0, refresh || _.$slider.trigger("destroy", [_]) }, Slick.prototype.disableTransition = function(slide) {
         var _ = this,
            transition = {};
         transition[_.transitionType] = "", _.options.fade === !1 ? _.$slideTrack.css(transition) : _.$slides.eq(slide).css(transition) }, Slick.prototype.fadeSlide = function(slideIndex, callback) {
         var _ = this;
         _.cssTransitions === !1 ? (_.$slides.eq(slideIndex).css({ zIndex: _.options.zIndex }), _.$slides.eq(slideIndex).animate({ opacity: 1 }, _.options.speed, _.options.easing, callback)) : (_.applyTransition(slideIndex), _.$slides.eq(slideIndex).css({ opacity: 1, zIndex: _.options.zIndex }), callback && setTimeout(function() { _.disableTransition(slideIndex), callback.call() }, _.options.speed)) }, Slick.prototype.fadeSlideOut = function(slideIndex) {
         var _ = this;
         _.cssTransitions === !1 ? _.$slides.eq(slideIndex).animate({ opacity: 0, zIndex: _.options.zIndex - 2 }, _.options.speed, _.options.easing) : (_.applyTransition(slideIndex), _.$slides.eq(slideIndex).css({ opacity: 0, zIndex: _.options.zIndex - 2 })) }, Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
         var _ = this;
         null !== filter && (_.$slidesCache = _.$slides, _.unload(), _.$slideTrack.children(this.options.slide).detach(), _.$slidesCache.filter(filter).appendTo(_.$slideTrack), _.reinit()) }, Slick.prototype.focusHandler = function() {
         var _ = this;
         _.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(event) { event.stopImmediatePropagation();
            var $sf = $(this);
            setTimeout(function() { _.options.pauseOnFocus && (_.focussed = $sf.is(":focus"), _.autoPlay()) }, 0) }) }, Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
         var _ = this;
         return _.currentSlide }, Slick.prototype.getDotCount = function() {
         var _ = this,
            breakPoint = 0,
            counter = 0,
            pagerQty = 0;
         if (_.options.infinite === !0)
            for (; breakPoint < _.slideCount;) ++pagerQty, breakPoint = counter + _.options.slidesToScroll, counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
         else if (_.options.centerMode === !0) pagerQty = _.slideCount;
         else if (_.options.asNavFor)
            for (; breakPoint < _.slideCount;) ++pagerQty, breakPoint = counter + _.options.slidesToScroll, counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
         else pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
         return pagerQty - 1 }, Slick.prototype.getLeft = function(slideIndex) {
         var targetLeft, verticalHeight, targetSlide, _ = this,
            verticalOffset = 0;
         return _.slideOffset = 0, verticalHeight = _.$slides.first().outerHeight(!0), _.options.infinite === !0 ? (_.slideCount > _.options.slidesToShow && (_.slideOffset = _.slideWidth * _.options.slidesToShow * -1, verticalOffset = verticalHeight * _.options.slidesToShow * -1), _.slideCount % _.options.slidesToScroll !== 0 && slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow && (slideIndex > _.slideCount ? (_.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1, verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1) : (_.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1, verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1))) : slideIndex + _.options.slidesToShow > _.slideCount && (_.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth, verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight), _.slideCount <= _.options.slidesToShow && (_.slideOffset = 0, verticalOffset = 0), _.options.centerMode === !0 && _.options.infinite === !0 ? _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth : _.options.centerMode === !0 && (_.slideOffset = 0, _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2)), targetLeft = _.options.vertical === !1 ? slideIndex * _.slideWidth * -1 + _.slideOffset : slideIndex * verticalHeight * -1 + verticalOffset, _.options.variableWidth === !0 && (targetSlide = _.slideCount <= _.options.slidesToShow || _.options.infinite === !1 ? _.$slideTrack.children(".slick-slide").eq(slideIndex) : _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow), targetLeft = _.options.rtl === !0 ? targetSlide[0] ? (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1 : 0 : targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0, _.options.centerMode === !0 && (targetSlide = _.slideCount <= _.options.slidesToShow || _.options.infinite === !1 ? _.$slideTrack.children(".slick-slide").eq(slideIndex) : _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow + 1), targetLeft = _.options.rtl === !0 ? targetSlide[0] ? (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1 : 0 : targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0, targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2)), targetLeft }, Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
         var _ = this;
         return _.options[option] }, Slick.prototype.getNavigableIndexes = function() {
         var max, _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [];
         for (_.options.infinite === !1 ? max = _.slideCount : (breakPoint = _.options.slidesToScroll * -1, counter = _.options.slidesToScroll * -1, max = 2 * _.slideCount); breakPoint < max;) indexes.push(breakPoint), breakPoint = counter + _.options.slidesToScroll, counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
         return indexes }, Slick.prototype.getSlick = function() {
         return this }, Slick.prototype.getSlideCount = function() {
         var slidesTraversed, swipedSlide, centerOffset, _ = this;
         return centerOffset = _.options.centerMode === !0 ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0, _.options.swipeToSlide === !0 ? (_.$slideTrack.find(".slick-slide").each(function(index, slide) {
            if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) return swipedSlide = slide, !1 }), slidesTraversed = Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1) : _.options.slidesToScroll }, Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
         var _ = this;
         _.changeSlide({ data: { message: "index", index: parseInt(slide) } }, dontAnimate) }, Slick.prototype.init = function(creation) {
         var _ = this;
         $(_.$slider).hasClass("slick-initialized") || ($(_.$slider).addClass("slick-initialized"), _.buildRows(), _.buildOut(), _.setProps(), _.startLoad(), _.loadSlider(), _.initializeEvents(), _.updateArrows(), _.updateDots(), _.checkResponsive(!0), _.focusHandler()), creation && _.$slider.trigger("init", [_]), _.options.accessibility === !0 && _.initADA(), _.options.autoplay && (_.paused = !1, _.autoPlay()) }, Slick.prototype.initADA = function() {
         var _ = this;
         _.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), _.$slideTrack.attr("role", "listbox"), _.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function(i) { $(this).attr({ role: "option", "aria-describedby": "slick-slide" + _.instanceUid + i }) }), null !== _.$dots && _.$dots.attr("role", "tablist").find("li").each(function(i) { $(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + _.instanceUid + i, id: "slick-slide" + _.instanceUid + i }) }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), _.activateADA() }, Slick.prototype.initArrowEvents = function() {
         var _ = this;
         _.options.arrows === !0 && _.slideCount > _.options.slidesToShow && (_.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, _.changeSlide), _.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, _.changeSlide)) }, Slick.prototype.initDotEvents = function() {
         var _ = this;
         _.options.dots === !0 && _.slideCount > _.options.slidesToShow && $("li", _.$dots).on("click.slick", { message: "index" }, _.changeSlide), _.options.dots === !0 && _.options.pauseOnDotsHover === !0 && $("li", _.$dots).on("mouseenter.slick", $.proxy(_.interrupt, _, !0)).on("mouseleave.slick", $.proxy(_.interrupt, _, !1)) }, Slick.prototype.initSlideEvents = function() {
         var _ = this;
         _.options.pauseOnHover && (_.$list.on("mouseenter.slick", $.proxy(_.interrupt, _, !0)), _.$list.on("mouseleave.slick", $.proxy(_.interrupt, _, !1))) }, Slick.prototype.initializeEvents = function() {
         var _ = this;
         _.initArrowEvents(), _.initDotEvents(), _.initSlideEvents(), _.$list.on("touchstart.slick mousedown.slick", { action: "start" }, _.swipeHandler), _.$list.on("touchmove.slick mousemove.slick", { action: "move" }, _.swipeHandler), _.$list.on("touchend.slick mouseup.slick", { action: "end" }, _.swipeHandler), _.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, _.swipeHandler), _.$list.on("click.slick", _.clickHandler), $(document).on(_.visibilityChange, $.proxy(_.visibility, _)), _.options.accessibility === !0 && _.$list.on("keydown.slick", _.keyHandler), _.options.focusOnSelect === !0 && $(_.$slideTrack).children().on("click.slick", _.selectHandler), $(window).on("orientationchange.slick.slick-" + _.instanceUid, $.proxy(_.orientationChange, _)), $(window).on("resize.slick.slick-" + _.instanceUid, $.proxy(_.resize, _)), $("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault), $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition), $(document).on("ready.slick.slick-" + _.instanceUid, _.setPosition) }, Slick.prototype.initUI = function() {
         var _ = this;
         _.options.arrows === !0 && _.slideCount > _.options.slidesToShow && (_.$prevArrow.show(), _.$nextArrow.show()), _.options.dots === !0 && _.slideCount > _.options.slidesToShow && _.$dots.show() }, Slick.prototype.keyHandler = function(event) {
         var _ = this;
         event.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === event.keyCode && _.options.accessibility === !0 ? _.changeSlide({ data: { message: _.options.rtl === !0 ? "next" : "previous" } }) : 39 === event.keyCode && _.options.accessibility === !0 && _.changeSlide({ data: { message: _.options.rtl === !0 ? "previous" : "next" } })) }, Slick.prototype.lazyLoad = function() {
         function loadImages(imagesScope) { $("img[data-lazy]", imagesScope).each(function() {
               var image = $(this),
                  imageSource = $(this).attr("data-lazy"),
                  imageToLoad = document.createElement("img");
               imageToLoad.onload = function() { image.animate({ opacity: 0 }, 100, function() { image.attr("src", imageSource).animate({ opacity: 1 }, 200, function() { image.removeAttr("data-lazy").removeClass("slick-loading") }), _.$slider.trigger("lazyLoaded", [_, image, imageSource]) }) }, imageToLoad.onerror = function() { image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), _.$slider.trigger("lazyLoadError", [_, image, imageSource]) }, imageToLoad.src = imageSource }) }
         var loadRange, cloneRange, rangeStart, rangeEnd, _ = this;
         _.options.centerMode === !0 ? _.options.infinite === !0 ? (rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1), rangeEnd = rangeStart + _.options.slidesToShow + 2) : (rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1)), rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide) : (rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide, rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow), _.options.fade === !0 && (rangeStart > 0 && rangeStart--, rangeEnd <= _.slideCount && rangeEnd++)), loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd), loadImages(loadRange), _.slideCount <= _.options.slidesToShow ? (cloneRange = _.$slider.find(".slick-slide"), loadImages(cloneRange)) : _.currentSlide >= _.slideCount - _.options.slidesToShow ? (cloneRange = _.$slider.find(".slick-cloned").slice(0, _.options.slidesToShow), loadImages(cloneRange)) : 0 === _.currentSlide && (cloneRange = _.$slider.find(".slick-cloned").slice(_.options.slidesToShow * -1), loadImages(cloneRange)) }, Slick.prototype.loadSlider = function() {
         var _ = this;
         _.setPosition(), _.$slideTrack.css({ opacity: 1 }), _.$slider.removeClass("slick-loading"), _.initUI(), "progressive" === _.options.lazyLoad && _.progressiveLazyLoad() }, Slick.prototype.next = Slick.prototype.slickNext = function() {
         var _ = this;
         _.changeSlide({ data: { message: "next" } }) }, Slick.prototype.orientationChange = function() {
         var _ = this;
         _.checkResponsive(), _.setPosition() }, Slick.prototype.pause = Slick.prototype.slickPause = function() {
         var _ = this;
         _.autoPlayClear(), _.paused = !0 }, Slick.prototype.play = Slick.prototype.slickPlay = function() {
         var _ = this;
         _.autoPlay(), _.options.autoplay = !0, _.paused = !1, _.focussed = !1, _.interrupted = !1 }, Slick.prototype.postSlide = function(index) {
         var _ = this;
         _.unslicked || (_.$slider.trigger("afterChange", [_, index]), _.animating = !1, _.setPosition(), _.swipeLeft = null, _.options.autoplay && _.autoPlay(), _.options.accessibility === !0 && _.initADA()) }, Slick.prototype.prev = Slick.prototype.slickPrev = function() {
         var _ = this;
         _.changeSlide({ data: { message: "previous" } }) }, Slick.prototype.preventDefault = function(event) { event.preventDefault() }, Slick.prototype.progressiveLazyLoad = function(tryCount) { tryCount = tryCount || 1;
         var image, imageSource, imageToLoad, _ = this,
            $imgsToLoad = $("img[data-lazy]", _.$slider);
         $imgsToLoad.length ? (image = $imgsToLoad.first(), imageSource = image.attr("data-lazy"), imageToLoad = document.createElement("img"), imageToLoad.onload = function() { image.attr("src", imageSource).removeAttr("data-lazy").removeClass("slick-loading"), _.options.adaptiveHeight === !0 && _.setPosition(), _.$slider.trigger("lazyLoaded", [_, image, imageSource]), _.progressiveLazyLoad() }, imageToLoad.onerror = function() { tryCount < 3 ? setTimeout(function() { _.progressiveLazyLoad(tryCount + 1) }, 500) : (image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), _.$slider.trigger("lazyLoadError", [_, image, imageSource]), _.progressiveLazyLoad()) }, imageToLoad.src = imageSource) : _.$slider.trigger("allImagesLoaded", [_]) }, Slick.prototype.refresh = function(initializing) {
         var currentSlide, lastVisibleIndex, _ = this;
         lastVisibleIndex = _.slideCount - _.options.slidesToShow, !_.options.infinite && _.currentSlide > lastVisibleIndex && (_.currentSlide = lastVisibleIndex), _.slideCount <= _.options.slidesToShow && (_.currentSlide = 0), currentSlide = _.currentSlide, _.destroy(!0), $.extend(_, _.initials, { currentSlide: currentSlide }), _.init(), initializing || _.changeSlide({ data: { message: "index", index: currentSlide } }, !1) }, Slick.prototype.registerBreakpoints = function() {
         var breakpoint, currentBreakpoint, l, _ = this,
            responsiveSettings = _.options.responsive || null;
         if ("array" === $.type(responsiveSettings) && responsiveSettings.length) { _.respondTo = _.options.respondTo || "window";
            for (breakpoint in responsiveSettings)
               if (l = _.breakpoints.length - 1, currentBreakpoint = responsiveSettings[breakpoint].breakpoint, responsiveSettings.hasOwnProperty(breakpoint)) {
                  for (; l >= 0;) _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint && _.breakpoints.splice(l, 1), l--;
                  _.breakpoints.push(currentBreakpoint), _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings }
            _.breakpoints.sort(function(a, b) {
               return _.options.mobileFirst ? a - b : b - a }) } }, Slick.prototype.reinit = function() {
         var _ = this;
         _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide"), _.slideCount = _.$slides.length, _.currentSlide >= _.slideCount && 0 !== _.currentSlide && (_.currentSlide = _.currentSlide - _.options.slidesToScroll), _.slideCount <= _.options.slidesToShow && (_.currentSlide = 0), _.registerBreakpoints(), _.setProps(), _.setupInfinite(), _.buildArrows(), _.updateArrows(), _.initArrowEvents(), _.buildDots(), _.updateDots(), _.initDotEvents(), _.cleanUpSlideEvents(), _.initSlideEvents(), _.checkResponsive(!1, !0), _.options.focusOnSelect === !0 && $(_.$slideTrack).children().on("click.slick", _.selectHandler), _.setSlideClasses("number" == typeof _.currentSlide ? _.currentSlide : 0), _.setPosition(), _.focusHandler(), _.paused = !_.options.autoplay, _.autoPlay(), _.$slider.trigger("reInit", [_]) }, Slick.prototype.resize = function() {
         var _ = this;
         $(window).width() !== _.windowWidth && (clearTimeout(_.windowDelay), _.windowDelay = window.setTimeout(function() { _.windowWidth = $(window).width(), _.checkResponsive(), _.unslicked || _.setPosition() }, 50)) }, Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
         var _ = this;
         return "boolean" == typeof index ? (removeBefore = index, index = removeBefore === !0 ? 0 : _.slideCount - 1) : index = removeBefore === !0 ? --index : index, !(_.slideCount < 1 || index < 0 || index > _.slideCount - 1) && (_.unload(), removeAll === !0 ? _.$slideTrack.children().remove() : _.$slideTrack.children(this.options.slide).eq(index).remove(), _.$slides = _.$slideTrack.children(this.options.slide), _.$slideTrack.children(this.options.slide).detach(), _.$slideTrack.append(_.$slides), _.$slidesCache = _.$slides, void _.reinit()) }, Slick.prototype.setCSS = function(position) {
         var x, y, _ = this,
            positionProps = {};
         _.options.rtl === !0 && (position = -position), x = "left" == _.positionProp ? Math.ceil(position) + "px" : "0px", y = "top" == _.positionProp ? Math.ceil(position) + "px" : "0px", positionProps[_.positionProp] = position, _.transformsEnabled === !1 ? _.$slideTrack.css(positionProps) : (positionProps = {}, _.cssTransitions === !1 ? (positionProps[_.animType] = "translate(" + x + ", " + y + ")", _.$slideTrack.css(positionProps)) : (positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)", _.$slideTrack.css(positionProps))) }, Slick.prototype.setDimensions = function() {
         var _ = this;
         _.options.vertical === !1 ? _.options.centerMode === !0 && _.$list.css({ padding: "0px " + _.options.centerPadding }) : (_.$list.height(_.$slides.first().outerHeight(!0) * _.options.slidesToShow), _.options.centerMode === !0 && _.$list.css({ padding: _.options.centerPadding + " 0px" })), _.listWidth = _.$list.width(), _.listHeight = _.$list.height(), _.options.vertical === !1 && _.options.variableWidth === !1 ? (_.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow), _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length))) : _.options.variableWidth === !0 ? _.$slideTrack.width(5e3 * _.slideCount) : (_.slideWidth = Math.ceil(_.listWidth), _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(!0) * _.$slideTrack.children(".slick-slide").length)));
         var offset = _.$slides.first().outerWidth(!0) - _.$slides.first().width();
         _.options.variableWidth === !1 && _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset) }, Slick.prototype.setFade = function() {
         var targetLeft, _ = this;
         _.$slides.each(function(index, element) { targetLeft = _.slideWidth * index * -1, _.options.rtl === !0 ? $(element).css({ position: "relative", right: targetLeft, top: 0, zIndex: _.options.zIndex - 2, opacity: 0 }) : $(element).css({ position: "relative", left: targetLeft, top: 0, zIndex: _.options.zIndex - 2, opacity: 0 }) }), _.$slides.eq(_.currentSlide).css({ zIndex: _.options.zIndex - 1, opacity: 1 }) }, Slick.prototype.setHeight = function() {
         var _ = this;
         if (1 === _.options.slidesToShow && _.options.adaptiveHeight === !0 && _.options.vertical === !1) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(!0);
            _.$list.css("height", targetHeight) } }, Slick.prototype.setOption = Slick.prototype.slickSetOption = function() {
         var l, item, option, value, type, _ = this,
            refresh = !1;
         if ("object" === $.type(arguments[0]) ? (option = arguments[0], refresh = arguments[1], type = "multiple") : "string" === $.type(arguments[0]) && (option = arguments[0], value = arguments[1], refresh = arguments[2], "responsive" === arguments[0] && "array" === $.type(arguments[1]) ? type = "responsive" : "undefined" != typeof arguments[1] && (type = "single")), "single" === type) _.options[option] = value;
         else if ("multiple" === type) $.each(option, function(opt, val) { _.options[opt] = val });
         else if ("responsive" === type)
            for (item in value)
               if ("array" !== $.type(_.options.responsive)) _.options.responsive = [value[item]];
               else {
                  for (l = _.options.responsive.length - 1; l >= 0;) _.options.responsive[l].breakpoint === value[item].breakpoint && _.options.responsive.splice(l, 1), l--;
                  _.options.responsive.push(value[item]) }
         refresh && (_.unload(), _.reinit()) }, Slick.prototype.setPosition = function() {
         var _ = this;
         _.setDimensions(), _.setHeight(), _.options.fade === !1 ? _.setCSS(_.getLeft(_.currentSlide)) : _.setFade(), _.$slider.trigger("setPosition", [_]) }, Slick.prototype.setProps = function() {
         var _ = this,
            bodyStyle = document.body.style;
         _.positionProp = _.options.vertical === !0 ? "top" : "left", "top" === _.positionProp ? _.$slider.addClass("slick-vertical") : _.$slider.removeClass("slick-vertical"), void 0 === bodyStyle.WebkitTransition && void 0 === bodyStyle.MozTransition && void 0 === bodyStyle.msTransition || _.options.useCSS === !0 && (_.cssTransitions = !0), _.options.fade && ("number" == typeof _.options.zIndex ? _.options.zIndex < 3 && (_.options.zIndex = 3) : _.options.zIndex = _.defaults.zIndex), void 0 !== bodyStyle.OTransform && (_.animType = "OTransform", _.transformType = "-o-transform", _.transitionType = "OTransition", void 0 === bodyStyle.perspectiveProperty && void 0 === bodyStyle.webkitPerspective && (_.animType = !1)), void 0 !== bodyStyle.MozTransform && (_.animType = "MozTransform", _.transformType = "-moz-transform", _.transitionType = "MozTransition", void 0 === bodyStyle.perspectiveProperty && void 0 === bodyStyle.MozPerspective && (_.animType = !1)), void 0 !== bodyStyle.webkitTransform && (_.animType = "webkitTransform", _.transformType = "-webkit-transform", _.transitionType = "webkitTransition", void 0 === bodyStyle.perspectiveProperty && void 0 === bodyStyle.webkitPerspective && (_.animType = !1)), void 0 !== bodyStyle.msTransform && (_.animType = "msTransform", _.transformType = "-ms-transform", _.transitionType = "msTransition", void 0 === bodyStyle.msTransform && (_.animType = !1)), void 0 !== bodyStyle.transform && _.animType !== !1 && (_.animType = "transform", _.transformType = "transform", _.transitionType = "transition"), _.transformsEnabled = _.options.useTransform && null !== _.animType && _.animType !== !1 }, Slick.prototype.setSlideClasses = function(index) {
         var centerOffset, allSlides, indexOffset, remainder, _ = this;
         allSlides = _.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), _.$slides.eq(index).addClass("slick-current"), _.options.centerMode === !0 ? (centerOffset = Math.floor(_.options.slidesToShow / 2), _.options.infinite === !0 && (index >= centerOffset && index <= _.slideCount - 1 - centerOffset ? _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass("slick-active").attr("aria-hidden", "false") : (indexOffset = _.options.slidesToShow + index, allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === index ? allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass("slick-center") : index === _.slideCount - 1 && allSlides.eq(_.options.slidesToShow).addClass("slick-center")), _.$slides.eq(index).addClass("slick-center")) : index >= 0 && index <= _.slideCount - _.options.slidesToShow ? _.$slides.slice(index, index + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : allSlides.length <= _.options.slidesToShow ? allSlides.addClass("slick-active").attr("aria-hidden", "false") : (remainder = _.slideCount % _.options.slidesToShow, indexOffset = _.options.infinite === !0 ? _.options.slidesToShow + index : index, _.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow ? allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass("slick-active").attr("aria-hidden", "false") : allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === _.options.lazyLoad && _.lazyLoad() }, Slick.prototype.setupInfinite = function() {
         var i, slideIndex, infiniteCount, _ = this;
         if (_.options.fade === !0 && (_.options.centerMode = !1), _.options.infinite === !0 && _.options.fade === !1 && (slideIndex = null, _.slideCount > _.options.slidesToShow)) {
            for (infiniteCount = _.options.centerMode === !0 ? _.options.slidesToShow + 1 : _.options.slidesToShow, i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) slideIndex = i - 1, $(_.$slides[slideIndex]).clone(!0).attr("id", "").attr("data-slick-index", slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned");
            for (i = 0; i < infiniteCount; i += 1) slideIndex = i, $(_.$slides[slideIndex]).clone(!0).attr("id", "").attr("data-slick-index", slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned");
            _.$slideTrack.find(".slick-cloned").find("[id]").each(function() { $(this).attr("id", "") }) } }, Slick.prototype.interrupt = function(toggle) {
         var _ = this;
         toggle || _.autoPlay(), _.interrupted = toggle }, Slick.prototype.selectHandler = function(event) {
         var _ = this,
            targetElement = $(event.target).is(".slick-slide") ? $(event.target) : $(event.target).parents(".slick-slide"),
            index = parseInt(targetElement.attr("data-slick-index"));
         return index || (index = 0), _.slideCount <= _.options.slidesToShow ? (_.setSlideClasses(index), void _.asNavFor(index)) : void _.slideHandler(index) }, Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
         var targetSlide, animSlide, oldSlide, slideLeft, navTarget, targetLeft = null,
            _ = this;
         if (sync = sync || !1, (_.animating !== !0 || _.options.waitForAnimate !== !0) && !(_.options.fade === !0 && _.currentSlide === index || _.slideCount <= _.options.slidesToShow)) return sync === !1 && _.asNavFor(index), targetSlide = index, targetLeft = _.getLeft(targetSlide), slideLeft = _.getLeft(_.currentSlide), _.currentLeft = null === _.swipeLeft ? slideLeft : _.swipeLeft, _.options.infinite === !1 && _.options.centerMode === !1 && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll) ? void(_.options.fade === !1 && (targetSlide = _.currentSlide, dontAnimate !== !0 ? _.animateSlide(slideLeft, function() { _.postSlide(targetSlide) }) : _.postSlide(targetSlide))) : _.options.infinite === !1 && _.options.centerMode === !0 && (index < 0 || index > _.slideCount - _.options.slidesToScroll) ? void(_.options.fade === !1 && (targetSlide = _.currentSlide, dontAnimate !== !0 ? _.animateSlide(slideLeft, function() { _.postSlide(targetSlide) }) : _.postSlide(targetSlide))) : (_.options.autoplay && clearInterval(_.autoPlayTimer), animSlide = targetSlide < 0 ? _.slideCount % _.options.slidesToScroll !== 0 ? _.slideCount - _.slideCount % _.options.slidesToScroll : _.slideCount + targetSlide : targetSlide >= _.slideCount ? _.slideCount % _.options.slidesToScroll !== 0 ? 0 : targetSlide - _.slideCount : targetSlide, _.animating = !0, _.$slider.trigger("beforeChange", [_, _.currentSlide, animSlide]), oldSlide = _.currentSlide, _.currentSlide = animSlide, _.setSlideClasses(_.currentSlide), _.options.asNavFor && (navTarget = _.getNavTarget(), navTarget = navTarget.slick("getSlick"), navTarget.slideCount <= navTarget.options.slidesToShow && navTarget.setSlideClasses(_.currentSlide)), _.updateDots(), _.updateArrows(), _.options.fade === !0 ? (dontAnimate !== !0 ? (_.fadeSlideOut(oldSlide), _.fadeSlide(animSlide, function() { _.postSlide(animSlide) })) : _.postSlide(animSlide), void _.animateHeight()) : void(dontAnimate !== !0 ? _.animateSlide(targetLeft, function() { _.postSlide(animSlide) }) : _.postSlide(animSlide))) }, Slick.prototype.startLoad = function() {
         var _ = this;
         _.options.arrows === !0 && _.slideCount > _.options.slidesToShow && (_.$prevArrow.hide(), _.$nextArrow.hide()), _.options.dots === !0 && _.slideCount > _.options.slidesToShow && _.$dots.hide(), _.$slider.addClass("slick-loading") }, Slick.prototype.swipeDirection = function() {
         var xDist, yDist, r, swipeAngle, _ = this;
         return xDist = _.touchObject.startX - _.touchObject.curX, yDist = _.touchObject.startY - _.touchObject.curY, r = Math.atan2(yDist, xDist), swipeAngle = Math.round(180 * r / Math.PI), swipeAngle < 0 && (swipeAngle = 360 - Math.abs(swipeAngle)), swipeAngle <= 45 && swipeAngle >= 0 ? _.options.rtl === !1 ? "left" : "right" : swipeAngle <= 360 && swipeAngle >= 315 ? _.options.rtl === !1 ? "left" : "right" : swipeAngle >= 135 && swipeAngle <= 225 ? _.options.rtl === !1 ? "right" : "left" : _.options.verticalSwiping === !0 ? swipeAngle >= 35 && swipeAngle <= 135 ? "down" : "up" : "vertical" }, Slick.prototype.swipeEnd = function(event) {
         var slideCount, direction, _ = this;
         if (_.dragging = !1, _.interrupted = !1, _.shouldClick = !(_.touchObject.swipeLength > 10), void 0 === _.touchObject.curX) return !1;
         if (_.touchObject.edgeHit === !0 && _.$slider.trigger("edge", [_, _.swipeDirection()]), _.touchObject.swipeLength >= _.touchObject.minSwipe) {
            switch (direction = _.swipeDirection()) {
               case "left":
               case "down":
                  slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount(), _.currentDirection = 0;
                  break;
               case "right":
               case "up":
                  slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount(), _.currentDirection = 1 } "vertical" != direction && (_.slideHandler(slideCount), _.touchObject = {}, _.$slider.trigger("swipe", [_, direction])) } else _.touchObject.startX !== _.touchObject.curX && (_.slideHandler(_.currentSlide), _.touchObject = {}) }, Slick.prototype.swipeHandler = function(event) {
         var _ = this;
         if (!(_.options.swipe === !1 || "ontouchend" in document && _.options.swipe === !1 || _.options.draggable === !1 && event.type.indexOf("mouse") !== -1)) switch (_.touchObject.fingerCount = event.originalEvent && void 0 !== event.originalEvent.touches ? event.originalEvent.touches.length : 1, _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold, _.options.verticalSwiping === !0 && (_.touchObject.minSwipe = _.listHeight / _.options.touchThreshold), event.data.action) {
            case "start":
               _.swipeStart(event);
               break;
            case "move":
               _.swipeMove(event);
               break;
            case "end":
               _.swipeEnd(event) } }, Slick.prototype.swipeMove = function(event) {
         var curLeft, swipeDirection, swipeLength, positionOffset, touches, _ = this;
         return touches = void 0 !== event.originalEvent ? event.originalEvent.touches : null, !(!_.dragging || touches && 1 !== touches.length) && (curLeft = _.getLeft(_.currentSlide), _.touchObject.curX = void 0 !== touches ? touches[0].pageX : event.clientX, _.touchObject.curY = void 0 !== touches ? touches[0].pageY : event.clientY, _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2))), _.options.verticalSwiping === !0 && (_.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)))), swipeDirection = _.swipeDirection(), "vertical" !== swipeDirection ? (void 0 !== event.originalEvent && _.touchObject.swipeLength > 4 && event.preventDefault(), positionOffset = (_.options.rtl === !1 ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1), _.options.verticalSwiping === !0 && (positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1), swipeLength = _.touchObject.swipeLength, _.touchObject.edgeHit = !1, _.options.infinite === !1 && (0 === _.currentSlide && "right" === swipeDirection || _.currentSlide >= _.getDotCount() && "left" === swipeDirection) && (swipeLength = _.touchObject.swipeLength * _.options.edgeFriction, _.touchObject.edgeHit = !0), _.options.vertical === !1 ? _.swipeLeft = curLeft + swipeLength * positionOffset : _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset, _.options.verticalSwiping === !0 && (_.swipeLeft = curLeft + swipeLength * positionOffset), _.options.fade !== !0 && _.options.touchMove !== !1 && (_.animating === !0 ? (_.swipeLeft = null, !1) : void _.setCSS(_.swipeLeft))) : void 0) }, Slick.prototype.swipeStart = function(event) {
         var touches, _ = this;
         return _.interrupted = !0, 1 !== _.touchObject.fingerCount || _.slideCount <= _.options.slidesToShow ? (_.touchObject = {}, !1) : (void 0 !== event.originalEvent && void 0 !== event.originalEvent.touches && (touches = event.originalEvent.touches[0]), _.touchObject.startX = _.touchObject.curX = void 0 !== touches ? touches.pageX : event.clientX, _.touchObject.startY = _.touchObject.curY = void 0 !== touches ? touches.pageY : event.clientY, void(_.dragging = !0)) }, Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
         var _ = this;
         null !== _.$slidesCache && (_.unload(), _.$slideTrack.children(this.options.slide).detach(), _.$slidesCache.appendTo(_.$slideTrack), _.reinit()) }, Slick.prototype.unload = function() {
         var _ = this;
         $(".slick-cloned", _.$slider).remove(), _.$dots && _.$dots.remove(), _.$prevArrow && _.htmlExpr.test(_.options.prevArrow) && _.$prevArrow.remove(), _.$nextArrow && _.htmlExpr.test(_.options.nextArrow) && _.$nextArrow.remove(), _.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "") }, Slick.prototype.unslick = function(fromBreakpoint) {
         var _ = this;
         _.$slider.trigger("unslick", [_, fromBreakpoint]), _.destroy();
      }, Slick.prototype.updateArrows = function() {
         var centerOffset, _ = this;
         centerOffset = Math.floor(_.options.slidesToShow / 2), _.options.arrows === !0 && _.slideCount > _.options.slidesToShow && !_.options.infinite && (_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === _.currentSlide ? (_.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : _.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === !1 ? (_.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : _.currentSlide >= _.slideCount - 1 && _.options.centerMode === !0 && (_.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))) }, Slick.prototype.updateDots = function() {
         var _ = this;
         null !== _.$dots && (_.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), _.$dots.find("li").eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false")) }, Slick.prototype.visibility = function() {
         var _ = this;
         _.options.autoplay && (document[_.hidden] ? _.interrupted = !0 : _.interrupted = !1) }, $.fn.slick = function() {
         var i, ret, _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length;
         for (i = 0; i < l; i++)
            if ("object" == typeof opt || "undefined" == typeof opt ? _[i].slick = new Slick(_[i], opt) : ret = _[i].slick[opt].apply(_[i].slick, args), "undefined" != typeof ret) return ret;
         return _ }
   }), $(document).ready(function() { quotes = [], authors = [], quotes[0] = "I have a new philosophy. I'm only going to dread one day at a time.", authors[0] = "Charles Schulz", quotes[1] = "Reality is the leading cause of stress for those in touch with it.", authors[1] = "Jack Wagner", quotes[2] = "Few things are harder to put up with than the annoyance of a good example.", authors[2] = "Mark Twain", quotes[3] = "The pure and simple truth is rarely pure and never simple.", authors[3] = "Oscar Wilde", quotes[4] = "There's no business like show business, but there are several businesses like accounting.", authors[4] = "David Letterman", quotes[5] = "Man invented language to satisfy his deep need to complain.", authors[5] = "Lily Tomlin", quotes[6] = "Muddy water is best cleared by leaving it alone.", authors[6] = "Alan Watts", index = Math.floor(Math.random() * quotes.length), console.log('"' + quotes[index] + '" - ' + authors[index]) }), $(document).ready(function() { $(".datepicker input").focus(function() {
         var date, $el = $(this);
         date = "" === $(this).val() ? new Date : new Date($(this).val()), createCalendar($el, date, !1) }), $(document).on("click", ".datepicker-nav", function(event) {
         var date = new Date($(this).attr("data-date")),
            $el = $(this).closest(".datepicker").children("input");
         event.stopPropagation(), createCalendar($el, date, !0) }), $(document).on("click", ".datepicker .date", function() {
         var $calendar = $(this).parents(".datepicker").children(".datepicker-calendar"),
            $input = $(this).parents(".datepicker").children("input"),
            date = new Date($(this).attr("data-date")),
            month = date.getMonth() + 1,
            day = date.getDate(),
            year = date.getFullYear(),
            value = month + "/" + day + "/" + year;
         $input.val(value), $calendar.remove() }), $(document).on("click", function(event) {
         var $target = $(event.target);
         $target.parents(".datepicker-calendar").length || $target.is(".datepicker-calendar") || $target.is(".datepicker input") || $(".datepicker-calendar").remove() }) }), $(document).ready(function() {
      function fitSection() {
         var headerHeight = $(".headerMain").outerHeight(),
            footHeight = $(".footerMain").outerHeight(),
            windowHeight = $(window).innerHeight(),
            elementHeight = headerHeight + footHeight,
            fillHeight = windowHeight - elementHeight;
         $("section:last-of-type").css("min-height", fillHeight) }
      fitSection(), $(window).on("resize orientationchange scroll", fitSection) }), $(document).ready(function() { $("div.headerMain-mobileToggle").click(function() { $("body").toggleClass("js-drawer-open") }), $(document).click(function(event) {
         var $target = $(event.target),
            isChild = !!$target.closest(".mobileDrawer").length,
            isDrawer = $target.is(".mobileDrawer"),
            isToggle = $target.is(".headerMain-mobileToggle");
         isChild || isDrawer || isToggle || $("body").removeClass("js-drawer-open") }), $(window).on("resize orientationchange", function() { $("body").removeClass("js-drawer-open") }) }), ! function(e, n, s) {
      function o(e, n) {
         return typeof e === n }

      function a() {
         var e, n, s, a, t, r, f;
         for (var c in l)
            if (l.hasOwnProperty(c)) {
               if (e = [], n = l[c], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                  for (s = 0; s < n.options.aliases.length; s++) e.push(n.options.aliases[s].toLowerCase());
               for (a = o(n.fn, "function") ? n.fn() : n.fn, t = 0; t < e.length; t++) r = e[t], f = r.split("."), 1 === f.length ? Modernizr[f[0]] = a : (!Modernizr[f[0]] || Modernizr[f[0]] instanceof Boolean || (Modernizr[f[0]] = new Boolean(Modernizr[f[0]])), Modernizr[f[0]][f[1]] = a), i.push((a ? "" : "no-") + f.join("-")) } }

      function t(e) {
         var n = f.className,
            s = Modernizr._config.classPrefix || "";
         if (c && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + s + "no-js(\\s|$)");
            n = n.replace(o, "$1" + s + "js$2") }
         Modernizr._config.enableClasses && (n += " " + s + e.join(" " + s), c ? f.className.baseVal = n : f.className = n) }
      var i = [],
         l = [],
         r = { _version: "3.5.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function(e, n) {
               var s = this;
               setTimeout(function() { n(s[e]) }, 0) }, addTest: function(e, n, s) { l.push({ name: e, fn: n, options: s }) }, addAsyncTest: function(e) { l.push({ name: null, fn: e }) } },
         Modernizr = function() {};
      Modernizr.prototype = r, Modernizr = new Modernizr;
      var f = n.documentElement,
         c = "svg" === f.nodeName.toLowerCase(),
         u = {}.toString;
      Modernizr.addTest("smil", function() {
         return !!n.createElementNS && /SVGAnimate/.test(u.call(n.createElementNS("http://www.w3.org/2000/svg", "animate"))) }), a(), t(i), delete r.addTest, delete r.addAsyncTest;
      for (var d = 0; d < Modernizr._q.length; d++) Modernizr._q[d]();
      e.Modernizr = Modernizr }(window, document), Modernizr.smil || $("body").addClass("IE"), $(document).ready(function() {
      function scrollToTop() {
         var time = .4 * $(document).scrollTop();
         time > 1775 && (time = 1775), $("html, body").stop(!0, !1).animate({ scrollTop: 0 }, time) }

      function scrollToSection(destination) {
         var headerHeight = 80,
            scrollTopStart = $(document).scrollTop(),
            scrollTopEnd = $(destination).offset().top - headerHeight,
            distance = Math.abs(scrollTopStart - scrollTopEnd),
            time = .6 * distance;
         time > 1775 && (time = 1225), console.log(time), $("html, body").stop(!0, !1).animate({ scrollTop: scrollTopEnd }, time), $("body").hasClass("js-drawer-open") && $("body").removeClass("js-drawer-open") }
      $(".headerMain-logo").click(function(event) { scrollToTop() }), $(".navMain > ul > li, .mobileDrawer > nav > ul > li").click(function(event) {
         var elementClick = $(this).children("a"),
            elementClickDest = elementClick.attr("href");
         event.preventDefault(), scrollToSection(elementClickDest) }), $(".navMain > ul > li.has-children li a").click(function(event) { event.stopPropagation() }) }), $(document).ready(function() {
      var $paraContainer = $(".parallax");
      parallax($paraContainer), $(window).on("scroll resize orientationchange", function() { parallax($paraContainer) }) }), $(document).ready(function() { $(".projectGrid:not(.no-popup) a").magnificPopup({ type: "iframe", disableOn: function() {
            return !!window.matchMedia("(min-width: 851px)").matches } }) }), $(document).ready(function() { $(".navMain > ul").retach({ destination: ".mobileDrawer > nav", mediaQuery: 640 }) }),
   function($) { $.fn.retach = function(options) {
         function moveItems() { $('i[data-placeholderID="' + placeholderID + '"]').length <= 0 && $items.first().before($placeholder), window.matchMedia("(max-width: " + mediaQuery + "px)").matches ? ("append" == $prependAppend ? $destination.append($items) : $destination.prepend($items), $items.addClass(movedClass)) : ($placeholder.after($items), $items.removeClass(movedClass)) }
         var defaults = { destination: "body", mediaQuery: 1023, movedClass: "is-moved", prependAppend: "append" },
            options = $.extend({}, defaults, options),
            $items = this,
            $destination = $(options.destination),
            mediaQuery = options.mediaQuery,
            movedClass = options.movedClass,
            $prependAppend = options.prependAppend,
            placeholderID = Math.floor(1e4 * Math.random() + 1) + Math.floor(1e4 * Math.random() + 1),
            $placeholder = $('<i class="placeholder" data-placeholderID="' + placeholderID + '" />');
         return moveItems(), $(window).resize(function() { moveItems() }), $items } }(jQuery), $(window).load(function() { $(".iconBlock-group").scrollFade({ testParent: ".iconBlock", mediaQuery: mediaMed }), $(".projectGrid-container").scrollFade({ testParent: ".projectGrid", mediaQuery: mediaMed }) }),
   function($) { $.fn.scrollFade = function(opts) {
         var defaults = { duration: .5, useDelay: !0, delayIncrement: .5, visibleDistance: 30, mediaQuery: 0 },
            options = $.extend({}, defaults, opts),
            duration = options.duration,
            useDelay = options.useDelay,
            delayIncrement = options.delayIncrement,
            visibleDistance = options.visibleDistance / 100 * $(window).innerHeight(),
            mediaQuery = options.mediaQuery;
         if (!window.matchMedia("(max-width:" + mediaQuery + "px)").matches) {
            var $previousParent, $items = $(this),
               delay = 0;
            if ("undefined" == typeof options.testParent) return void alert('The "testParent" parameter is required for the fadeScroll() plugin. It is missing from the plugin called on:\n\n' + $items.selector + ".");
            var testParent = options.testParent,
               itemsOffsetTop = $items.closest(testParent).offset().top;
            if (!($(window).scrollTop() + $(window).outerHeight() > itemsOffsetTop)) return $items.css("transition", "none").css("opacity", 0), $items.css({ transition: "transform " + duration + "s ease-out, opacity " + duration + "s ease-out", transform: "scale(1.07, 1.07) translate(0, 25px)" }), $items.each(function() {
               var $item = $(this),
                  $itemParent = $item.closest(testParent),
                  itemParentOffsetTop = $itemParent.offset().top + visibleDistance,
                  animationPending = !0; "undefined" == typeof $previousParent && ($previousParent = $itemParent), $previousParent.get(0) !== $itemParent.get(0) && (delay = 0), $item.css({ "transition-delay": delay + "s" }), $(window).scroll(function() { animationPending && $(window).scrollTop() + $(window).outerHeight() > itemParentOffsetTop && ($item.css({ opacity: 1, top: "0", transform: "scale(1, 1) translate(0, 0)" }), setTimeout(function() { $item.css("opacity", "").css("top", "").css("transform", "").css("transition", ""), animationPending = !1 }, 1e3 * (duration + delay))) }), useDelay && (delay += delayIncrement), $previousParent = $itemParent }), $items } } }(jQuery), $(document).ready(function() {
      function stickHead() { $(window).scrollTop() > 60 ? $(".headerMain").addClass("js-header-fixed") : $(".headerMain").removeClass("js-header-fixed") }
      stickHead(), $(window).scroll(stickHead) }),
   function($) { $.fn.swapBackground = function(options) {
         var opts = options;
         return this.each(function() {
            function swapImages() { window.matchMedia("(max-width: " + mediaQuery + "px)").matches ? $this.css("background-image", "url(" + srcSm + ")") : $this.css("background-image", "url(" + srcLg + ")") }
            var defaults = { srcSm: $(this).data("sm"), srcLg: $(this).data("lg"), mediaQuery: 1023 },
               options = $.extend({}, defaults, opts),
               $this = $(this),
               srcSm = options.srcSm,
               srcLg = options.srcLg,
               mediaQuery = options.mediaQuery;
            swapImages(), $(window).resize(function() { swapImages() }) }) } }(jQuery), $(document).ready(function() { tabs(), $(window).on("resize orientationchange", function() {
         if (window.matchMedia("(min-width:851px)").matches && $(".underline").length) {
            var $underline = $(".underline");
            $underline.each(function() { underline($(this)) }) } }) }), $(document).ready(function() {
      var now = new Date,
         birth = new Date("09/26/1991");
      $("#age").text(age(birth, now)) }), $(document).ready(function() {
      var year = (new Date).getFullYear();
      $("#year").text(year) });
var mediaXSm = 1,
   mediaSm = 481,
   mediaMed = 641,
   mediaLg = 851,
   mediaXLg = 1025,
   mediaXXLg = 1441;
