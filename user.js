user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.update.auto", false);
user_pref("beacon.enabled", false);
user_pref("breakpad.reportURL", ""); // отключение отчетов об авариях
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.disableResetPrompt", true);

// отключение рекламы, предзагрузки и маркетингового мусора в новых вкладках
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.directory.ping", "data:text/plain,");
user_pref("browser.newtabpage.directory.source", "data:text/plain,");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);

// отключить "Snippets" (содержимое Mozilla, отображаемое на экране about:home)
user_pref("browser.aboutHomeSnippets.updateUrl", "https://127.0.0.1");

user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.selfsupport.url", "");
user_pref("browser.send_pings", false);
user_pref("browser.sessionstore.privacy_level", 0);
user_pref("browser.tabs.crashReporting.sendReport", false); // отключение отправки сообщений об авариях
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.trimURLs", false);

// отключение отчета о состоянии
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("datareporting.healthreport.uploadEnabled", false);

user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("device.sensors.ambientLight.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("device.sensors.motion.enabled", false);
user_pref("device.sensors.orientation.enabled", false);
user_pref("device.sensors.proximity.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("dom.event.clipboardevents.enabled", false);

// отключение "экспериментов"
user_pref("dom.webaudio.enabled", false);
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");

user_pref("experiments.supported", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.getAddons.showPane", false);

// отключить "Pocket" (сторонний сервис "сохранить на потом") и удалить ссылки для надежности
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");

// отключение "социальной" интеграции
user_pref("social.whitelist", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.directories", "");
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.enabled", false);

// отключить FlyWeb, набор API для рекламы и обнаружения локальных веб-серверов
user_pref("dom.flyweb.enabled", false);

// отключение синхронизации
user_pref("services.sync.enabled", false);

user_pref("extensions.shield-recipe-client.api_url", "");
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("extensions.webservice.discoverURL", "");
user_pref("media.autoplay.default", 0);
user_pref("media.autoplay.enabled", true);
user_pref("media.eme.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.video_stats.enabled", false);
user_pref("network.allow-experiments", false); // отключение разрешения Mozilla на молчаливое участие в тестах
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.http.referer.spoofSource", true);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.trr.mode", 5);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.donottrackheader.value", 1);
user_pref("privacy.query_stripping", true);

// Отключение бесполезных защит
user_pref("privacy.trackingprotection.cryptomining.enabled", false);
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.fingerprinting.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);

// отключение отправки отчетов об ошибках ssl
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");

// пропускаем все проверки при старте браузера
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.rights.3.shown", true);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");
user_pref("browser.laterrun.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.usedOnWindows10.introURL", "");

// отключение определения геолокации (вряд ли ты не знаешь где сейчас твой комп стоит)
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "https://127.0.0.1");
user_pref("geo.wifi.logging.enabled", false);
user_pref("browser.search.geoip.url", "");
user_pref("geo.wifi.xhr.timeout", 1);
user_pref("browser.search.geoip.timeout", 1);

// принудительно отправляем поисковикам местопложение США
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.region", "US");

// отключаем географически специфичные результаты/поисковые системы
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");

user_pref("intl.locale.matchOS", false); // запрещаем браузеру использовать локаль ОС
user_pref("general.useragent.locale", "en-US"); // принудительно устанавливаем локаль

user_pref("intl.accept_languages", "en-US, en"); // язык браузера en
user_pref("javascript.use_us_english_locale", true);

user_pref("security.ssl.disable_session_identifiers", true);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsoredTopSite", false);
user_pref("signon.autofillForms", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", ""); // удаление идентификатора клиента телеметрии
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("webgl.renderer-string-override", " ");
user_pref("webgl.vendor-string-override", " ");
user_pref("browser.uidensity", 1); // делает вкладки компактными
user_pref("browser.tabs.tabmanager.enabled", false); // убирает стрелку рядом с вкладками

// отключить «Heartbeat» (телеметрия рейтинга пользователей Mozilla)
user_pref("browser.selfsupport.enabled", false);
user_pref("browser.selfsupport.url", "");
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);

// отключение URL-адресов отчетов
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");