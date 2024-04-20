var mGBA = (() => {
  var _scriptDir = import.meta.url;
  return (
      function(moduleArg = {}) {
          var Module = moduleArg;
          var readyPromiseResolve, readyPromiseReject;
          Module["ready"] = new Promise((resolve, reject) => {
              readyPromiseResolve = resolve;
              readyPromiseReject = reject
          });
          Module.loadGame = name => {
              const loadGame = cwrap("loadGame", "number", ["string"]);
              if (loadGame(name)) {
                  const arr = name.split(".");
                  arr.pop();
                  const saveName = arr.join(".") + ".sav";
                  Module.gameName = name;
                  Module.saveName = saveName.replace("/data/games/", "/data/saves/");
                  return true
              }
              return false
          };
          // remove keypress-keydown-keyup in _emscripten_set_keydown_callback_on_thread
          Module.SDL2 = () => {var SDL2 = Module["SDL2"];if (SDL2.audioContext.state === 'suspended' || SDL2.audioContext.state === 'interrupted') {SDL2.audioContext.resume();}}
          Module.domToPng = () => Promise.resolve('dataurl')
          Module.editFileName = (filepath,filename,newFilename) => FS.rename(filepath, filepath.replace(filename, newFilename));
          Module.deleteFile = (filepath) => FS.unlink(filepath);
          Module.fileSize = (filepath) => FS.stat(filepath).size;
          Module.downloadFile = (filepath) => FS.readFile(filepath);
          Module.getSave = () => FS.readFile(Module.saveName);
          Module.listRoms = () => FS.readdir("/data/games/");
          Module.listSaves = () => FS.readdir("/data/saves/");
          Module.listStates = () => FS.readdir("/data/states/");
          Module.listCheats = () => FS.readdir("/data/cheats/");
          // remove keypress-keydown-keyup in _emscripten_set_keydown_callback_on_thread
          Module.FSInit = () => new Promise((resolve, reject) => {
              FS.mkdir("/data");
              FS.mount(FS.filesystems.IDBFS, {}, "/data");
              FS.syncfs(true, err => {
                  if (err) {
                      reject(new Error(`Error syncing app data from IndexedDB: ${err}`))
                  }
                  try {
                      FS.mkdir("/data/saves")
                  } catch (e) {}
                  try {
                      FS.mkdir("/data/states")
                  } catch (e) {}
                  try {
                      FS.mkdir("/data/games")
                  } catch (e) {}
                  try {
                      FS.mkdir("/data/cheats")
                  } catch (e) {}
                  resolve()
              })
          });
          Module.FSSync = () => new Promise((resolve, reject) => {
              FS.syncfs(err => {
                  if (err) {
                      reject(new Error(`Error syncing app data to IndexedDB: ${err}`))
                  }
                  resolve()
              })
          });
          Module.filePaths = () => ({
              root: "/data",
              cheatsPath: "/data/cheats",
              gamePath: "/data/games",
              savePath: "/data/saves",
              saveStatePath: "/data/states"
          });
          Module.uploadSaveOrSaveState = (file, callback) => {
              const split = file.name.split(".");
              if (split.length < 2) {
                  console.warn("unrecognized file extension: " + file.name);
                  return
              }
              const extension = split[split.length - 1].toLowerCase();
              let dir = null;
              if (extension == "sav") {
                  dir = "/data/saves/"
              } else if (extension.startsWith("ss")) {
                  dir = "/data/states/"
              } else {
                  console.warn("unrecognized file extension: " + extension);
                  return
              }
              const reader = new FileReader;
              reader.onload = e => {
                  FS.writeFile(dir + file.name, new Uint8Array(e.target.result));
                  if (callback) {
                      callback()
                  }
              };
              reader.readAsArrayBuffer(file)
          };
          Module.uploadRom = (file, callback) => {
              const split = file.name.split(".");
              if (split.length < 2) {
                  console.warn("unrecognized file extension: " + file.name);
                  return
              }
              const extension = split[split.length - 1].toLowerCase();
              let dir = null;
              if (["gba", "gbc", "gb", "zip", "7z"].includes(extension)) {
                  dir = "/data/games/"
              } else {
                  console.warn("unrecognized file extension: " + extension);
                  return
              }
              const reader = new FileReader;
              reader.onload = e => {
                  FS.writeFile(dir + file.name, new Uint8Array(e.target.result));
                  if (callback) {
                      callback()
                  }
              };
              reader.readAsArrayBuffer(file)
          };
          Module.uploadCheats = (file, callback) => {
              const split = file.name.split(".");
              if (split.length < 2) {
                  console.warn("unrecognized file extension: " + file.name);
                  return
              }
              const extension = split[split.length - 1].toLowerCase();
              let dir = null;
              if (extension == "cheats") {
                  dir = "/data/cheats/"
              } else {
                  console.warn("unrecognized file extension: " + extension);
                  return
              }
              const reader = new FileReader;
              reader.onload = e => {
                  FS.writeFile(dir + file.name, new Uint8Array(e.target.result));
                  if (callback) {
                      callback()
                  }
              };
              reader.readAsArrayBuffer(file)
          };
          const keyBindings = new Map([
              ["a", 0],
              ["b", 1],
              ["select", 2],
              ["start", 3],
              ["right", 4],
              ["left", 5],
              ["up", 6],
              ["down", 7],
              ["r", 8],
              ["l", 9]
          ]);
          Module.buttonPress = name => {
              const buttonPress = cwrap("buttonPress", null, ["number"]);
              buttonPress(keyBindings.get(name.toLowerCase()))
          };
          Module.buttonUnpress = name => {
              const buttonUnpress = cwrap("buttonUnpress", null, ["number"]);
              buttonUnpress(keyBindings.get(name.toLowerCase()))
          };
          Module.bindKey = (bindingName, inputName) => {
              const bindKey = cwrap("bindKey", null, ["string", "number"]);
              bindKey(bindingName, keyBindings.get(inputName.toLowerCase()))
          };
          Module.pauseGame = () => {
              const pauseGame = cwrap("pauseGame", null, []);
              pauseGame()
          };
          Module.resumeGame = () => {
              const resumeGame = cwrap("resumeGame", null, []);
              resumeGame()
          };
          Module.getVolume = () => {
              const getVolume = cwrap("getVolume", "number", []);
              return getVolume()
          };
          Module.setVolume = percent => {
              const setVolume = cwrap("setVolume", null, ["number"]);
              setVolume(percent)
          };
          Module.getMainLoopTimingMode = () => {
              const getMainLoopTimingMode = cwrap("getMainLoopTimingMode", "number", []);
              return getMainLoopTimingMode()
          };
          Module.getMainLoopTimingValue = () => {
              const getMainLoopTimingValue = cwrap("getMainLoopTimingValue", "number", []);
              return getMainLoopTimingValue()
          };
          Module.setMainLoopTiming = (mode, value) => {
              const setMainLoopTiming = cwrap("setMainLoopTiming", "number", ["number", "number"]);
              setMainLoopTiming(mode, value)
          };
          Module.quitGame = () => {
              const quitGame = cwrap("quitGame", null, []);
              quitGame()
          };
          Module.quitMgba = () => {
              const quitMgba = cwrap("quitMgba", null, []);
              quitMgba()
          };
          Module.quickReload = () => {
              const quickReload = cwrap("quickReload", null, []);
              quickReload()
          };
          Module.toggleInput = toggle => {
              const setEventEnable = cwrap("setEventEnable", null, ["boolean"]);
              setEventEnable(toggle)
          };
          Module.screenShot = callback => {
              const ptr = addFunction(callback, "v");
              const screenShot = cwrap("screenShot", null, ["number"]);
              screenShot(ptr);
              removeFunction(ptr)
          };
          Module.saveState = slot => {
              const saveState = cwrap("saveState", "boolean", ["number"]);
              return saveState(slot)
          };
          Module.loadState = slot => {
              const loadState = cwrap("loadState", "boolean", ["number"]);
              return loadState(slot)
          };
          Module.saveStateSlot = (slot, flags) => {
              var saveStateSlot = cwrap("saveStateSlot", "number", ["number", "number"]);
              Module.saveStateSlot = (slot, flags) => {
                  if (flags === undefined) {
                      flags = 63
                  }
                  return saveStateSlot(slot, flags)
              };
              return Module.saveStateSlot(slot, flags)
          };
          Module.loadStateSlot = (slot, flags) => {
              var loadStateSlot = cwrap("loadStateSlot", "number", ["number", "number"]);
              Module.loadStateSlot = (slot, flags) => {
                  if (flags === undefined) {
                      flags = 61
                  }
                  return loadStateSlot(slot, flags)
              };
              return Module.loadStateSlot(slot, flags)
          };
          Module.autoLoadCheats = () => {
              const autoLoadCheats = cwrap("autoLoadCheats", "bool", []);
              return autoLoadCheats()
          };
          var moduleOverrides = Object.assign({}, Module);
          var arguments_ = [];
          var thisProgram = "./this.program";
          var quit_ = (status, toThrow) => {
              throw toThrow
          };
          var ENVIRONMENT_IS_WEB = typeof window == "object";
          var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
          var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
          var scriptDirectory = "";

          function locateFile(path) {
              if (Module["locateFile"]) {
                  return Module["locateFile"](path, scriptDirectory)
              }
              return scriptDirectory + path
          }
          var read_, readAsync, readBinary;
          if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
              if (ENVIRONMENT_IS_WORKER) {
                  scriptDirectory = self.location.href
              } else if (typeof document != "undefined" && document.currentScript) {
                  scriptDirectory = document.currentScript.src
              }
              if (_scriptDir) {
                  scriptDirectory = _scriptDir
              }
              if (scriptDirectory.startsWith("blob:")) {
                  scriptDirectory = ""
              } else {
                  scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1)
              } {
                  read_ = url => {
                      var xhr = new XMLHttpRequest;
                      xhr.open("GET", url, false);
                      xhr.send(null);
                      return xhr.responseText
                  };
                  if (ENVIRONMENT_IS_WORKER) {
                      readBinary = url => {
                          var xhr = new XMLHttpRequest;
                          xhr.open("GET", url, false);
                          xhr.responseType = "arraybuffer";
                          xhr.send(null);
                          return new Uint8Array(xhr.response)
                      }
                  }
                  readAsync = (url, onload, onerror) => {
                      var xhr = new XMLHttpRequest;
                      xhr.open("GET", url, true);
                      xhr.responseType = "arraybuffer";
                      xhr.onload = () => {
                          if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                              onload(xhr.response);
                              return
                          }
                          onerror()
                      };
                      xhr.onerror = onerror;
                      xhr.send(null)
                  }
              }
          } else {}
          var out = Module["print"] || console.log.bind(console);
          var err = Module["printErr"] || console.error.bind(console);
          Object.assign(Module, moduleOverrides);
          moduleOverrides = null;
          if (Module["arguments"]) arguments_ = Module["arguments"];
          if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
          if (Module["quit"]) quit_ = Module["quit"];
          var wasmBinary;
          if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
          if (typeof WebAssembly != "object") {
              abort("no native wasm support detected")
          }
          var wasmMemory;
          var ABORT = false;
          var EXITSTATUS;

          function assert(condition, text) {
              if (!condition) {
                  abort(text)
              }
          }
          var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

          function updateMemoryViews() {
              var b = wasmMemory.buffer;
              Module["HEAP8"] = HEAP8 = new Int8Array(b);
              Module["HEAP16"] = HEAP16 = new Int16Array(b);
              Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
              Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
              Module["HEAP32"] = HEAP32 = new Int32Array(b);
              Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
              Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
              Module["HEAPF64"] = HEAPF64 = new Float64Array(b)
          }
          var __ATPRERUN__ = [];
          var __ATINIT__ = [];
          var __ATMAIN__ = [];
          var __ATPOSTRUN__ = [];
          var runtimeInitialized = false;

          function preRun() {
              if (Module["preRun"]) {
                  if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
                  while (Module["preRun"].length) {
                      addOnPreRun(Module["preRun"].shift())
                  }
              }
              callRuntimeCallbacks(__ATPRERUN__)
          }

          function initRuntime() {
              runtimeInitialized = true;
              if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
              FS.ignorePermissions = false;
              TTY.init();
              callRuntimeCallbacks(__ATINIT__)
          }

          function preMain() {
              callRuntimeCallbacks(__ATMAIN__)
          }

          function postRun() {
              if (Module["postRun"]) {
                  if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
                  while (Module["postRun"].length) {
                      addOnPostRun(Module["postRun"].shift())
                  }
              }
              callRuntimeCallbacks(__ATPOSTRUN__)
          }

          function addOnPreRun(cb) {
              __ATPRERUN__.unshift(cb)
          }

          function addOnInit(cb) {
              __ATINIT__.unshift(cb)
          }

          function addOnPostRun(cb) {
              __ATPOSTRUN__.unshift(cb)
          }
          var runDependencies = 0;
          var runDependencyWatcher = null;
          var dependenciesFulfilled = null;

          function getUniqueRunDependency(id) {
              return id
          }

          function addRunDependency(id) {
              runDependencies++;
              Module["monitorRunDependencies"]?.(runDependencies)
          }

          function removeRunDependency(id) {
              runDependencies--;
              Module["monitorRunDependencies"]?.(runDependencies);
              if (runDependencies == 0) {
                  if (runDependencyWatcher !== null) {
                      clearInterval(runDependencyWatcher);
                      runDependencyWatcher = null
                  }
                  if (dependenciesFulfilled) {
                      var callback = dependenciesFulfilled;
                      dependenciesFulfilled = null;
                      callback()
                  }
              }
          }

          function abort(what) {
              Module["onAbort"]?.(what);
              what = "Aborted(" + what + ")";
              err(what);
              ABORT = true;
              EXITSTATUS = 1;
              what += ". Build with -sASSERTIONS for more info.";
              var e = new WebAssembly.RuntimeError(what);
              readyPromiseReject(e);
              throw e
          }
          var dataURIPrefix = "data:application/octet-stream;base64,";
          var isDataURI = filename => filename.startsWith(dataURIPrefix);
          var wasmBinaryFile;
          if (Module["locateFile"]) {
              wasmBinaryFile = "mgba.wasm";
              if (!isDataURI(wasmBinaryFile)) {
                  wasmBinaryFile = locateFile(wasmBinaryFile)
              }
          } else {
              wasmBinaryFile = new URL("mgba.wasm", import.meta.url).href
          }

          function getBinarySync(file) {
              if (file == wasmBinaryFile && wasmBinary) {
                  return new Uint8Array(wasmBinary)
              }
              if (readBinary) {
                  return readBinary(file)
              }
              throw "both async and sync fetching of the wasm failed"
          }

          function getBinaryPromise(binaryFile) {
              if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
                  if (typeof fetch == "function") {
                      return fetch(binaryFile, {
                          credentials: "same-origin"
                      }).then(response => {
                          if (!response["ok"]) {
                              throw `failed to load wasm binary file at '${binaryFile}'`
                          }
                          return response["arrayBuffer"]()
                      }).catch(() => getBinarySync(binaryFile))
                  }
              }
              return Promise.resolve().then(() => getBinarySync(binaryFile))
          }

          function instantiateArrayBuffer(binaryFile, imports, receiver) {
              return getBinaryPromise(binaryFile).then(binary => WebAssembly.instantiate(binary, imports)).then(instance => instance).then(receiver, reason => {
                  err(`failed to asynchronously prepare wasm: ${reason}`);
                  abort(reason)
              })
          }

          function instantiateAsync(binary, binaryFile, imports, callback) {
              if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && typeof fetch == "function") {
                  return fetch(binaryFile, {
                      credentials: "same-origin"
                  }).then(response => {
                      var result = WebAssembly.instantiateStreaming(response, imports);
                      return result.then(callback, function(reason) {
                          err(`wasm streaming compile failed: ${reason}`);
                          err("falling back to ArrayBuffer instantiation");
                          return instantiateArrayBuffer(binaryFile, imports, callback)
                      })
                  })
              }
              return instantiateArrayBuffer(binaryFile, imports, callback)
          }

          function createWasm() {
              var info = {
                  "a": wasmImports
              };

              function receiveInstance(instance, module) {
                  wasmExports = instance.exports;
                  wasmMemory = wasmExports["_d"];
                  updateMemoryViews();
                  wasmTable = wasmExports["xe"];
                  addOnInit(wasmExports["$d"]);
                  removeRunDependency("wasm-instantiate");
                  return wasmExports
              }
              addRunDependency("wasm-instantiate");

              function receiveInstantiationResult(result) {
                  receiveInstance(result["instance"])
              }
              if (Module["instantiateWasm"]) {
                  try {
                      return Module["instantiateWasm"](info, receiveInstance)
                  } catch (e) {
                      err(`Module.instantiateWasm callback failed with error: ${e}`);
                      readyPromiseReject(e)
                  }
              }
              instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
              return {}
          }
          var tempDouble;
          var tempI64;
          var ASM_CONSTS = {
              272272: ($0, $1) => {
                  Module.canvas.width = $0;
                  Module.canvas.height = $1
              },
              272329: ($0, $1, $2, $3, $4, $5, $6) => {
                  Module.version = {
                      gitCommit: UTF8ToString($0),
                      gitShort: UTF8ToString($1),
                      gitBranch: UTF8ToString($2),
                      gitRevision: $3,
                      binaryName: UTF8ToString($4),
                      projectName: UTF8ToString($5),
                      projectVersion: UTF8ToString($6)
                  }
              },
              272554: () => {
                  FS.syncfs(function(err) {
                      assert(!err)
                  })
              },
              272598: () => {
                  if (typeof AudioContext !== "undefined") {
                      return true
                  } else if (typeof webkitAudioContext !== "undefined") {
                      return true
                  }
                  return false
              },
              272745: () => {
                  if (typeof navigator.mediaDevices !== "undefined" && typeof navigator.mediaDevices.getUserMedia !== "undefined") {
                      return true
                  } else if (typeof navigator.webkitGetUserMedia !== "undefined") {
                      return true
                  }
                  return false
              },
              272979: $0 => {
                  if (typeof Module["SDL2"] === "undefined") {
                      Module["SDL2"] = {}
                  }
                  var SDL2 = Module["SDL2"];
                  if (!$0) {
                      SDL2.audio = {}
                  } else {
                      SDL2.capture = {}
                  }
                  if (!SDL2.audioContext) {
                      if (typeof AudioContext !== "undefined") {
                          SDL2.audioContext = new AudioContext
                      } else if (typeof webkitAudioContext !== "undefined") {
                          SDL2.audioContext = new webkitAudioContext
                      }
                      if (SDL2.audioContext) {
                          autoResumeAudioContext(SDL2.audioContext)
                      }
                  }
                  return SDL2.audioContext === undefined ? -1 : 0
              },
              273472: () => {
                  var SDL2 = Module["SDL2"];
                  return SDL2.audioContext.sampleRate
              },
              273540: ($0, $1, $2, $3) => {
                  var SDL2 = Module["SDL2"];
                  var have_microphone = function(stream) {
                      if (SDL2.capture.silenceTimer !== undefined) {
                          clearTimeout(SDL2.capture.silenceTimer);
                          SDL2.capture.silenceTimer = undefined
                      }
                      SDL2.capture.mediaStreamNode = SDL2.audioContext.createMediaStreamSource(stream);
                      SDL2.capture.scriptProcessorNode = SDL2.audioContext.createScriptProcessor($1, $0, 1);
                      SDL2.capture.scriptProcessorNode.onaudioprocess = function(audioProcessingEvent) {
                          if (SDL2 === undefined || SDL2.capture === undefined) {
                              return
                          }
                          audioProcessingEvent.outputBuffer.getChannelData(0).fill(0);
                          SDL2.capture.currentCaptureBuffer = audioProcessingEvent.inputBuffer;
                          dynCall("vi", $2, [$3])
                      };
                      SDL2.capture.mediaStreamNode.connect(SDL2.capture.scriptProcessorNode);
                      SDL2.capture.scriptProcessorNode.connect(SDL2.audioContext.destination);
                      SDL2.capture.stream = stream
                  };
                  var no_microphone = function(error) {};
                  SDL2.capture.silenceBuffer = SDL2.audioContext.createBuffer($0, $1, SDL2.audioContext.sampleRate);
                  SDL2.capture.silenceBuffer.getChannelData(0).fill(0);
                  var silence_callback = function() {
                      SDL2.capture.currentCaptureBuffer = SDL2.capture.silenceBuffer;
                      dynCall("vi", $2, [$3])
                  };
                  SDL2.capture.silenceTimer = setTimeout(silence_callback, $1 / SDL2.audioContext.sampleRate * 1e3);
                  if (navigator.mediaDevices !== undefined && navigator.mediaDevices.getUserMedia !== undefined) {
                      navigator.mediaDevices.getUserMedia({
                          audio: true,
                          video: false
                      }).then(have_microphone).catch(no_microphone)
                  } else if (navigator.webkitGetUserMedia !== undefined) {
                      navigator.webkitGetUserMedia({
                          audio: true,
                          video: false
                      }, have_microphone, no_microphone)
                  }
              },
              275192: ($0, $1, $2, $3) => {
                  var SDL2 = Module["SDL2"];
                  SDL2.audio.scriptProcessorNode = SDL2.audioContext["createScriptProcessor"]($1, 0, $0);
                  SDL2.audio.scriptProcessorNode["onaudioprocess"] = function(e) {
                      if (SDL2 === undefined || SDL2.audio === undefined) {
                          return
                      }
                      SDL2.audio.currentOutputBuffer = e["outputBuffer"];
                      dynCall("vi", $2, [$3])
                  };
                  SDL2.audio.scriptProcessorNode["connect"](SDL2.audioContext["destination"])
              },
              275602: ($0, $1) => {
                  var SDL2 = Module["SDL2"];
                  var numChannels = SDL2.capture.currentCaptureBuffer.numberOfChannels;
                  for (var c = 0; c < numChannels; ++c) {
                      var channelData = SDL2.capture.currentCaptureBuffer.getChannelData(c);
                      if (channelData.length != $1) {
                          throw "Web Audio capture buffer length mismatch! Destination size: " + channelData.length + " samples vs expected " + $1 + " samples!"
                      }
                      if (numChannels == 1) {
                          for (var j = 0; j < $1; ++j) {
                              setValue($0 + j * 4, channelData[j], "float")
                          }
                      } else {
                          for (var j = 0; j < $1; ++j) {
                              setValue($0 + (j * numChannels + c) * 4, channelData[j], "float")
                          }
                      }
                  }
              },
              276207: ($0, $1) => {
                  var SDL2 = Module["SDL2"];
                  var numChannels = SDL2.audio.currentOutputBuffer["numberOfChannels"];
                  for (var c = 0; c < numChannels; ++c) {
                      var channelData = SDL2.audio.currentOutputBuffer["getChannelData"](c);
                      if (channelData.length != $1) {
                          throw "Web Audio output buffer length mismatch! Destination size: " + channelData.length + " samples vs expected " + $1 + " samples!"
                      }
                      for (var j = 0; j < $1; ++j) {
                          channelData[j] = HEAPF32[$0 + (j * numChannels + c << 2) >> 2]
                      }
                  }
              },
              276687: $0 => {
                  var SDL2 = Module["SDL2"];
                  if ($0) {
                      if (SDL2.capture.silenceTimer !== undefined) {
                          clearTimeout(SDL2.capture.silenceTimer)
                      }
                      if (SDL2.capture.stream !== undefined) {
                          var tracks = SDL2.capture.stream.getAudioTracks();
                          for (var i = 0; i < tracks.length; i++) {
                              SDL2.capture.stream.removeTrack(tracks[i])
                          }
                          SDL2.capture.stream = undefined
                      }
                      if (SDL2.capture.scriptProcessorNode !== undefined) {
                          SDL2.capture.scriptProcessorNode.onaudioprocess = function(audioProcessingEvent) {};
                          SDL2.capture.scriptProcessorNode.disconnect();
                          SDL2.capture.scriptProcessorNode = undefined
                      }
                      if (SDL2.capture.mediaStreamNode !== undefined) {
                          SDL2.capture.mediaStreamNode.disconnect();
                          SDL2.capture.mediaStreamNode = undefined
                      }
                      if (SDL2.capture.silenceBuffer !== undefined) {
                          SDL2.capture.silenceBuffer = undefined
                      }
                      SDL2.capture = undefined
                  } else {
                      if (SDL2.audio.scriptProcessorNode != undefined) {
                          SDL2.audio.scriptProcessorNode.disconnect();
                          SDL2.audio.scriptProcessorNode = undefined
                      }
                      SDL2.audio = undefined
                  }
                  if (SDL2.audioContext !== undefined && SDL2.audio === undefined && SDL2.capture === undefined) {
                      SDL2.audioContext.close();
                      SDL2.audioContext = undefined
                  }
              },
              277859: ($0, $1, $2) => {
                  var w = $0;
                  var h = $1;
                  var pixels = $2;
                  if (!Module["SDL2"]) Module["SDL2"] = {};
                  var SDL2 = Module["SDL2"];
                  if (SDL2.ctxCanvas !== Module["canvas"]) {
                      SDL2.ctx = Module["createContext"](Module["canvas"], false, true);
                      SDL2.ctxCanvas = Module["canvas"]
                  }
                  if (SDL2.w !== w || SDL2.h !== h || SDL2.imageCtx !== SDL2.ctx) {
                      SDL2.image = SDL2.ctx.createImageData(w, h);
                      SDL2.w = w;
                      SDL2.h = h;
                      SDL2.imageCtx = SDL2.ctx
                  }
                  var data = SDL2.image.data;
                  var src = pixels >> 2;
                  var dst = 0;
                  var num;
                  if (typeof CanvasPixelArray !== "undefined" && data instanceof CanvasPixelArray) {
                      num = data.length;
                      while (dst < num) {
                          var val = HEAP32[src];
                          data[dst] = val & 255;
                          data[dst + 1] = val >> 8 & 255;
                          data[dst + 2] = val >> 16 & 255;
                          data[dst + 3] = 255;
                          src++;
                          dst += 4
                      }
                  } else {
                      if (SDL2.data32Data !== data) {
                          SDL2.data32 = new Int32Array(data.buffer);
                          SDL2.data8 = new Uint8Array(data.buffer);
                          SDL2.data32Data = data
                      }
                      var data32 = SDL2.data32;
                      num = data32.length;
                      data32.set(HEAP32.subarray(src, src + num));
                      var data8 = SDL2.data8;
                      var i = 3;
                      var j = i + 4 * num;
                      if (num % 8 == 0) {
                          while (i < j) {
                              data8[i] = 255;
                              i = i + 4 | 0;
                              data8[i] = 255;
                              i = i + 4 | 0;
                              data8[i] = 255;
                              i = i + 4 | 0;
                              data8[i] = 255;
                              i = i + 4 | 0;
                              data8[i] = 255;
                              i = i + 4 | 0;
                              data8[i] = 255;
                              i = i + 4 | 0;
                              data8[i] = 255;
                              i = i + 4 | 0;
                              data8[i] = 255;
                              i = i + 4 | 0
                          }
                      } else {
                          while (i < j) {
                              data8[i] = 255;
                              i = i + 4 | 0
                          }
                      }
                  }
                  SDL2.ctx.putImageData(SDL2.image, 0, 0)
              },
              279328: ($0, $1, $2, $3, $4) => {
                  var w = $0;
                  var h = $1;
                  var hot_x = $2;
                  var hot_y = $3;
                  var pixels = $4;
                  var canvas = document.createElement("canvas");
                  canvas.width = w;
                  canvas.height = h;
                  var ctx = canvas.getContext("2d");
                  var image = ctx.createImageData(w, h);
                  var data = image.data;
                  var src = pixels >> 2;
                  var dst = 0;
                  var num;
                  if (typeof CanvasPixelArray !== "undefined" && data instanceof CanvasPixelArray) {
                      num = data.length;
                      while (dst < num) {
                          var val = HEAP32[src];
                          data[dst] = val & 255;
                          data[dst + 1] = val >> 8 & 255;
                          data[dst + 2] = val >> 16 & 255;
                          data[dst + 3] = val >> 24 & 255;
                          src++;
                          dst += 4
                      }
                  } else {
                      var data32 = new Int32Array(data.buffer);
                      num = data32.length;
                      data32.set(HEAP32.subarray(src, src + num))
                  }
                  ctx.putImageData(image, 0, 0);
                  var url = hot_x === 0 && hot_y === 0 ? "url(" + canvas.toDataURL() + "), auto" : "url(" + canvas.toDataURL() + ") " + hot_x + " " + hot_y + ", auto";
                  var urlBuf = _malloc(url.length + 1);
                  stringToUTF8(url, urlBuf, url.length + 1);
                  return urlBuf
              },
              280317: $0 => {
                  if (Module["canvas"]) {
                      Module["canvas"].style["cursor"] = UTF8ToString($0)
                  }
              },
              280400: () => {
                  if (Module["canvas"]) {
                      Module["canvas"].style["cursor"] = "none"
                  }
              },
              280469: () => window.innerWidth,
              280499: () => window.innerHeight
          };

          function ExitStatus(status) {
              this.name = "ExitStatus";
              this.message = `Program terminated with exit(${status})`;
              this.status = status
          }
          var listenOnce = (object, event, func) => {
              object.addEventListener(event, func, {
                  "once": true
              })
          };
          var autoResumeAudioContext = (ctx, elements) => {
              if (!elements) {
                  elements = [document, document.getElementById("canvas")]
              } ["keydown", "mousedown", "touchstart"].forEach(event => {
                  elements.forEach(element => {
                      if (element) {
                          listenOnce(element, event, () => {
                              if (ctx.state === "suspended") ctx.resume()
                          })
                      }
                  })
              })
          };
          var callRuntimeCallbacks = callbacks => {
              while (callbacks.length > 0) {
                  callbacks.shift()(Module)
              }
          };
          var dynCallLegacy = (sig, ptr, args) => {
              var f = Module["dynCall_" + sig];
              return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr)
          };
          var wasmTableMirror = [];
          var wasmTable;
          var getWasmTableEntry = funcPtr => {
              var func = wasmTableMirror[funcPtr];
              if (!func) {
                  if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
                  wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr)
              }
              return func
          };
          var dynCall = (sig, ptr, args) => {
              if (sig.includes("j")) {
                  return dynCallLegacy(sig, ptr, args)
              }
              var rtn = getWasmTableEntry(ptr).apply(null, args);
              return rtn
          };
          var noExitRuntime = Module["noExitRuntime"] || true;

          function setValue(ptr, value, type = "i8") {
              if (type.endsWith("*")) type = "*";
              switch (type) {
                  case "i1":
                      HEAP8[ptr >> 0] = value;
                      break;
                  case "i8":
                      HEAP8[ptr >> 0] = value;
                      break;
                  case "i16":
                      HEAP16[ptr >> 1] = value;
                      break;
                  case "i32":
                      HEAP32[ptr >> 2] = value;
                      break;
                  case "i64":
                      abort("to do setValue(i64) use WASM_BIGINT");
                  case "float":
                      HEAPF32[ptr >> 2] = value;
                      break;
                  case "double":
                      HEAPF64[ptr >> 3] = value;
                      break;
                  case "*":
                      HEAPU32[ptr >> 2] = value;
                      break;
                  default:
                      abort(`invalid type for setValue: ${type}`)
              }
          }
          var PATH = {
              isAbs: path => path.charAt(0) === "/",
              splitPath: filename => {
                  var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
                  return splitPathRe.exec(filename).slice(1)
              },
              normalizeArray: (parts, allowAboveRoot) => {
                  var up = 0;
                  for (var i = parts.length - 1; i >= 0; i--) {
                      var last = parts[i];
                      if (last === ".") {
                          parts.splice(i, 1)
                      } else if (last === "..") {
                          parts.splice(i, 1);
                          up++
                      } else if (up) {
                          parts.splice(i, 1);
                          up--
                      }
                  }
                  if (allowAboveRoot) {
                      for (; up; up--) {
                          parts.unshift("..")
                      }
                  }
                  return parts
              },
              normalize: path => {
                  var isAbsolute = PATH.isAbs(path),
                      trailingSlash = path.substr(-1) === "/";
                  path = PATH.normalizeArray(path.split("/").filter(p => !!p), !isAbsolute).join("/");
                  if (!path && !isAbsolute) {
                      path = "."
                  }
                  if (path && trailingSlash) {
                      path += "/"
                  }
                  return (isAbsolute ? "/" : "") + path
              },
              dirname: path => {
                  var result = PATH.splitPath(path),
                      root = result[0],
                      dir = result[1];
                  if (!root && !dir) {
                      return "."
                  }
                  if (dir) {
                      dir = dir.substr(0, dir.length - 1)
                  }
                  return root + dir
              },
              basename: path => {
                  if (path === "/") return "/";
                  path = PATH.normalize(path);
                  path = path.replace(/\/$/, "");
                  var lastSlash = path.lastIndexOf("/");
                  if (lastSlash === -1) return path;
                  return path.substr(lastSlash + 1)
              },
              join: function() {
                  var paths = Array.prototype.slice.call(arguments);
                  return PATH.normalize(paths.join("/"))
              },
              join2: (l, r) => PATH.normalize(l + "/" + r)
          };
          var initRandomFill = () => {
              if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
                  return view => crypto.getRandomValues(view)
              } else abort("initRandomDevice")
          };
          var randomFill = view => (randomFill = initRandomFill())(view);
          var PATH_FS = {
              resolve: function() {
                  var resolvedPath = "",
                      resolvedAbsolute = false;
                  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
                      var path = i >= 0 ? arguments[i] : FS.cwd();
                      if (typeof path != "string") {
                          throw new TypeError("Arguments to path.resolve must be strings")
                      } else if (!path) {
                          return ""
                      }
                      resolvedPath = path + "/" + resolvedPath;
                      resolvedAbsolute = PATH.isAbs(path)
                  }
                  resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(p => !!p), !resolvedAbsolute).join("/");
                  return (resolvedAbsolute ? "/" : "") + resolvedPath || "."
              },
              relative: (from, to) => {
                  from = PATH_FS.resolve(from).substr(1);
                  to = PATH_FS.resolve(to).substr(1);

                  function trim(arr) {
                      var start = 0;
                      for (; start < arr.length; start++) {
                          if (arr[start] !== "") break
                      }
                      var end = arr.length - 1;
                      for (; end >= 0; end--) {
                          if (arr[end] !== "") break
                      }
                      if (start > end) return [];
                      return arr.slice(start, end - start + 1)
                  }
                  var fromParts = trim(from.split("/"));
                  var toParts = trim(to.split("/"));
                  var length = Math.min(fromParts.length, toParts.length);
                  var samePartsLength = length;
                  for (var i = 0; i < length; i++) {
                      if (fromParts[i] !== toParts[i]) {
                          samePartsLength = i;
                          break
                      }
                  }
                  var outputParts = [];
                  for (var i = samePartsLength; i < fromParts.length; i++) {
                      outputParts.push("..")
                  }
                  outputParts = outputParts.concat(toParts.slice(samePartsLength));
                  return outputParts.join("/")
              }
          };
          var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
          var UTF8ArrayToString = (heapOrArray, idx, maxBytesToRead) => {
              var endIdx = idx + maxBytesToRead;
              var endPtr = idx;
              while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
              if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
                  return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr))
              }
              var str = "";
              while (idx < endPtr) {
                  var u0 = heapOrArray[idx++];
                  if (!(u0 & 128)) {
                      str += String.fromCharCode(u0);
                      continue
                  }
                  var u1 = heapOrArray[idx++] & 63;
                  if ((u0 & 224) == 192) {
                      str += String.fromCharCode((u0 & 31) << 6 | u1);
                      continue
                  }
                  var u2 = heapOrArray[idx++] & 63;
                  if ((u0 & 240) == 224) {
                      u0 = (u0 & 15) << 12 | u1 << 6 | u2
                  } else {
                      u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63
                  }
                  if (u0 < 65536) {
                      str += String.fromCharCode(u0)
                  } else {
                      var ch = u0 - 65536;
                      str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023)
                  }
              }
              return str
          };
          var FS_stdin_getChar_buffer = [];
          var lengthBytesUTF8 = str => {
              var len = 0;
              for (var i = 0; i < str.length; ++i) {
                  var c = str.charCodeAt(i);
                  if (c <= 127) {
                      len++
                  } else if (c <= 2047) {
                      len += 2
                  } else if (c >= 55296 && c <= 57343) {
                      len += 4;
                      ++i
                  } else {
                      len += 3
                  }
              }
              return len
          };
          var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
              if (!(maxBytesToWrite > 0)) return 0;
              var startIdx = outIdx;
              var endIdx = outIdx + maxBytesToWrite - 1;
              for (var i = 0; i < str.length; ++i) {
                  var u = str.charCodeAt(i);
                  if (u >= 55296 && u <= 57343) {
                      var u1 = str.charCodeAt(++i);
                      u = 65536 + ((u & 1023) << 10) | u1 & 1023
                  }
                  if (u <= 127) {
                      if (outIdx >= endIdx) break;
                      heap[outIdx++] = u
                  } else if (u <= 2047) {
                      if (outIdx + 1 >= endIdx) break;
                      heap[outIdx++] = 192 | u >> 6;
                      heap[outIdx++] = 128 | u & 63
                  } else if (u <= 65535) {
                      if (outIdx + 2 >= endIdx) break;
                      heap[outIdx++] = 224 | u >> 12;
                      heap[outIdx++] = 128 | u >> 6 & 63;
                      heap[outIdx++] = 128 | u & 63
                  } else {
                      if (outIdx + 3 >= endIdx) break;
                      heap[outIdx++] = 240 | u >> 18;
                      heap[outIdx++] = 128 | u >> 12 & 63;
                      heap[outIdx++] = 128 | u >> 6 & 63;
                      heap[outIdx++] = 128 | u & 63
                  }
              }
              heap[outIdx] = 0;
              return outIdx - startIdx
          };

          function intArrayFromString(stringy, dontAddNull, length) {
              var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
              var u8array = new Array(len);
              var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
              if (dontAddNull) u8array.length = numBytesWritten;
              return u8array
          }
          var FS_stdin_getChar = () => {
              if (!FS_stdin_getChar_buffer.length) {
                  var result = null;
                  if (typeof window != "undefined" && typeof window.prompt == "function") {
                      result = window.prompt("Input: ");
                      if (result !== null) {
                          result += "\n"
                      }
                  } else if (typeof readline == "function") {
                      result = readline();
                      if (result !== null) {
                          result += "\n"
                      }
                  }
                  if (!result) {
                      return null
                  }
                  FS_stdin_getChar_buffer = intArrayFromString(result, true)
              }
              return FS_stdin_getChar_buffer.shift()
          };
          var TTY = {
              ttys: [],
              init() {},
              shutdown() {},
              register(dev, ops) {
                  TTY.ttys[dev] = {
                      input: [],
                      output: [],
                      ops: ops
                  };
                  FS.registerDevice(dev, TTY.stream_ops)
              },
              stream_ops: {
                  open(stream) {
                      var tty = TTY.ttys[stream.node.rdev];
                      if (!tty) {
                          throw new FS.ErrnoError(43)
                      }
                      stream.tty = tty;
                      stream.seekable = false
                  },
                  close(stream) {
                      stream.tty.ops.fsync(stream.tty)
                  },
                  fsync(stream) {
                      stream.tty.ops.fsync(stream.tty)
                  },
                  read(stream, buffer, offset, length, pos) {
                      if (!stream.tty || !stream.tty.ops.get_char) {
                          throw new FS.ErrnoError(60)
                      }
                      var bytesRead = 0;
                      for (var i = 0; i < length; i++) {
                          var result;
                          try {
                              result = stream.tty.ops.get_char(stream.tty)
                          } catch (e) {
                              throw new FS.ErrnoError(29)
                          }
                          if (result === undefined && bytesRead === 0) {
                              throw new FS.ErrnoError(6)
                          }
                          if (result === null || result === undefined) break;
                          bytesRead++;
                          buffer[offset + i] = result
                      }
                      if (bytesRead) {
                          stream.node.timestamp = Date.now()
                      }
                      return bytesRead
                  },
                  write(stream, buffer, offset, length, pos) {
                      if (!stream.tty || !stream.tty.ops.put_char) {
                          throw new FS.ErrnoError(60)
                      }
                      try {
                          for (var i = 0; i < length; i++) {
                              stream.tty.ops.put_char(stream.tty, buffer[offset + i])
                          }
                      } catch (e) {
                          throw new FS.ErrnoError(29)
                      }
                      if (length) {
                          stream.node.timestamp = Date.now()
                      }
                      return i
                  }
              },
              default_tty_ops: {
                  get_char(tty) {
                      return FS_stdin_getChar()
                  },
                  put_char(tty, val) {
                      if (val === null || val === 10) {
                          out(UTF8ArrayToString(tty.output, 0));
                          tty.output = []
                      } else {
                          if (val != 0) tty.output.push(val)
                      }
                  },
                  fsync(tty) {
                      if (tty.output && tty.output.length > 0) {
                          out(UTF8ArrayToString(tty.output, 0));
                          tty.output = []
                      }
                  },
                  ioctl_tcgets(tty) {
                      return {
                          c_iflag: 25856,
                          c_oflag: 5,
                          c_cflag: 191,
                          c_lflag: 35387,
                          c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                      }
                  },
                  ioctl_tcsets(tty, optional_actions, data) {
                      return 0
                  },
                  ioctl_tiocgwinsz(tty) {
                      return [24, 80]
                  }
              },
              default_tty1_ops: {
                  put_char(tty, val) {
                      if (val === null || val === 10) {
                          err(UTF8ArrayToString(tty.output, 0));
                          tty.output = []
                      } else {
                          if (val != 0) tty.output.push(val)
                      }
                  },
                  fsync(tty) {
                      if (tty.output && tty.output.length > 0) {
                          err(UTF8ArrayToString(tty.output, 0));
                          tty.output = []
                      }
                  }
              }
          };
          var zeroMemory = (address, size) => {
              HEAPU8.fill(0, address, address + size);
              return address
          };
          var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;
          var mmapAlloc = size => {
              size = alignMemory(size, 65536);
              var ptr = _emscripten_builtin_memalign(65536, size);
              if (!ptr) return 0;
              return zeroMemory(ptr, size)
          };
          var MEMFS = {
              ops_table: null,
              mount(mount) {
                  return MEMFS.createNode(null, "/", 16384 | 511, 0)
              },
              createNode(parent, name, mode, dev) {
                  if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
                      throw new FS.ErrnoError(63)
                  }
                  MEMFS.ops_table ||= {
                      dir: {
                          node: {
                              getattr: MEMFS.node_ops.getattr,
                              setattr: MEMFS.node_ops.setattr,
                              lookup: MEMFS.node_ops.lookup,
                              mknod: MEMFS.node_ops.mknod,
                              rename: MEMFS.node_ops.rename,
                              unlink: MEMFS.node_ops.unlink,
                              rmdir: MEMFS.node_ops.rmdir,
                              readdir: MEMFS.node_ops.readdir,
                              symlink: MEMFS.node_ops.symlink
                          },
                          stream: {
                              llseek: MEMFS.stream_ops.llseek
                          }
                      },
                      file: {
                          node: {
                              getattr: MEMFS.node_ops.getattr,
                              setattr: MEMFS.node_ops.setattr
                          },
                          stream: {
                              llseek: MEMFS.stream_ops.llseek,
                              read: MEMFS.stream_ops.read,
                              write: MEMFS.stream_ops.write,
                              allocate: MEMFS.stream_ops.allocate,
                              mmap: MEMFS.stream_ops.mmap,
                              msync: MEMFS.stream_ops.msync
                          }
                      },
                      link: {
                          node: {
                              getattr: MEMFS.node_ops.getattr,
                              setattr: MEMFS.node_ops.setattr,
                              readlink: MEMFS.node_ops.readlink
                          },
                          stream: {}
                      },
                      chrdev: {
                          node: {
                              getattr: MEMFS.node_ops.getattr,
                              setattr: MEMFS.node_ops.setattr
                          },
                          stream: FS.chrdev_stream_ops
                      }
                  };
                  var node = FS.createNode(parent, name, mode, dev);
                  if (FS.isDir(node.mode)) {
                      node.node_ops = MEMFS.ops_table.dir.node;
                      node.stream_ops = MEMFS.ops_table.dir.stream;
                      node.contents = {}
                  } else if (FS.isFile(node.mode)) {
                      node.node_ops = MEMFS.ops_table.file.node;
                      node.stream_ops = MEMFS.ops_table.file.stream;
                      node.usedBytes = 0;
                      node.contents = null
                  } else if (FS.isLink(node.mode)) {
                      node.node_ops = MEMFS.ops_table.link.node;
                      node.stream_ops = MEMFS.ops_table.link.stream
                  } else if (FS.isChrdev(node.mode)) {
                      node.node_ops = MEMFS.ops_table.chrdev.node;
                      node.stream_ops = MEMFS.ops_table.chrdev.stream
                  }
                  node.timestamp = Date.now();
                  if (parent) {
                      parent.contents[name] = node;
                      parent.timestamp = node.timestamp
                  }
                  return node
              },
              getFileDataAsTypedArray(node) {
                  if (!node.contents) return new Uint8Array(0);
                  if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
                  return new Uint8Array(node.contents)
              },
              expandFileStorage(node, newCapacity) {
                  var prevCapacity = node.contents ? node.contents.length : 0;
                  if (prevCapacity >= newCapacity) return;
                  var CAPACITY_DOUBLING_MAX = 1024 * 1024;
                  newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
                  if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
                  var oldContents = node.contents;
                  node.contents = new Uint8Array(newCapacity);
                  if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0)
              },
              resizeFileStorage(node, newSize) {
                  if (node.usedBytes == newSize) return;
                  if (newSize == 0) {
                      node.contents = null;
                      node.usedBytes = 0
                  } else {
                      var oldContents = node.contents;
                      node.contents = new Uint8Array(newSize);
                      if (oldContents) {
                          node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)))
                      }
                      node.usedBytes = newSize
                  }
              },
              node_ops: {
                  getattr(node) {
                      var attr = {};
                      attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
                      attr.ino = node.id;
                      attr.mode = node.mode;
                      attr.nlink = 1;
                      attr.uid = 0;
                      attr.gid = 0;
                      attr.rdev = node.rdev;
                      if (FS.isDir(node.mode)) {
                          attr.size = 4096
                      } else if (FS.isFile(node.mode)) {
                          attr.size = node.usedBytes
                      } else if (FS.isLink(node.mode)) {
                          attr.size = node.link.length
                      } else {
                          attr.size = 0
                      }
                      attr.atime = new Date(node.timestamp);
                      attr.mtime = new Date(node.timestamp);
                      attr.ctime = new Date(node.timestamp);
                      attr.blksize = 4096;
                      attr.blocks = Math.ceil(attr.size / attr.blksize);
                      return attr
                  },
                  setattr(node, attr) {
                      if (attr.mode !== undefined) {
                          node.mode = attr.mode
                      }
                      if (attr.timestamp !== undefined) {
                          node.timestamp = attr.timestamp
                      }
                      if (attr.size !== undefined) {
                          MEMFS.resizeFileStorage(node, attr.size)
                      }
                  },
                  lookup(parent, name) {
                      throw FS.genericErrors[44]
                  },
                  mknod(parent, name, mode, dev) {
                      return MEMFS.createNode(parent, name, mode, dev)
                  },
                  rename(old_node, new_dir, new_name) {
                      if (FS.isDir(old_node.mode)) {
                          var new_node;
                          try {
                              new_node = FS.lookupNode(new_dir, new_name)
                          } catch (e) {}
                          if (new_node) {
                              for (var i in new_node.contents) {
                                  throw new FS.ErrnoError(55)
                              }
                          }
                      }
                      delete old_node.parent.contents[old_node.name];
                      old_node.parent.timestamp = Date.now();
                      old_node.name = new_name;
                      new_dir.contents[new_name] = old_node;
                      new_dir.timestamp = old_node.parent.timestamp;
                      old_node.parent = new_dir
                  },
                  unlink(parent, name) {
                      delete parent.contents[name];
                      parent.timestamp = Date.now()
                  },
                  rmdir(parent, name) {
                      var node = FS.lookupNode(parent, name);
                      for (var i in node.contents) {
                          throw new FS.ErrnoError(55)
                      }
                      delete parent.contents[name];
                      parent.timestamp = Date.now()
                  },
                  readdir(node) {
                      var entries = [".", ".."];
                      for (var key of Object.keys(node.contents)) {
                          entries.push(key)
                      }
                      return entries
                  },
                  symlink(parent, newname, oldpath) {
                      var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
                      node.link = oldpath;
                      return node
                  },
                  readlink(node) {
                      if (!FS.isLink(node.mode)) {
                          throw new FS.ErrnoError(28)
                      }
                      return node.link
                  }
              },
              stream_ops: {
                  read(stream, buffer, offset, length, position) {
                      var contents = stream.node.contents;
                      if (position >= stream.node.usedBytes) return 0;
                      var size = Math.min(stream.node.usedBytes - position, length);
                      if (size > 8 && contents.subarray) {
                          buffer.set(contents.subarray(position, position + size), offset)
                      } else {
                          for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i]
                      }
                      return size
                  },
                  write(stream, buffer, offset, length, position, canOwn) {
                      if (buffer.buffer === HEAP8.buffer) {
                          canOwn = false
                      }
                      if (!length) return 0;
                      var node = stream.node;
                      node.timestamp = Date.now();
                      if (buffer.subarray && (!node.contents || node.contents.subarray)) {
                          if (canOwn) {
                              node.contents = buffer.subarray(offset, offset + length);
                              node.usedBytes = length;
                              return length
                          } else if (node.usedBytes === 0 && position === 0) {
                              node.contents = buffer.slice(offset, offset + length);
                              node.usedBytes = length;
                              return length
                          } else if (position + length <= node.usedBytes) {
                              node.contents.set(buffer.subarray(offset, offset + length), position);
                              return length
                          }
                      }
                      MEMFS.expandFileStorage(node, position + length);
                      if (node.contents.subarray && buffer.subarray) {
                          node.contents.set(buffer.subarray(offset, offset + length), position)
                      } else {
                          for (var i = 0; i < length; i++) {
                              node.contents[position + i] = buffer[offset + i]
                          }
                      }
                      node.usedBytes = Math.max(node.usedBytes, position + length);
                      return length
                  },
                  llseek(stream, offset, whence) {
                      var position = offset;
                      if (whence === 1) {
                          position += stream.position
                      } else if (whence === 2) {
                          if (FS.isFile(stream.node.mode)) {
                              position += stream.node.usedBytes
                          }
                      }
                      if (position < 0) {
                          throw new FS.ErrnoError(28)
                      }
                      return position
                  },
                  allocate(stream, offset, length) {
                      MEMFS.expandFileStorage(stream.node, offset + length);
                      stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length)
                  },
                  mmap(stream, length, position, prot, flags) {
                      if (!FS.isFile(stream.node.mode)) {
                          throw new FS.ErrnoError(43)
                      }
                      var ptr;
                      var allocated;
                      var contents = stream.node.contents;
                      if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
                          allocated = false;
                          ptr = contents.byteOffset
                      } else {
                          if (position > 0 || position + length < contents.length) {
                              if (contents.subarray) {
                                  contents = contents.subarray(position, position + length)
                              } else {
                                  contents = Array.prototype.slice.call(contents, position, position + length)
                              }
                          }
                          allocated = true;
                          ptr = mmapAlloc(length);
                          if (!ptr) {
                              throw new FS.ErrnoError(48)
                          }
                          HEAP8.set(contents, ptr)
                      }
                      return {
                          ptr: ptr,
                          allocated: allocated
                      }
                  },
                  msync(stream, buffer, offset, length, mmapFlags) {
                      MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
                      return 0
                  }
              }
          };
          var asyncLoad = (url, onload, onerror, noRunDep) => {
              var dep = !noRunDep ? getUniqueRunDependency(`al ${url}`) : "";
              readAsync(url, arrayBuffer => {
                  onload(new Uint8Array(arrayBuffer));
                  if (dep) removeRunDependency(dep)
              }, event => {
                  if (onerror) {
                      onerror()
                  } else {
                      throw `Loading data file "${url}" failed.`
                  }
              });
              if (dep) addRunDependency(dep)
          };
          var FS_createDataFile = (parent, name, fileData, canRead, canWrite, canOwn) => {
              FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn)
          };
          var preloadPlugins = Module["preloadPlugins"] || [];
          var FS_handledByPreloadPlugin = (byteArray, fullname, finish, onerror) => {
              if (typeof Browser != "undefined") Browser.init();
              var handled = false;
              preloadPlugins.forEach(plugin => {
                  if (handled) return;
                  if (plugin["canHandle"](fullname)) {
                      plugin["handle"](byteArray, fullname, finish, onerror);
                      handled = true
                  }
              });
              return handled
          };
          var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
              var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
              var dep = getUniqueRunDependency(`cp ${fullname}`);

              function processData(byteArray) {
                  function finish(byteArray) {
                      preFinish?.();
                      if (!dontCreateFile) {
                          FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn)
                      }
                      onload?.();
                      removeRunDependency(dep)
                  }
                  if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
                          onerror?.();
                          removeRunDependency(dep)
                      })) {
                      return
                  }
                  finish(byteArray)
              }
              addRunDependency(dep);
              if (typeof url == "string") {
                  asyncLoad(url, processData, onerror)
              } else {
                  processData(url)
              }
          };
          var FS_modeStringToFlags = str => {
              var flagModes = {
                  "r": 0,
                  "r+": 2,
                  "w": 512 | 64 | 1,
                  "w+": 512 | 64 | 2,
                  "a": 1024 | 64 | 1,
                  "a+": 1024 | 64 | 2
              };
              var flags = flagModes[str];
              if (typeof flags == "undefined") {
                  throw new Error(`Unknown file open mode: ${str}`)
              }
              return flags
          };
          var FS_getMode = (canRead, canWrite) => {
              var mode = 0;
              if (canRead) mode |= 292 | 73;
              if (canWrite) mode |= 146;
              return mode
          };
          var IDBFS = {
              dbs: {},
              indexedDB: () => {
                  if (typeof indexedDB != "undefined") return indexedDB;
                  var ret = null;
                  if (typeof window == "object") ret = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                  assert(ret, "IDBFS used, but indexedDB not supported");
                  return ret
              },
              DB_VERSION: 21,
              DB_STORE_NAME: "FILE_DATA",
              mount: function(mount) {
                  return MEMFS.mount.apply(null, arguments)
              },
              syncfs: (mount, populate, callback) => {
                  IDBFS.getLocalSet(mount, (err, local) => {
                      if (err) return callback(err);
                      IDBFS.getRemoteSet(mount, (err, remote) => {
                          if (err) return callback(err);
                          var src = populate ? remote : local;
                          var dst = populate ? local : remote;
                          IDBFS.reconcile(src, dst, callback)
                      })
                  })
              },
              quit: () => {
                  Object.values(IDBFS.dbs).forEach(value => value.close());
                  IDBFS.dbs = {}
              },
              getDB: (name, callback) => {
                  var db = IDBFS.dbs[name];
                  if (db) {
                      return callback(null, db)
                  }
                  var req;
                  try {
                      req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION)
                  } catch (e) {
                      return callback(e)
                  }
                  if (!req) {
                      return callback("Unable to connect to IndexedDB")
                  }
                  req.onupgradeneeded = e => {
                      var db = e.target.result;
                      var transaction = e.target.transaction;
                      var fileStore;
                      if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
                          fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME)
                      } else {
                          fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME)
                      }
                      if (!fileStore.indexNames.contains("timestamp")) {
                          fileStore.createIndex("timestamp", "timestamp", {
                              unique: false
                          })
                      }
                  };
                  req.onsuccess = () => {
                      db = req.result;
                      IDBFS.dbs[name] = db;
                      callback(null, db)
                  };
                  req.onerror = e => {
                      callback(e.target.error);
                      e.preventDefault()
                  }
              },
              getLocalSet: (mount, callback) => {
                  var entries = {};

                  function isRealDir(p) {
                      return p !== "." && p !== ".."
                  }

                  function toAbsolute(root) {
                      return p => PATH.join2(root, p)
                  }
                  var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
                  while (check.length) {
                      var path = check.pop();
                      var stat;
                      try {
                          stat = FS.stat(path)
                      } catch (e) {
                          return callback(e)
                      }
                      if (FS.isDir(stat.mode)) {
                          check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)))
                      }
                      entries[path] = {
                          "timestamp": stat.mtime
                      }
                  }
                  return callback(null, {
                      type: "local",
                      entries: entries
                  })
              },
              getRemoteSet: (mount, callback) => {
                  var entries = {};
                  IDBFS.getDB(mount.mountpoint, (err, db) => {
                      if (err) return callback(err);
                      try {
                          var transaction = db.transaction([IDBFS.DB_STORE_NAME], "readonly");
                          transaction.onerror = e => {
                              callback(e.target.error);
                              e.preventDefault()
                          };
                          var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
                          var index = store.index("timestamp");
                          index.openKeyCursor().onsuccess = event => {
                              var cursor = event.target.result;
                              if (!cursor) {
                                  return callback(null, {
                                      type: "remote",
                                      db: db,
                                      entries: entries
                                  })
                              }
                              entries[cursor.primaryKey] = {
                                  "timestamp": cursor.key
                              };
                              cursor.continue()
                          }
                      } catch (e) {
                          return callback(e)
                      }
                  })
              },
              loadLocalEntry: (path, callback) => {
                  var stat, node;
                  try {
                      var lookup = FS.lookupPath(path);
                      node = lookup.node;
                      stat = FS.stat(path)
                  } catch (e) {
                      return callback(e)
                  }
                  if (FS.isDir(stat.mode)) {
                      return callback(null, {
                          "timestamp": stat.mtime,
                          "mode": stat.mode
                      })
                  } else if (FS.isFile(stat.mode)) {
                      node.contents = MEMFS.getFileDataAsTypedArray(node);
                      return callback(null, {
                          "timestamp": stat.mtime,
                          "mode": stat.mode,
                          "contents": node.contents
                      })
                  } else {
                      return callback(new Error("node type not supported"))
                  }
              },
              storeLocalEntry: (path, entry, callback) => {
                  try {
                      if (FS.isDir(entry["mode"])) {
                          FS.mkdirTree(path, entry["mode"])
                      } else if (FS.isFile(entry["mode"])) {
                          FS.writeFile(path, entry["contents"], {
                              canOwn: true
                          })
                      } else {
                          return callback(new Error("node type not supported"))
                      }
                      FS.chmod(path, entry["mode"]);
                      FS.utime(path, entry["timestamp"], entry["timestamp"])
                  } catch (e) {
                      return callback(e)
                  }
                  callback(null)
              },
              removeLocalEntry: (path, callback) => {
                  try {
                      var stat = FS.stat(path);
                      if (FS.isDir(stat.mode)) {
                          FS.rmdir(path)
                      } else if (FS.isFile(stat.mode)) {
                          FS.unlink(path)
                      }
                  } catch (e) {
                      return callback(e)
                  }
                  callback(null)
              },
              loadRemoteEntry: (store, path, callback) => {
                  var req = store.get(path);
                  req.onsuccess = event => callback(null, event.target.result);
                  req.onerror = e => {
                      callback(e.target.error);
                      e.preventDefault()
                  }
              },
              storeRemoteEntry: (store, path, entry, callback) => {
                  try {
                      var req = store.put(entry, path)
                  } catch (e) {
                      callback(e);
                      return
                  }
                  req.onsuccess = event => callback();
                  req.onerror = e => {
                      callback(e.target.error);
                      e.preventDefault()
                  }
              },
              removeRemoteEntry: (store, path, callback) => {
                  var req = store.delete(path);
                  req.onsuccess = event => callback();
                  req.onerror = e => {
                      callback(e.target.error);
                      e.preventDefault()
                  }
              },
              reconcile: (src, dst, callback) => {
                  var total = 0;
                  var create = [];
                  Object.keys(src.entries).forEach(function(key) {
                      var e = src.entries[key];
                      var e2 = dst.entries[key];
                      if (!e2 || e["timestamp"].getTime() != e2["timestamp"].getTime()) {
                          create.push(key);
                          total++
                      }
                  });
                  var remove = [];
                  Object.keys(dst.entries).forEach(function(key) {
                      if (!src.entries[key]) {
                          remove.push(key);
                          total++
                      }
                  });
                  if (!total) {
                      return callback(null)
                  }
                  var errored = false;
                  var db = src.type === "remote" ? src.db : dst.db;
                  var transaction = db.transaction([IDBFS.DB_STORE_NAME], "readwrite");
                  var store = transaction.objectStore(IDBFS.DB_STORE_NAME);

                  function done(err) {
                      if (err && !errored) {
                          errored = true;
                          return callback(err)
                      }
                  }
                  transaction.onerror = e => {
                      done(this.error);
                      e.preventDefault()
                  };
                  transaction.oncomplete = e => {
                      if (!errored) {
                          callback(null)
                      }
                  };
                  create.sort().forEach(path => {
                      if (dst.type === "local") {
                          IDBFS.loadRemoteEntry(store, path, (err, entry) => {
                              if (err) return done(err);
                              IDBFS.storeLocalEntry(path, entry, done)
                          })
                      } else {
                          IDBFS.loadLocalEntry(path, (err, entry) => {
                              if (err) return done(err);
                              IDBFS.storeRemoteEntry(store, path, entry, done)
                          })
                      }
                  });
                  remove.sort().reverse().forEach(path => {
                      if (dst.type === "local") {
                          IDBFS.removeLocalEntry(path, done)
                      } else {
                          IDBFS.removeRemoteEntry(store, path, done)
                      }
                  })
              }
          };
          var FS = {
              root: null,
              mounts: [],
              devices: {},
              streams: [],
              nextInode: 1,
              nameTable: null,
              currentPath: "/",
              initialized: false,
              ignorePermissions: true,
              ErrnoError: class {
                  constructor(errno) {
                      this.name = "ErrnoError";
                      this.errno = errno
                  }
              },
              genericErrors: {},
              filesystems: null,
              syncFSRequests: 0,
              lookupPath(path, opts = {}) {
                  path = PATH_FS.resolve(path);
                  if (!path) return {
                      path: "",
                      node: null
                  };
                  var defaults = {
                      follow_mount: true,
                      recurse_count: 0
                  };
                  opts = Object.assign(defaults, opts);
                  if (opts.recurse_count > 8) {
                      throw new FS.ErrnoError(32)
                  }
                  var parts = path.split("/").filter(p => !!p);
                  var current = FS.root;
                  var current_path = "/";
                  for (var i = 0; i < parts.length; i++) {
                      var islast = i === parts.length - 1;
                      if (islast && opts.parent) {
                          break
                      }
                      current = FS.lookupNode(current, parts[i]);
                      current_path = PATH.join2(current_path, parts[i]);
                      if (FS.isMountpoint(current)) {
                          if (!islast || islast && opts.follow_mount) {
                              current = current.mounted.root
                          }
                      }
                      if (!islast || opts.follow) {
                          var count = 0;
                          while (FS.isLink(current.mode)) {
                              var link = FS.readlink(current_path);
                              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
                              var lookup = FS.lookupPath(current_path, {
                                  recurse_count: opts.recurse_count + 1
                              });
                              current = lookup.node;
                              if (count++ > 40) {
                                  throw new FS.ErrnoError(32)
                              }
                          }
                      }
                  }
                  return {
                      path: current_path,
                      node: current
                  }
              },
              getPath(node) {
                  var path;
                  while (true) {
                      if (FS.isRoot(node)) {
                          var mount = node.mount.mountpoint;
                          if (!path) return mount;
                          return mount[mount.length - 1] !== "/" ? `${mount}/${path}` : mount + path
                      }
                      path = path ? `${node.name}/${path}` : node.name;
                      node = node.parent
                  }
              },
              hashName(parentid, name) {
                  var hash = 0;
                  for (var i = 0; i < name.length; i++) {
                      hash = (hash << 5) - hash + name.charCodeAt(i) | 0
                  }
                  return (parentid + hash >>> 0) % FS.nameTable.length
              },
              hashAddNode(node) {
                  var hash = FS.hashName(node.parent.id, node.name);
                  node.name_next = FS.nameTable[hash];
                  FS.nameTable[hash] = node
              },
              hashRemoveNode(node) {
                  var hash = FS.hashName(node.parent.id, node.name);
                  if (FS.nameTable[hash] === node) {
                      FS.nameTable[hash] = node.name_next
                  } else {
                      var current = FS.nameTable[hash];
                      while (current) {
                          if (current.name_next === node) {
                              current.name_next = node.name_next;
                              break
                          }
                          current = current.name_next
                      }
                  }
              },
              lookupNode(parent, name) {
                  var errCode = FS.mayLookup(parent);
                  if (errCode) {
                      throw new FS.ErrnoError(errCode)
                  }
                  var hash = FS.hashName(parent.id, name);
                  for (var node = FS.nameTable[hash]; node; node = node.name_next) {
                      var nodeName = node.name;
                      if (node.parent.id === parent.id && nodeName === name) {
                          return node
                      }
                  }
                  return FS.lookup(parent, name)
              },
              createNode(parent, name, mode, rdev) {
                  var node = new FS.FSNode(parent, name, mode, rdev);
                  FS.hashAddNode(node);
                  return node
              },
              destroyNode(node) {
                  FS.hashRemoveNode(node)
              },
              isRoot(node) {
                  return node === node.parent
              },
              isMountpoint(node) {
                  return !!node.mounted
              },
              isFile(mode) {
                  return (mode & 61440) === 32768
              },
              isDir(mode) {
                  return (mode & 61440) === 16384
              },
              isLink(mode) {
                  return (mode & 61440) === 40960
              },
              isChrdev(mode) {
                  return (mode & 61440) === 8192
              },
              isBlkdev(mode) {
                  return (mode & 61440) === 24576
              },
              isFIFO(mode) {
                  return (mode & 61440) === 4096
              },
              isSocket(mode) {
                  return (mode & 49152) === 49152
              },
              flagsToPermissionString(flag) {
                  var perms = ["r", "w", "rw"][flag & 3];
                  if (flag & 512) {
                      perms += "w"
                  }
                  return perms
              },
              nodePermissions(node, perms) {
                  if (FS.ignorePermissions) {
                      return 0
                  }
                  if (perms.includes("r") && !(node.mode & 292)) {
                      return 2
                  } else if (perms.includes("w") && !(node.mode & 146)) {
                      return 2
                  } else if (perms.includes("x") && !(node.mode & 73)) {
                      return 2
                  }
                  return 0
              },
              mayLookup(dir) {
                  if (!FS.isDir(dir.mode)) return 54;
                  var errCode = FS.nodePermissions(dir, "x");
                  if (errCode) return errCode;
                  if (!dir.node_ops.lookup) return 2;
                  return 0
              },
              mayCreate(dir, name) {
                  try {
                      var node = FS.lookupNode(dir, name);
                      return 20
                  } catch (e) {}
                  return FS.nodePermissions(dir, "wx")
              },
              mayDelete(dir, name, isdir) {
                  var node;
                  try {
                      node = FS.lookupNode(dir, name)
                  } catch (e) {
                      return e.errno
                  }
                  var errCode = FS.nodePermissions(dir, "wx");
                  if (errCode) {
                      return errCode
                  }
                  if (isdir) {
                      if (!FS.isDir(node.mode)) {
                          return 54
                      }
                      if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
                          return 10
                      }
                  } else {
                      if (FS.isDir(node.mode)) {
                          return 31
                      }
                  }
                  return 0
              },
              mayOpen(node, flags) {
                  if (!node) {
                      return 44
                  }
                  if (FS.isLink(node.mode)) {
                      return 32
                  } else if (FS.isDir(node.mode)) {
                      if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
                          return 31
                      }
                  }
                  return FS.nodePermissions(node, FS.flagsToPermissionString(flags))
              },
              MAX_OPEN_FDS: 4096,
              nextfd() {
                  for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
                      if (!FS.streams[fd]) {
                          return fd
                      }
                  }
                  throw new FS.ErrnoError(33)
              },
              getStreamChecked(fd) {
                  var stream = FS.getStream(fd);
                  if (!stream) {
                      throw new FS.ErrnoError(8)
                  }
                  return stream
              },
              getStream: fd => FS.streams[fd],
              createStream(stream, fd = -1) {
                  if (!FS.FSStream) {
                      FS.FSStream = function() {
                          this.shared = {}
                      };
                      FS.FSStream.prototype = {};
                      Object.defineProperties(FS.FSStream.prototype, {
                          object: {
                              get() {
                                  return this.node
                              },
                              set(val) {
                                  this.node = val
                              }
                          },
                          isRead: {
                              get() {
                                  return (this.flags & 2097155) !== 1
                              }
                          },
                          isWrite: {
                              get() {
                                  return (this.flags & 2097155) !== 0
                              }
                          },
                          isAppend: {
                              get() {
                                  return this.flags & 1024
                              }
                          },
                          flags: {
                              get() {
                                  return this.shared.flags
                              },
                              set(val) {
                                  this.shared.flags = val
                              }
                          },
                          position: {
                              get() {
                                  return this.shared.position
                              },
                              set(val) {
                                  this.shared.position = val
                              }
                          }
                      })
                  }
                  stream = Object.assign(new FS.FSStream, stream);
                  if (fd == -1) {
                      fd = FS.nextfd()
                  }
                  stream.fd = fd;
                  FS.streams[fd] = stream;
                  return stream
              },
              closeStream(fd) {
                  FS.streams[fd] = null
              },
              chrdev_stream_ops: {
                  open(stream) {
                      var device = FS.getDevice(stream.node.rdev);
                      stream.stream_ops = device.stream_ops;
                      stream.stream_ops.open?.(stream)
                  },
                  llseek() {
                      throw new FS.ErrnoError(70)
                  }
              },
              major: dev => dev >> 8,
              minor: dev => dev & 255,
              makedev: (ma, mi) => ma << 8 | mi,
              registerDevice(dev, ops) {
                  FS.devices[dev] = {
                      stream_ops: ops
                  }
              },
              getDevice: dev => FS.devices[dev],
              getMounts(mount) {
                  var mounts = [];
                  var check = [mount];
                  while (check.length) {
                      var m = check.pop();
                      mounts.push(m);
                      check.push.apply(check, m.mounts)
                  }
                  return mounts
              },
              syncfs(populate, callback) {
                  if (typeof populate == "function") {
                      callback = populate;
                      populate = false
                  }
                  FS.syncFSRequests++;
                  if (FS.syncFSRequests > 1) {
                      err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`)
                  }
                  var mounts = FS.getMounts(FS.root.mount);
                  var completed = 0;

                  function doCallback(errCode) {
                      FS.syncFSRequests--;
                      return callback(errCode)
                  }

                  function done(errCode) {
                      if (errCode) {
                          if (!done.errored) {
                              done.errored = true;
                              return doCallback(errCode)
                          }
                          return
                      }
                      if (++completed >= mounts.length) {
                          doCallback(null)
                      }
                  }
                  mounts.forEach(mount => {
                      if (!mount.type.syncfs) {
                          return done(null)
                      }
                      mount.type.syncfs(mount, populate, done)
                  })
              },
              mount(type, opts, mountpoint) {
                  var root = mountpoint === "/";
                  var pseudo = !mountpoint;
                  var node;
                  if (root && FS.root) {
                      throw new FS.ErrnoError(10)
                  } else if (!root && !pseudo) {
                      var lookup = FS.lookupPath(mountpoint, {
                          follow_mount: false
                      });
                      mountpoint = lookup.path;
                      node = lookup.node;
                      if (FS.isMountpoint(node)) {
                          throw new FS.ErrnoError(10)
                      }
                      if (!FS.isDir(node.mode)) {
                          throw new FS.ErrnoError(54)
                      }
                  }
                  var mount = {
                      type: type,
                      opts: opts,
                      mountpoint: mountpoint,
                      mounts: []
                  };
                  var mountRoot = type.mount(mount);
                  mountRoot.mount = mount;
                  mount.root = mountRoot;
                  if (root) {
                      FS.root = mountRoot
                  } else if (node) {
                      node.mounted = mount;
                      if (node.mount) {
                          node.mount.mounts.push(mount)
                      }
                  }
                  return mountRoot
              },
              unmount(mountpoint) {
                  var lookup = FS.lookupPath(mountpoint, {
                      follow_mount: false
                  });
                  if (!FS.isMountpoint(lookup.node)) {
                      throw new FS.ErrnoError(28)
                  }
                  var node = lookup.node;
                  var mount = node.mounted;
                  var mounts = FS.getMounts(mount);
                  Object.keys(FS.nameTable).forEach(hash => {
                      var current = FS.nameTable[hash];
                      while (current) {
                          var next = current.name_next;
                          if (mounts.includes(current.mount)) {
                              FS.destroyNode(current)
                          }
                          current = next
                      }
                  });
                  node.mounted = null;
                  var idx = node.mount.mounts.indexOf(mount);
                  node.mount.mounts.splice(idx, 1)
              },
              lookup(parent, name) {
                  return parent.node_ops.lookup(parent, name)
              },
              mknod(path, mode, dev) {
                  var lookup = FS.lookupPath(path, {
                      parent: true
                  });
                  var parent = lookup.node;
                  var name = PATH.basename(path);
                  if (!name || name === "." || name === "..") {
                      throw new FS.ErrnoError(28)
                  }
                  var errCode = FS.mayCreate(parent, name);
                  if (errCode) {
                      throw new FS.ErrnoError(errCode)
                  }
                  if (!parent.node_ops.mknod) {
                      throw new FS.ErrnoError(63)
                  }
                  return parent.node_ops.mknod(parent, name, mode, dev)
              },
              create(path, mode) {
                  mode = mode !== undefined ? mode : 438;
                  mode &= 4095;
                  mode |= 32768;
                  return FS.mknod(path, mode, 0)
              },
              mkdir(path, mode) {
                  mode = mode !== undefined ? mode : 511;
                  mode &= 511 | 512;
                  mode |= 16384;
                  return FS.mknod(path, mode, 0)
              },
              mkdirTree(path, mode) {
                  var dirs = path.split("/");
                  var d = "";
                  for (var i = 0; i < dirs.length; ++i) {
                      if (!dirs[i]) continue;
                      d += "/" + dirs[i];
                      try {
                          FS.mkdir(d, mode)
                      } catch (e) {
                          if (e.errno != 20) throw e
                      }
                  }
              },
              mkdev(path, mode, dev) {
                  if (typeof dev == "undefined") {
                      dev = mode;
                      mode = 438
                  }
                  mode |= 8192;
                  return FS.mknod(path, mode, dev)
              },
              symlink(oldpath, newpath) {
                  if (!PATH_FS.resolve(oldpath)) {
                      throw new FS.ErrnoError(44)
                  }
                  var lookup = FS.lookupPath(newpath, {
                      parent: true
                  });
                  var parent = lookup.node;
                  if (!parent) {
                      throw new FS.ErrnoError(44)
                  }
                  var newname = PATH.basename(newpath);
                  var errCode = FS.mayCreate(parent, newname);
                  if (errCode) {
                      throw new FS.ErrnoError(errCode)
                  }
                  if (!parent.node_ops.symlink) {
                      throw new FS.ErrnoError(63)
                  }
                  return parent.node_ops.symlink(parent, newname, oldpath)
              },
              rename(old_path, new_path) {
                  var old_dirname = PATH.dirname(old_path);
                  var new_dirname = PATH.dirname(new_path);
                  var old_name = PATH.basename(old_path);
                  var new_name = PATH.basename(new_path);
                  var lookup, old_dir, new_dir;
                  lookup = FS.lookupPath(old_path, {
                      parent: true
                  });
                  old_dir = lookup.node;
                  lookup = FS.lookupPath(new_path, {
                      parent: true
                  });
                  new_dir = lookup.node;
                  if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
                  if (old_dir.mount !== new_dir.mount) {
                      throw new FS.ErrnoError(75)
                  }
                  var old_node = FS.lookupNode(old_dir, old_name);
                  var relative = PATH_FS.relative(old_path, new_dirname);
                  if (relative.charAt(0) !== ".") {
                      throw new FS.ErrnoError(28)
                  }
                  relative = PATH_FS.relative(new_path, old_dirname);
                  if (relative.charAt(0) !== ".") {
                      throw new FS.ErrnoError(55)
                  }
                  var new_node;
                  try {
                      new_node = FS.lookupNode(new_dir, new_name)
                  } catch (e) {}
                  if (old_node === new_node) {
                      return
                  }
                  var isdir = FS.isDir(old_node.mode);
                  var errCode = FS.mayDelete(old_dir, old_name, isdir);
                  if (errCode) {
                      throw new FS.ErrnoError(errCode)
                  }
                  errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
                  if (errCode) {
                      throw new FS.ErrnoError(errCode)
                  }
                  if (!old_dir.node_ops.rename) {
                      throw new FS.ErrnoError(63)
                  }
                  if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
                      throw new FS.ErrnoError(10)
                  }
                  if (new_dir !== old_dir) {
                      errCode = FS.nodePermissions(old_dir, "w");
                      if (errCode) {
                          throw new FS.ErrnoError(errCode)
                      }
                  }
                  FS.hashRemoveNode(old_node);
                  try {
                      old_dir.node_ops.rename(old_node, new_dir, new_name)
                  } catch (e) {
                      throw e
                  } finally {
                      FS.hashAddNode(old_node)
                  }
              },
              rmdir(path) {
                  var lookup = FS.lookupPath(path, {
                      parent: true
                  });
                  var parent = lookup.node;
                  var name = PATH.basename(path);
                  var node = FS.lookupNode(parent, name);
                  var errCode = FS.mayDelete(parent, name, true);
                  if (errCode) {
                      throw new FS.ErrnoError(errCode)
                  }
                  if (!parent.node_ops.rmdir) {
                      throw new FS.ErrnoError(63)
                  }
                  if (FS.isMountpoint(node)) {
                      throw new FS.ErrnoError(10)
                  }
                  parent.node_ops.rmdir(parent, name);
                  FS.destroyNode(node)
              },
              readdir(path) {
                  var lookup = FS.lookupPath(path, {
                      follow: true
                  });
                  var node = lookup.node;
                  if (!node.node_ops.readdir) {
                      throw new FS.ErrnoError(54)
                  }
                  return node.node_ops.readdir(node)
              },
              unlink(path) {
                  var lookup = FS.lookupPath(path, {
                      parent: true
                  });
                  var parent = lookup.node;
                  if (!parent) {
                      throw new FS.ErrnoError(44)
                  }
                  var name = PATH.basename(path);
                  var node = FS.lookupNode(parent, name);
                  var errCode = FS.mayDelete(parent, name, false);
                  if (errCode) {
                      throw new FS.ErrnoError(errCode)
                  }
                  if (!parent.node_ops.unlink) {
                      throw new FS.ErrnoError(63)
                  }
                  if (FS.isMountpoint(node)) {
                      throw new FS.ErrnoError(10)
                  }
                  parent.node_ops.unlink(parent, name);
                  FS.destroyNode(node)
              },
              readlink(path) {
                  var lookup = FS.lookupPath(path);
                  var link = lookup.node;
                  if (!link) {
                      throw new FS.ErrnoError(44)
                  }
                  if (!link.node_ops.readlink) {
                      throw new FS.ErrnoError(28)
                  }
                  return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link))
              },
              stat(path, dontFollow) {
                  var lookup = FS.lookupPath(path, {
                      follow: !dontFollow
                  });
                  var node = lookup.node;
                  if (!node) {
                      throw new FS.ErrnoError(44)
                  }
                  if (!node.node_ops.getattr) {
                      throw new FS.ErrnoError(63)
                  }
                  return node.node_ops.getattr(node)
              },
              lstat(path) {
                  return FS.stat(path, true)
              },
              chmod(path, mode, dontFollow) {
                  var node;
                  if (typeof path == "string") {
                      var lookup = FS.lookupPath(path, {
                          follow: !dontFollow
                      });
                      node = lookup.node
                  } else {
                      node = path
                  }
                  if (!node.node_ops.setattr) {
                      throw new FS.ErrnoError(63)
                  }
                  node.node_ops.setattr(node, {
                      mode: mode & 4095 | node.mode & ~4095,
                      timestamp: Date.now()
                  })
              },
              lchmod(path, mode) {
                  FS.chmod(path, mode, true)
              },
              fchmod(fd, mode) {
                  var stream = FS.getStreamChecked(fd);
                  FS.chmod(stream.node, mode)
              },
              chown(path, uid, gid, dontFollow) {
                  var node;
                  if (typeof path == "string") {
                      var lookup = FS.lookupPath(path, {
                          follow: !dontFollow
                      });
                      node = lookup.node
                  } else {
                      node = path
                  }
                  if (!node.node_ops.setattr) {
                      throw new FS.ErrnoError(63)
                  }
                  node.node_ops.setattr(node, {
                      timestamp: Date.now()
                  })
              },
              lchown(path, uid, gid) {
                  FS.chown(path, uid, gid, true)
              },
              fchown(fd, uid, gid) {
                  var stream = FS.getStreamChecked(fd);
                  FS.chown(stream.node, uid, gid)
              },
              truncate(path, len) {
                  if (len < 0) {
                      throw new FS.ErrnoError(28)
                  }
                  var node;
                  if (typeof path == "string") {
                      var lookup = FS.lookupPath(path, {
                          follow: true
                      });
                      node = lookup.node
                  } else {
                      node = path
                  }
                  if (!node.node_ops.setattr) {
                      throw new FS.ErrnoError(63)
                  }
                  if (FS.isDir(node.mode)) {
                      throw new FS.ErrnoError(31)
                  }
                  if (!FS.isFile(node.mode)) {
                      throw new FS.ErrnoError(28)
                  }
                  var errCode = FS.nodePermissions(node, "w");
                  if (errCode) {
                      throw new FS.ErrnoError(errCode)
                  }
                  node.node_ops.setattr(node, {
                      size: len,
                      timestamp: Date.now()
                  })
              },
              ftruncate(fd, len) {
                  var stream = FS.getStreamChecked(fd);
                  if ((stream.flags & 2097155) === 0) {
                      throw new FS.ErrnoError(28)
                  }
                  FS.truncate(stream.node, len)
              },
              utime(path, atime, mtime) {
                  var lookup = FS.lookupPath(path, {
                      follow: true
                  });
                  var node = lookup.node;
                  node.node_ops.setattr(node, {
                      timestamp: Math.max(atime, mtime)
                  })
              },
              open(path, flags, mode) {
                  if (path === "") {
                      throw new FS.ErrnoError(44)
                  }
                  flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
                  mode = typeof mode == "undefined" ? 438 : mode;
                  if (flags & 64) {
                      mode = mode & 4095 | 32768
                  } else {
                      mode = 0
                  }
                  var node;
                  if (typeof path == "object") {
                      node = path
                  } else {
                      path = PATH.normalize(path);
                      try {
                          var lookup = FS.lookupPath(path, {
                              follow: !(flags & 131072)
                          });
                          node = lookup.node
                      } catch (e) {}
                  }
                  var created = false;
                  if (flags & 64) {
                      if (node) {
                          if (flags & 128) {
                              throw new FS.ErrnoError(20)
                          }
                      } else {
                          node = FS.mknod(path, mode, 0);
                          created = true
                      }
                  }
                  if (!node) {
                      throw new FS.ErrnoError(44)
                  }
                  if (FS.isChrdev(node.mode)) {
                      flags &= ~512
                  }
                  if (flags & 65536 && !FS.isDir(node.mode)) {
                      throw new FS.ErrnoError(54)
                  }
                  if (!created) {
                      var errCode = FS.mayOpen(node, flags);
                      if (errCode) {
                          throw new FS.ErrnoError(errCode)
                      }
                  }
                  if (flags & 512 && !created) {
                      FS.truncate(node, 0)
                  }
                  flags &= ~(128 | 512 | 131072);
                  var stream = FS.createStream({
                      node: node,
                      path: FS.getPath(node),
                      flags: flags,
                      seekable: true,
                      position: 0,
                      stream_ops: node.stream_ops,
                      ungotten: [],
                      error: false
                  });
                  if (stream.stream_ops.open) {
                      stream.stream_ops.open(stream)
                  }
                  if (Module["logReadFiles"] && !(flags & 1)) {
                      if (!FS.readFiles) FS.readFiles = {};
                      if (!(path in FS.readFiles)) {
                          FS.readFiles[path] = 1
                      }
                  }
                  return stream
              },
              close(stream) {
                  if (FS.isClosed(stream)) {
                      throw new FS.ErrnoError(8)
                  }
                  if (stream.getdents) stream.getdents = null;
                  try {
                      if (stream.stream_ops.close) {
                          stream.stream_ops.close(stream)
                      }
                  } catch (e) {
                      throw e
                  } finally {
                      FS.closeStream(stream.fd)
                  }
                  stream.fd = null
              },
              isClosed(stream) {
                  return stream.fd === null
              },
              llseek(stream, offset, whence) {
                  if (FS.isClosed(stream)) {
                      throw new FS.ErrnoError(8)
                  }
                  if (!stream.seekable || !stream.stream_ops.llseek) {
                      throw new FS.ErrnoError(70)
                  }
                  if (whence != 0 && whence != 1 && whence != 2) {
                      throw new FS.ErrnoError(28)
                  }
                  stream.position = stream.stream_ops.llseek(stream, offset, whence);
                  stream.ungotten = [];
                  return stream.position
              },
              read(stream, buffer, offset, length, position) {
                  if (length < 0 || position < 0) {
                      throw new FS.ErrnoError(28)
                  }
                  if (FS.isClosed(stream)) {
                      throw new FS.ErrnoError(8)
                  }
                  if ((stream.flags & 2097155) === 1) {
                      throw new FS.ErrnoError(8)
                  }
                  if (FS.isDir(stream.node.mode)) {
                      throw new FS.ErrnoError(31)
                  }
                  if (!stream.stream_ops.read) {
                      throw new FS.ErrnoError(28)
                  }
                  var seeking = typeof position != "undefined";
                  if (!seeking) {
                      position = stream.position
                  } else if (!stream.seekable) {
                      throw new FS.ErrnoError(70)
                  }
                  var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
                  if (!seeking) stream.position += bytesRead;
                  return bytesRead
              },
              write(stream, buffer, offset, length, position, canOwn) {
                  if (length < 0 || position < 0) {
                      throw new FS.ErrnoError(28)
                  }
                  if (FS.isClosed(stream)) {
                      throw new FS.ErrnoError(8)
                  }
                  if ((stream.flags & 2097155) === 0) {
                      throw new FS.ErrnoError(8)
                  }
                  if (FS.isDir(stream.node.mode)) {
                      throw new FS.ErrnoError(31)
                  }
                  if (!stream.stream_ops.write) {
                      throw new FS.ErrnoError(28)
                  }
                  if (stream.seekable && stream.flags & 1024) {
                      FS.llseek(stream, 0, 2)
                  }
                  var seeking = typeof position != "undefined";
                  if (!seeking) {
                      position = stream.position
                  } else if (!stream.seekable) {
                      throw new FS.ErrnoError(70)
                  }
                  var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
                  if (!seeking) stream.position += bytesWritten;
                  return bytesWritten
              },
              allocate(stream, offset, length) {
                  if (FS.isClosed(stream)) {
                      throw new FS.ErrnoError(8)
                  }
                  if (offset < 0 || length <= 0) {
                      throw new FS.ErrnoError(28)
                  }
                  if ((stream.flags & 2097155) === 0) {
                      throw new FS.ErrnoError(8)
                  }
                  if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
                      throw new FS.ErrnoError(43)
                  }
                  if (!stream.stream_ops.allocate) {
                      throw new FS.ErrnoError(138)
                  }
                  stream.stream_ops.allocate(stream, offset, length)
              },
              mmap(stream, length, position, prot, flags) {
                  if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
                      throw new FS.ErrnoError(2)
                  }
                  if ((stream.flags & 2097155) === 1) {
                      throw new FS.ErrnoError(2)
                  }
                  if (!stream.stream_ops.mmap) {
                      throw new FS.ErrnoError(43)
                  }
                  return stream.stream_ops.mmap(stream, length, position, prot, flags)
              },
              msync(stream, buffer, offset, length, mmapFlags) {
                  if (!stream.stream_ops.msync) {
                      return 0
                  }
                  return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags)
              },
              munmap: stream => 0,
              ioctl(stream, cmd, arg) {
                  if (!stream.stream_ops.ioctl) {
                      throw new FS.ErrnoError(59)
                  }
                  return stream.stream_ops.ioctl(stream, cmd, arg)
              },
              readFile(path, opts = {}) {
                  opts.flags = opts.flags || 0;
                  opts.encoding = opts.encoding || "binary";
                  if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
                      throw new Error(`Invalid encoding type "${opts.encoding}"`)
                  }
                  var ret;
                  var stream = FS.open(path, opts.flags);
                  var stat = FS.stat(path);
                  var length = stat.size;
                  var buf = new Uint8Array(length);
                  FS.read(stream, buf, 0, length, 0);
                  if (opts.encoding === "utf8") {
                      ret = UTF8ArrayToString(buf, 0)
                  } else if (opts.encoding === "binary") {
                      ret = buf
                  }
                  FS.close(stream);
                  return ret
              },
              writeFile(path, data, opts = {}) {
                  opts.flags = opts.flags || 577;
                  var stream = FS.open(path, opts.flags, opts.mode);
                  if (typeof data == "string") {
                      var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
                      var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
                      FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn)
                  } else if (ArrayBuffer.isView(data)) {
                      FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn)
                  } else {
                      throw new Error("Unsupported data type")
                  }
                  FS.close(stream)
              },
              cwd: () => FS.currentPath,
              chdir(path) {
                  var lookup = FS.lookupPath(path, {
                      follow: true
                  });
                  if (lookup.node === null) {
                      throw new FS.ErrnoError(44)
                  }
                  if (!FS.isDir(lookup.node.mode)) {
                      throw new FS.ErrnoError(54)
                  }
                  var errCode = FS.nodePermissions(lookup.node, "x");
                  if (errCode) {
                      throw new FS.ErrnoError(errCode)
                  }
                  FS.currentPath = lookup.path
              },
              createDefaultDirectories() {
                  FS.mkdir("/tmp");
                  FS.mkdir("/home");
                  FS.mkdir("/home/web_user")
              },
              createDefaultDevices() {
                  FS.mkdir("/dev");
                  FS.registerDevice(FS.makedev(1, 3), {
                      read: () => 0,
                      write: (stream, buffer, offset, length, pos) => length
                  });
                  FS.mkdev("/dev/null", FS.makedev(1, 3));
                  TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
                  TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
                  FS.mkdev("/dev/tty", FS.makedev(5, 0));
                  FS.mkdev("/dev/tty1", FS.makedev(6, 0));
                  var randomBuffer = new Uint8Array(1024),
                      randomLeft = 0;
                  var randomByte = () => {
                      if (randomLeft === 0) {
                          randomLeft = randomFill(randomBuffer).byteLength
                      }
                      return randomBuffer[--randomLeft]
                  };
                  FS.createDevice("/dev", "random", randomByte);
                  FS.createDevice("/dev", "urandom", randomByte);
                  FS.mkdir("/dev/shm");
                  FS.mkdir("/dev/shm/tmp")
              },
              createSpecialDirectories() {
                  FS.mkdir("/proc");
                  var proc_self = FS.mkdir("/proc/self");
                  FS.mkdir("/proc/self/fd");
                  FS.mount({
                      mount() {
                          var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
                          node.node_ops = {
                              lookup(parent, name) {
                                  var fd = +name;
                                  var stream = FS.getStreamChecked(fd);
                                  var ret = {
                                      parent: null,
                                      mount: {
                                          mountpoint: "fake"
                                      },
                                      node_ops: {
                                          readlink: () => stream.path
                                      }
                                  };
                                  ret.parent = ret;
                                  return ret
                              }
                          };
                          return node
                      }
                  }, {}, "/proc/self/fd")
              },
              createStandardStreams() {
                  if (Module["stdin"]) {
                      FS.createDevice("/dev", "stdin", Module["stdin"])
                  } else {
                      FS.symlink("/dev/tty", "/dev/stdin")
                  }
                  if (Module["stdout"]) {
                      FS.createDevice("/dev", "stdout", null, Module["stdout"])
                  } else {
                      FS.symlink("/dev/tty", "/dev/stdout")
                  }
                  if (Module["stderr"]) {
                      FS.createDevice("/dev", "stderr", null, Module["stderr"])
                  } else {
                      FS.symlink("/dev/tty1", "/dev/stderr")
                  }
                  var stdin = FS.open("/dev/stdin", 0);
                  var stdout = FS.open("/dev/stdout", 1);
                  var stderr = FS.open("/dev/stderr", 1)
              },
              staticInit() {
                  [44].forEach(code => {
                      FS.genericErrors[code] = new FS.ErrnoError(code);
                      FS.genericErrors[code].stack = "<generic error, no stack>"
                  });
                  FS.nameTable = new Array(4096);
                  FS.mount(MEMFS, {}, "/");
                  FS.createDefaultDirectories();
                  FS.createDefaultDevices();
                  FS.createSpecialDirectories();
                  FS.filesystems = {
                      "MEMFS": MEMFS,
                      "IDBFS": IDBFS
                  }
              },
              init(input, output, error) {
                  FS.init.initialized = true;
                  Module["stdin"] = input || Module["stdin"];
                  Module["stdout"] = output || Module["stdout"];
                  Module["stderr"] = error || Module["stderr"];
                  FS.createStandardStreams()
              },
              quit() {
                  FS.init.initialized = false;
                  for (var i = 0; i < FS.streams.length; i++) {
                      var stream = FS.streams[i];
                      if (!stream) {
                          continue
                      }
                      FS.close(stream)
                  }
              },
              findObject(path, dontResolveLastLink) {
                  var ret = FS.analyzePath(path, dontResolveLastLink);
                  if (!ret.exists) {
                      return null
                  }
                  return ret.object
              },
              analyzePath(path, dontResolveLastLink) {
                  try {
                      var lookup = FS.lookupPath(path, {
                          follow: !dontResolveLastLink
                      });
                      path = lookup.path
                  } catch (e) {}
                  var ret = {
                      isRoot: false,
                      exists: false,
                      error: 0,
                      name: null,
                      path: null,
                      object: null,
                      parentExists: false,
                      parentPath: null,
                      parentObject: null
                  };
                  try {
                      var lookup = FS.lookupPath(path, {
                          parent: true
                      });
                      ret.parentExists = true;
                      ret.parentPath = lookup.path;
                      ret.parentObject = lookup.node;
                      ret.name = PATH.basename(path);
                      lookup = FS.lookupPath(path, {
                          follow: !dontResolveLastLink
                      });
                      ret.exists = true;
                      ret.path = lookup.path;
                      ret.object = lookup.node;
                      ret.name = lookup.node.name;
                      ret.isRoot = lookup.path === "/"
                  } catch (e) {
                      ret.error = e.errno
                  }
                  return ret
              },
              createPath(parent, path, canRead, canWrite) {
                  parent = typeof parent == "string" ? parent : FS.getPath(parent);
                  var parts = path.split("/").reverse();
                  while (parts.length) {
                      var part = parts.pop();
                      if (!part) continue;
                      var current = PATH.join2(parent, part);
                      try {
                          FS.mkdir(current)
                      } catch (e) {}
                      parent = current
                  }
                  return current
              },
              createFile(parent, name, properties, canRead, canWrite) {
                  var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
                  var mode = FS_getMode(canRead, canWrite);
                  return FS.create(path, mode)
              },
              createDataFile(parent, name, data, canRead, canWrite, canOwn) {
                  var path = name;
                  if (parent) {
                      parent = typeof parent == "string" ? parent : FS.getPath(parent);
                      path = name ? PATH.join2(parent, name) : parent
                  }
                  var mode = FS_getMode(canRead, canWrite);
                  var node = FS.create(path, mode);
                  if (data) {
                      if (typeof data == "string") {
                          var arr = new Array(data.length);
                          for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
                          data = arr
                      }
                      FS.chmod(node, mode | 146);
                      var stream = FS.open(node, 577);
                      FS.write(stream, data, 0, data.length, 0, canOwn);
                      FS.close(stream);
                      FS.chmod(node, mode)
                  }
              },
              createDevice(parent, name, input, output) {
                  var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
                  var mode = FS_getMode(!!input, !!output);
                  if (!FS.createDevice.major) FS.createDevice.major = 64;
                  var dev = FS.makedev(FS.createDevice.major++, 0);
                  FS.registerDevice(dev, {
                      open(stream) {
                          stream.seekable = false
                      },
                      close(stream) {
                          if (output?.buffer?.length) {
                              output(10)
                          }
                      },
                      read(stream, buffer, offset, length, pos) {
                          var bytesRead = 0;
                          for (var i = 0; i < length; i++) {
                              var result;
                              try {
                                  result = input()
                              } catch (e) {
                                  throw new FS.ErrnoError(29)
                              }
                              if (result === undefined && bytesRead === 0) {
                                  throw new FS.ErrnoError(6)
                              }
                              if (result === null || result === undefined) break;
                              bytesRead++;
                              buffer[offset + i] = result
                          }
                          if (bytesRead) {
                              stream.node.timestamp = Date.now()
                          }
                          return bytesRead
                      },
                      write(stream, buffer, offset, length, pos) {
                          for (var i = 0; i < length; i++) {
                              try {
                                  output(buffer[offset + i])
                              } catch (e) {
                                  throw new FS.ErrnoError(29)
                              }
                          }
                          if (length) {
                              stream.node.timestamp = Date.now()
                          }
                          return i
                      }
                  });
                  return FS.mkdev(path, mode, dev)
              },
              forceLoadFile(obj) {
                  if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
                  if (typeof XMLHttpRequest != "undefined") {
                      throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")
                  } else if (read_) {
                      try {
                          obj.contents = intArrayFromString(read_(obj.url), true);
                          obj.usedBytes = obj.contents.length
                      } catch (e) {
                          throw new FS.ErrnoError(29)
                      }
                  } else {
                      throw new Error("Cannot load without read() or XMLHttpRequest.")
                  }
              },
              createLazyFile(parent, name, url, canRead, canWrite) {
                  function LazyUint8Array() {
                      this.lengthKnown = false;
                      this.chunks = []
                  }
                  LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
                      if (idx > this.length - 1 || idx < 0) {
                          return undefined
                      }
                      var chunkOffset = idx % this.chunkSize;
                      var chunkNum = idx / this.chunkSize | 0;
                      return this.getter(chunkNum)[chunkOffset]
                  };
                  LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
                      this.getter = getter
                  };
                  LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
                      var xhr = new XMLHttpRequest;
                      xhr.open("HEAD", url, false);
                      xhr.send(null);
                      if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                      var datalength = Number(xhr.getResponseHeader("Content-length"));
                      var header;
                      var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
                      var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
                      var chunkSize = 1024 * 1024;
                      if (!hasByteServing) chunkSize = datalength;
                      var doXHR = (from, to) => {
                          if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                          if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
                          var xhr = new XMLHttpRequest;
                          xhr.open("GET", url, false);
                          if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
                          xhr.responseType = "arraybuffer";
                          if (xhr.overrideMimeType) {
                              xhr.overrideMimeType("text/plain; charset=x-user-defined")
                          }
                          xhr.send(null);
                          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                          if (xhr.response !== undefined) {
                              return new Uint8Array(xhr.response || [])
                          }
                          return intArrayFromString(xhr.responseText || "", true)
                      };
                      var lazyArray = this;
                      lazyArray.setDataGetter(chunkNum => {
                          var start = chunkNum * chunkSize;
                          var end = (chunkNum + 1) * chunkSize - 1;
                          end = Math.min(end, datalength - 1);
                          if (typeof lazyArray.chunks[chunkNum] == "undefined") {
                              lazyArray.chunks[chunkNum] = doXHR(start, end)
                          }
                          if (typeof lazyArray.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
                          return lazyArray.chunks[chunkNum]
                      });
                      if (usesGzip || !datalength) {
                          chunkSize = datalength = 1;
                          datalength = this.getter(0).length;
                          chunkSize = datalength;
                          out("LazyFiles on gzip forces download of the whole file when length is accessed")
                      }
                      this._length = datalength;
                      this._chunkSize = chunkSize;
                      this.lengthKnown = true
                  };
                  if (typeof XMLHttpRequest != "undefined") {
                      if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                      var lazyArray = new LazyUint8Array;
                      Object.defineProperties(lazyArray, {
                          length: {
                              get: function() {
                                  if (!this.lengthKnown) {
                                      this.cacheLength()
                                  }
                                  return this._length
                              }
                          },
                          chunkSize: {
                              get: function() {
                                  if (!this.lengthKnown) {
                                      this.cacheLength()
                                  }
                                  return this._chunkSize
                              }
                          }
                      });
                      var properties = {
                          isDevice: false,
                          contents: lazyArray
                      }
                  } else {
                      var properties = {
                          isDevice: false,
                          url: url
                      }
                  }
                  var node = FS.createFile(parent, name, properties, canRead, canWrite);
                  if (properties.contents) {
                      node.contents = properties.contents
                  } else if (properties.url) {
                      node.contents = null;
                      node.url = properties.url
                  }
                  Object.defineProperties(node, {
                      usedBytes: {
                          get: function() {
                              return this.contents.length
                          }
                      }
                  });
                  var stream_ops = {};
                  var keys = Object.keys(node.stream_ops);
                  keys.forEach(key => {
                      var fn = node.stream_ops[key];
                      stream_ops[key] = function forceLoadLazyFile() {
                          FS.forceLoadFile(node);
                          return fn.apply(null, arguments)
                      }
                  });

                  function writeChunks(stream, buffer, offset, length, position) {
                      var contents = stream.node.contents;
                      if (position >= contents.length) return 0;
                      var size = Math.min(contents.length - position, length);
                      if (contents.slice) {
                          for (var i = 0; i < size; i++) {
                              buffer[offset + i] = contents[position + i]
                          }
                      } else {
                          for (var i = 0; i < size; i++) {
                              buffer[offset + i] = contents.get(position + i)
                          }
                      }
                      return size
                  }
                  stream_ops.read = (stream, buffer, offset, length, position) => {
                      FS.forceLoadFile(node);
                      return writeChunks(stream, buffer, offset, length, position)
                  };
                  stream_ops.mmap = (stream, length, position, prot, flags) => {
                      FS.forceLoadFile(node);
                      var ptr = mmapAlloc(length);
                      if (!ptr) {
                          throw new FS.ErrnoError(48)
                      }
                      writeChunks(stream, HEAP8, ptr, length, position);
                      return {
                          ptr: ptr,
                          allocated: true
                      }
                  };
                  node.stream_ops = stream_ops;
                  return node
              }
          };
          var UTF8ToString = (ptr, maxBytesToRead) => ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
          var SYSCALLS = {
              DEFAULT_POLLMASK: 5,
              calculateAt(dirfd, path, allowEmpty) {
                  if (PATH.isAbs(path)) {
                      return path
                  }
                  var dir;
                  if (dirfd === -100) {
                      dir = FS.cwd()
                  } else {
                      var dirstream = SYSCALLS.getStreamFromFD(dirfd);
                      dir = dirstream.path
                  }
                  if (path.length == 0) {
                      if (!allowEmpty) {
                          throw new FS.ErrnoError(44)
                      }
                      return dir
                  }
                  return PATH.join2(dir, path)
              },
              doStat(func, path, buf) {
                  var stat = func(path);
                  HEAP32[buf >> 2] = stat.dev;
                  HEAP32[buf + 4 >> 2] = stat.mode;
                  HEAPU32[buf + 8 >> 2] = stat.nlink;
                  HEAP32[buf + 12 >> 2] = stat.uid;
                  HEAP32[buf + 16 >> 2] = stat.gid;
                  HEAP32[buf + 20 >> 2] = stat.rdev;
                  tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 24 >> 2] = tempI64[0], HEAP32[buf + 28 >> 2] = tempI64[1];
                  HEAP32[buf + 32 >> 2] = 4096;
                  HEAP32[buf + 36 >> 2] = stat.blocks;
                  var atime = stat.atime.getTime();
                  var mtime = stat.mtime.getTime();
                  var ctime = stat.ctime.getTime();
                  tempI64 = [Math.floor(atime / 1e3) >>> 0, (tempDouble = Math.floor(atime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
                  HEAPU32[buf + 48 >> 2] = atime % 1e3 * 1e3;
                  tempI64 = [Math.floor(mtime / 1e3) >>> 0, (tempDouble = Math.floor(mtime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 56 >> 2] = tempI64[0], HEAP32[buf + 60 >> 2] = tempI64[1];
                  HEAPU32[buf + 64 >> 2] = mtime % 1e3 * 1e3;
                  tempI64 = [Math.floor(ctime / 1e3) >>> 0, (tempDouble = Math.floor(ctime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 72 >> 2] = tempI64[0], HEAP32[buf + 76 >> 2] = tempI64[1];
                  HEAPU32[buf + 80 >> 2] = ctime % 1e3 * 1e3;
                  tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 88 >> 2] = tempI64[0], HEAP32[buf + 92 >> 2] = tempI64[1];
                  return 0
              },
              doMsync(addr, stream, len, flags, offset) {
                  if (!FS.isFile(stream.node.mode)) {
                      throw new FS.ErrnoError(43)
                  }
                  if (flags & 2) {
                      return 0
                  }
                  var buffer = HEAPU8.slice(addr, addr + len);
                  FS.msync(stream, buffer, offset, len, flags)
              },
              varargs: undefined,
              get() {
                  var ret = HEAP32[+SYSCALLS.varargs >> 2];
                  SYSCALLS.varargs += 4;
                  return ret
              },
              getp() {
                  return SYSCALLS.get()
              },
              getStr(ptr) {
                  var ret = UTF8ToString(ptr);
                  return ret
              },
              getStreamFromFD(fd) {
                  var stream = FS.getStreamChecked(fd);
                  return stream
              }
          };

          function ___syscall_fcntl64(fd, cmd, varargs) {
              SYSCALLS.varargs = varargs;
              try {
                  var stream = SYSCALLS.getStreamFromFD(fd);
                  switch (cmd) {
                      case 0: {
                          var arg = SYSCALLS.get();
                          if (arg < 0) {
                              return -28
                          }
                          while (FS.streams[arg]) {
                              arg++
                          }
                          var newStream;
                          newStream = FS.createStream(stream, arg);
                          return newStream.fd
                      }
                      case 1:
                      case 2:
                          return 0;
                      case 3:
                          return stream.flags;
                      case 4: {
                          var arg = SYSCALLS.get();
                          stream.flags |= arg;
                          return 0
                      }
                      case 12: {
                          var arg = SYSCALLS.getp();
                          var offset = 0;
                          HEAP16[arg + offset >> 1] = 2;
                          return 0
                      }
                      case 13:
                      case 14:
                          return 0
                  }
                  return -28
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }

          function ___syscall_fstat64(fd, buf) {
              try {
                  var stream = SYSCALLS.getStreamFromFD(fd);
                  return SYSCALLS.doStat(FS.stat, stream.path, buf)
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }
          var convertI32PairToI53Checked = (lo, hi) => hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN;

          function ___syscall_ftruncate64(fd, length_low, length_high) {
              var length = convertI32PairToI53Checked(length_low, length_high);
              try {
                  if (isNaN(length)) return 61;
                  FS.ftruncate(fd, length);
                  return 0
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }
          var stringToUTF8 = (str, outPtr, maxBytesToWrite) => stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);

          function ___syscall_getcwd(buf, size) {
              try {
                  if (size === 0) return -28;
                  var cwd = FS.cwd();
                  var cwdLengthInBytes = lengthBytesUTF8(cwd) + 1;
                  if (size < cwdLengthInBytes) return -68;
                  stringToUTF8(cwd, buf, size);
                  return cwdLengthInBytes
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }

          function ___syscall_getdents64(fd, dirp, count) {
              try {
                  var stream = SYSCALLS.getStreamFromFD(fd);
                  stream.getdents ||= FS.readdir(stream.path);
                  var struct_size = 280;
                  var pos = 0;
                  var off = FS.llseek(stream, 0, 1);
                  var idx = Math.floor(off / struct_size);
                  while (idx < stream.getdents.length && pos + struct_size <= count) {
                      var id;
                      var type;
                      var name = stream.getdents[idx];
                      if (name === ".") {
                          id = stream.node.id;
                          type = 4
                      } else if (name === "..") {
                          var lookup = FS.lookupPath(stream.path, {
                              parent: true
                          });
                          id = lookup.node.id;
                          type = 4
                      } else {
                          var child = FS.lookupNode(stream.node, name);
                          id = child.id;
                          type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8
                      }
                      tempI64 = [id >>> 0, (tempDouble = id, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos >> 2] = tempI64[0], HEAP32[dirp + pos + 4 >> 2] = tempI64[1];
                      tempI64 = [(idx + 1) * struct_size >>> 0, (tempDouble = (idx + 1) * struct_size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos + 8 >> 2] = tempI64[0], HEAP32[dirp + pos + 12 >> 2] = tempI64[1];
                      HEAP16[dirp + pos + 16 >> 1] = 280;
                      HEAP8[dirp + pos + 18 >> 0] = type;
                      stringToUTF8(name, dirp + pos + 19, 256);
                      pos += struct_size;
                      idx += 1
                  }
                  FS.llseek(stream, idx * struct_size, 0);
                  return pos
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }

          function ___syscall_ioctl(fd, op, varargs) {
              SYSCALLS.varargs = varargs;
              try {
                  var stream = SYSCALLS.getStreamFromFD(fd);
                  switch (op) {
                      case 21509: {
                          if (!stream.tty) return -59;
                          return 0
                      }
                      case 21505: {
                          if (!stream.tty) return -59;
                          if (stream.tty.ops.ioctl_tcgets) {
                              var termios = stream.tty.ops.ioctl_tcgets(stream);
                              var argp = SYSCALLS.getp();
                              HEAP32[argp >> 2] = termios.c_iflag || 0;
                              HEAP32[argp + 4 >> 2] = termios.c_oflag || 0;
                              HEAP32[argp + 8 >> 2] = termios.c_cflag || 0;
                              HEAP32[argp + 12 >> 2] = termios.c_lflag || 0;
                              for (var i = 0; i < 32; i++) {
                                  HEAP8[argp + i + 17 >> 0] = termios.c_cc[i] || 0
                              }
                              return 0
                          }
                          return 0
                      }
                      case 21510:
                      case 21511:
                      case 21512: {
                          if (!stream.tty) return -59;
                          return 0
                      }
                      case 21506:
                      case 21507:
                      case 21508: {
                          if (!stream.tty) return -59;
                          if (stream.tty.ops.ioctl_tcsets) {
                              var argp = SYSCALLS.getp();
                              var c_iflag = HEAP32[argp >> 2];
                              var c_oflag = HEAP32[argp + 4 >> 2];
                              var c_cflag = HEAP32[argp + 8 >> 2];
                              var c_lflag = HEAP32[argp + 12 >> 2];
                              var c_cc = [];
                              for (var i = 0; i < 32; i++) {
                                  c_cc.push(HEAP8[argp + i + 17 >> 0])
                              }
                              return stream.tty.ops.ioctl_tcsets(stream.tty, op, {
                                  c_iflag: c_iflag,
                                  c_oflag: c_oflag,
                                  c_cflag: c_cflag,
                                  c_lflag: c_lflag,
                                  c_cc: c_cc
                              })
                          }
                          return 0
                      }
                      case 21519: {
                          if (!stream.tty) return -59;
                          var argp = SYSCALLS.getp();
                          HEAP32[argp >> 2] = 0;
                          return 0
                      }
                      case 21520: {
                          if (!stream.tty) return -59;
                          return -28
                      }
                      case 21531: {
                          var argp = SYSCALLS.getp();
                          return FS.ioctl(stream, op, argp)
                      }
                      case 21523: {
                          if (!stream.tty) return -59;
                          if (stream.tty.ops.ioctl_tiocgwinsz) {
                              var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
                              var argp = SYSCALLS.getp();
                              HEAP16[argp >> 1] = winsize[0];
                              HEAP16[argp + 2 >> 1] = winsize[1]
                          }
                          return 0
                      }
                      case 21524: {
                          if (!stream.tty) return -59;
                          return 0
                      }
                      case 21515: {
                          if (!stream.tty) return -59;
                          return 0
                      }
                      default:
                          return -28
                  }
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }

          function ___syscall_lstat64(path, buf) {
              try {
                  path = SYSCALLS.getStr(path);
                  return SYSCALLS.doStat(FS.lstat, path, buf)
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }

          function ___syscall_mkdirat(dirfd, path, mode) {
              try {
                  path = SYSCALLS.getStr(path);
                  path = SYSCALLS.calculateAt(dirfd, path);
                  path = PATH.normalize(path);
                  if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
                  FS.mkdir(path, mode, 0);
                  return 0
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }

          function ___syscall_newfstatat(dirfd, path, buf, flags) {
              try {
                  path = SYSCALLS.getStr(path);
                  var nofollow = flags & 256;
                  var allowEmpty = flags & 4096;
                  flags = flags & ~6400;
                  path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
                  return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf)
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }

          function ___syscall_openat(dirfd, path, flags, varargs) {
              SYSCALLS.varargs = varargs;
              try {
                  path = SYSCALLS.getStr(path);
                  path = SYSCALLS.calculateAt(dirfd, path);
                  var mode = varargs ? SYSCALLS.get() : 0;
                  return FS.open(path, flags, mode).fd
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }

          function ___syscall_readlinkat(dirfd, path, buf, bufsize) {
              try {
                  path = SYSCALLS.getStr(path);
                  path = SYSCALLS.calculateAt(dirfd, path);
                  if (bufsize <= 0) return -28;
                  var ret = FS.readlink(path);
                  var len = Math.min(bufsize, lengthBytesUTF8(ret));
                  var endChar = HEAP8[buf + len];
                  stringToUTF8(ret, buf, bufsize + 1);
                  HEAP8[buf + len] = endChar;
                  return len
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }

          function ___syscall_rmdir(path) {
              try {
                  path = SYSCALLS.getStr(path);
                  FS.rmdir(path);
                  return 0
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }

          function ___syscall_stat64(path, buf) {
              try {
                  path = SYSCALLS.getStr(path);
                  return SYSCALLS.doStat(FS.stat, path, buf)
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }

          function ___syscall_unlinkat(dirfd, path, flags) {
              try {
                  path = SYSCALLS.getStr(path);
                  path = SYSCALLS.calculateAt(dirfd, path);
                  if (flags === 0) {
                      FS.unlink(path)
                  } else if (flags === 512) {
                      FS.rmdir(path)
                  } else {
                      abort("Invalid flags passed to unlinkat")
                  }
                  return 0
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }
          var readI53FromI64 = ptr => HEAPU32[ptr >> 2] + HEAP32[ptr + 4 >> 2] * 4294967296;

          function ___syscall_utimensat(dirfd, path, times, flags) {
              try {
                  path = SYSCALLS.getStr(path);
                  path = SYSCALLS.calculateAt(dirfd, path, true);
                  if (!times) {
                      var atime = Date.now();
                      var mtime = atime
                  } else {
                      var seconds = readI53FromI64(times);
                      var nanoseconds = HEAP32[times + 8 >> 2];
                      atime = seconds * 1e3 + nanoseconds / (1e3 * 1e3);
                      times += 16;
                      seconds = readI53FromI64(times);
                      nanoseconds = HEAP32[times + 8 >> 2];
                      mtime = seconds * 1e3 + nanoseconds / (1e3 * 1e3)
                  }
                  FS.utime(path, atime, mtime);
                  return 0
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }
          var nowIsMonotonic = 1;
          var __emscripten_get_now_is_monotonic = () => nowIsMonotonic;
          var __emscripten_throw_longjmp = () => {
              throw Infinity
          };
          var isLeapYear = year => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
          var MONTH_DAYS_LEAP_CUMULATIVE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
          var MONTH_DAYS_REGULAR_CUMULATIVE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
          var ydayFromDate = date => {
              var leap = isLeapYear(date.getFullYear());
              var monthDaysCumulative = leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE;
              var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1;
              return yday
          };

          function __localtime_js(time_low, time_high, tmPtr) {
              var time = convertI32PairToI53Checked(time_low, time_high);
              var date = new Date(time * 1e3);
              HEAP32[tmPtr >> 2] = date.getSeconds();
              HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
              HEAP32[tmPtr + 8 >> 2] = date.getHours();
              HEAP32[tmPtr + 12 >> 2] = date.getDate();
              HEAP32[tmPtr + 16 >> 2] = date.getMonth();
              HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
              HEAP32[tmPtr + 24 >> 2] = date.getDay();
              var yday = ydayFromDate(date) | 0;
              HEAP32[tmPtr + 28 >> 2] = yday;
              HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
              var start = new Date(date.getFullYear(), 0, 1);
              var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
              var winterOffset = start.getTimezoneOffset();
              var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
              HEAP32[tmPtr + 32 >> 2] = dst
          }
          var __mktime_js = function(tmPtr) {
              var ret = (() => {
                  var date = new Date(HEAP32[tmPtr + 20 >> 2] + 1900, HEAP32[tmPtr + 16 >> 2], HEAP32[tmPtr + 12 >> 2], HEAP32[tmPtr + 8 >> 2], HEAP32[tmPtr + 4 >> 2], HEAP32[tmPtr >> 2], 0);
                  var dst = HEAP32[tmPtr + 32 >> 2];
                  var guessedOffset = date.getTimezoneOffset();
                  var start = new Date(date.getFullYear(), 0, 1);
                  var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
                  var winterOffset = start.getTimezoneOffset();
                  var dstOffset = Math.min(winterOffset, summerOffset);
                  if (dst < 0) {
                      HEAP32[tmPtr + 32 >> 2] = Number(summerOffset != winterOffset && dstOffset == guessedOffset)
                  } else if (dst > 0 != (dstOffset == guessedOffset)) {
                      var nonDstOffset = Math.max(winterOffset, summerOffset);
                      var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
                      date.setTime(date.getTime() + (trueOffset - guessedOffset) * 6e4)
                  }
                  HEAP32[tmPtr + 24 >> 2] = date.getDay();
                  var yday = ydayFromDate(date) | 0;
                  HEAP32[tmPtr + 28 >> 2] = yday;
                  HEAP32[tmPtr >> 2] = date.getSeconds();
                  HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
                  HEAP32[tmPtr + 8 >> 2] = date.getHours();
                  HEAP32[tmPtr + 12 >> 2] = date.getDate();
                  HEAP32[tmPtr + 16 >> 2] = date.getMonth();
                  HEAP32[tmPtr + 20 >> 2] = date.getYear();
                  var timeMs = date.getTime();
                  if (isNaN(timeMs)) {
                      return -1
                  }
                  return timeMs / 1e3
              })();
              return setTempRet0((tempDouble = ret, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)), ret >>> 0
          };

          function __mmap_js(len, prot, flags, fd, offset_low, offset_high, allocated, addr) {
              var offset = convertI32PairToI53Checked(offset_low, offset_high);
              try {
                  if (isNaN(offset)) return 61;
                  var stream = SYSCALLS.getStreamFromFD(fd);
                  var res = FS.mmap(stream, len, offset, prot, flags);
                  var ptr = res.ptr;
                  HEAP32[allocated >> 2] = res.allocated;
                  HEAPU32[addr >> 2] = ptr;
                  return 0
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }

          function __msync_js(addr, len, prot, flags, fd, offset_low, offset_high) {
              var offset = convertI32PairToI53Checked(offset_low, offset_high);
              try {
                  if (isNaN(offset)) return 61;
                  SYSCALLS.doMsync(addr, SYSCALLS.getStreamFromFD(fd), len, flags, offset);
                  return 0
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }

          function __munmap_js(addr, len, prot, flags, fd, offset_low, offset_high) {
              var offset = convertI32PairToI53Checked(offset_low, offset_high);
              try {
                  if (isNaN(offset)) return 61;
                  var stream = SYSCALLS.getStreamFromFD(fd);
                  if (prot & 2) {
                      SYSCALLS.doMsync(addr, stream, len, flags, offset)
                  }
                  FS.munmap(stream)
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return -e.errno
              }
          }
          var stringToNewUTF8 = str => {
              var size = lengthBytesUTF8(str) + 1;
              var ret = _malloc(size);
              if (ret) stringToUTF8(str, ret, size);
              return ret
          };
          var __tzset_js = (timezone, daylight, tzname) => {
              var currentYear = (new Date).getFullYear();
              var winter = new Date(currentYear, 0, 1);
              var summer = new Date(currentYear, 6, 1);
              var winterOffset = winter.getTimezoneOffset();
              var summerOffset = summer.getTimezoneOffset();
              var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
              HEAPU32[timezone >> 2] = stdTimezoneOffset * 60;
              HEAP32[daylight >> 2] = Number(winterOffset != summerOffset);

              function extractZone(date) {
                  var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
                  return match ? match[1] : "GMT"
              }
              var winterName = extractZone(winter);
              var summerName = extractZone(summer);
              var winterNamePtr = stringToNewUTF8(winterName);
              var summerNamePtr = stringToNewUTF8(summerName);
              if (summerOffset < winterOffset) {
                  HEAPU32[tzname >> 2] = winterNamePtr;
                  HEAPU32[tzname + 4 >> 2] = summerNamePtr
              } else {
                  HEAPU32[tzname >> 2] = summerNamePtr;
                  HEAPU32[tzname + 4 >> 2] = winterNamePtr
              }
          };
          var _abort = () => {
              abort("")
          };
          var _emscripten_set_main_loop_timing = (mode, value) => {
              Browser.mainLoop.timingMode = mode;
              Browser.mainLoop.timingValue = value;
              if (!Browser.mainLoop.func) {
                  return 1
              }
              if (!Browser.mainLoop.running) {
                  Browser.mainLoop.running = true
              }
              if (mode == 0) {
                  Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
                      var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now()) | 0;
                      setTimeout(Browser.mainLoop.runner, timeUntilNextTick)
                  };
                  Browser.mainLoop.method = "timeout"
              } else if (mode == 1) {
                  Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
                      Browser.requestAnimationFrame(Browser.mainLoop.runner)
                  };
                  Browser.mainLoop.method = "rAF"
              } else if (mode == 2) {
                  if (typeof Browser.setImmediate == "undefined") {
                      if (typeof setImmediate == "undefined") {
                          var setImmediates = [];
                          var emscriptenMainLoopMessageId = "setimmediate";
                          var Browser_setImmediate_messageHandler = event => {
                              if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
                                  event.stopPropagation();
                                  setImmediates.shift()()
                              }
                          };
                          addEventListener("message", Browser_setImmediate_messageHandler, true);
                          Browser.setImmediate = function Browser_emulated_setImmediate(func) {
                              setImmediates.push(func);
                              if (ENVIRONMENT_IS_WORKER) {
                                  if (Module["setImmediates"] === undefined) Module["setImmediates"] = [];
                                  Module["setImmediates"].push(func);
                                  postMessage({
                                      target: emscriptenMainLoopMessageId
                                  })
                              } else postMessage(emscriptenMainLoopMessageId, "*")
                          }
                      } else {
                          Browser.setImmediate = setImmediate
                      }
                  }
                  Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
                      Browser.setImmediate(Browser.mainLoop.runner)
                  };
                  Browser.mainLoop.method = "immediate"
              }
              return 0
          };
          var _emscripten_get_now;
          _emscripten_get_now = () => performance.now();
          var setMainLoop = (browserIterationFunc, fps, simulateInfiniteLoop, arg, noSetTiming) => {
              assert(!Browser.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
              Browser.mainLoop.func = browserIterationFunc;
              Browser.mainLoop.arg = arg;
              var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;

              function checkIsRunning() {
                  if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) {
                      return false
                  }
                  return true
              }
              Browser.mainLoop.running = false;
              Browser.mainLoop.runner = function Browser_mainLoop_runner() {
                  if (ABORT) return;
                  if (Browser.mainLoop.queue.length > 0) {
                      var start = Date.now();
                      var blocker = Browser.mainLoop.queue.shift();
                      blocker.func(blocker.arg);
                      if (Browser.mainLoop.remainingBlockers) {
                          var remaining = Browser.mainLoop.remainingBlockers;
                          var next = remaining % 1 == 0 ? remaining - 1 : Math.floor(remaining);
                          if (blocker.counted) {
                              Browser.mainLoop.remainingBlockers = next
                          } else {
                              next = next + .5;
                              Browser.mainLoop.remainingBlockers = (8 * remaining + next) / 9
                          }
                      }
                      Browser.mainLoop.updateStatus();
                      if (!checkIsRunning()) return;
                      setTimeout(Browser.mainLoop.runner, 0);
                      return
                  }
                  if (!checkIsRunning()) return;
                  Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;
                  if (Browser.mainLoop.timingMode == 1 && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
                      Browser.mainLoop.scheduler();
                      return
                  } else if (Browser.mainLoop.timingMode == 0) {
                      Browser.mainLoop.tickStartTime = _emscripten_get_now()
                  }
                  GL.newRenderingFrameStarted();
                  Browser.mainLoop.runIter(browserIterationFunc);
                  if (!checkIsRunning()) return;
                  if (typeof SDL == "object") SDL.audio?.queueNewAudioData?.();
                  Browser.mainLoop.scheduler()
              };
              if (!noSetTiming) {
                  if (fps && fps > 0) {
                      _emscripten_set_main_loop_timing(0, 1e3 / fps)
                  } else {
                      _emscripten_set_main_loop_timing(1, 1)
                  }
                  Browser.mainLoop.scheduler()
              }
              if (simulateInfiniteLoop) {
                  throw "unwind"
              }
          };
          var handleException = e => {
              if (e instanceof ExitStatus || e == "unwind") {
                  return EXITSTATUS
              }
              quit_(1, e)
          };
          var runtimeKeepaliveCounter = 0;
          var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
          var _proc_exit = code => {
              EXITSTATUS = code;
              if (!keepRuntimeAlive()) {
                  Module["onExit"]?.(code);
                  ABORT = true
              }
              quit_(code, new ExitStatus(code))
          };
          var exitJS = (status, implicit) => {
              EXITSTATUS = status;
              _proc_exit(status)
          };
          var _exit = exitJS;
          var maybeExit = () => {
              if (!keepRuntimeAlive()) {
                  try {
                      _exit(EXITSTATUS)
                  } catch (e) {
                      handleException(e)
                  }
              }
          };
          var callUserCallback = func => {
              if (ABORT) {
                  return
              }
              try {
                  func();
                  maybeExit()
              } catch (e) {
                  handleException(e)
              }
          };
          var safeSetTimeout = (func, timeout) => setTimeout(() => {
              callUserCallback(func)
          }, timeout);
          var warnOnce = text => {
              warnOnce.shown ||= {};
              if (!warnOnce.shown[text]) {
                  warnOnce.shown[text] = 1;
                  err(text)
              }
          };
          var Browser = {
              mainLoop: {
                  running: false,
                  scheduler: null,
                  method: "",
                  currentlyRunningMainloop: 0,
                  func: null,
                  arg: 0,
                  timingMode: 0,
                  timingValue: 0,
                  currentFrameNumber: 0,
                  queue: [],
                  pause() {
                      Browser.mainLoop.scheduler = null;
                      Browser.mainLoop.currentlyRunningMainloop++
                  },
                  resume() {
                      Browser.mainLoop.currentlyRunningMainloop++;
                      var timingMode = Browser.mainLoop.timingMode;
                      var timingValue = Browser.mainLoop.timingValue;
                      var func = Browser.mainLoop.func;
                      Browser.mainLoop.func = null;
                      setMainLoop(func, 0, false, Browser.mainLoop.arg, true);
                      _emscripten_set_main_loop_timing(timingMode, timingValue);
                      Browser.mainLoop.scheduler()
                  },
                  updateStatus() {
                      if (Module["setStatus"]) {
                          var message = Module["statusMessage"] || "Please wait...";
                          var remaining = Browser.mainLoop.remainingBlockers;
                          var expected = Browser.mainLoop.expectedBlockers;
                          if (remaining) {
                              if (remaining < expected) {
                                  Module["setStatus"](message + " (" + (expected - remaining) + "/" + expected + ")")
                              } else {
                                  Module["setStatus"](message)
                              }
                          } else {
                              Module["setStatus"]("")
                          }
                      }
                  },
                  runIter(func) {
                      if (ABORT) return;
                      if (Module["preMainLoop"]) {
                          var preRet = Module["preMainLoop"]();
                          if (preRet === false) {
                              return
                          }
                      }
                      callUserCallback(func);
                      Module["postMainLoop"]?.()
                  }
              },
              isFullscreen: false,
              pointerLock: false,
              moduleContextCreatedCallbacks: [],
              workers: [],
              init() {
                  if (Browser.initted) return;
                  Browser.initted = true;
                  var imagePlugin = {};
                  imagePlugin["canHandle"] = function imagePlugin_canHandle(name) {
                      return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name)
                  };
                  imagePlugin["handle"] = function imagePlugin_handle(byteArray, name, onload, onerror) {
                      var b = new Blob([byteArray], {
                          type: Browser.getMimetype(name)
                      });
                      if (b.size !== byteArray.length) {
                          b = new Blob([new Uint8Array(byteArray).buffer], {
                              type: Browser.getMimetype(name)
                          })
                      }
                      var url = URL.createObjectURL(b);
                      var img = new Image;
                      img.onload = () => {
                          assert(img.complete, `Image ${name} could not be decoded`);
                          var canvas = document.createElement("canvas");
                          canvas.width = img.width;
                          canvas.height = img.height;
                          var ctx = canvas.getContext("2d");
                          ctx.drawImage(img, 0, 0);
                          preloadedImages[name] = canvas;
                          URL.revokeObjectURL(url);
                          onload?.(byteArray)
                      };
                      img.onerror = event => {
                          err(`Image ${url} could not be decoded`);
                          onerror?.()
                      };
                      img.src = url
                  };
                  preloadPlugins.push(imagePlugin);
                  var audioPlugin = {};
                  audioPlugin["canHandle"] = function audioPlugin_canHandle(name) {
                      return !Module.noAudioDecoding && name.substr(-4) in {
                          ".ogg": 1,
                          ".wav": 1,
                          ".mp3": 1
                      }
                  };
                  audioPlugin["handle"] = function audioPlugin_handle(byteArray, name, onload, onerror) {
                      var done = false;

                      function finish(audio) {
                          if (done) return;
                          done = true;
                          preloadedAudios[name] = audio;
                          onload?.(byteArray)
                      }
                      var b = new Blob([byteArray], {
                          type: Browser.getMimetype(name)
                      });
                      var url = URL.createObjectURL(b);
                      var audio = new Audio;
                      audio.addEventListener("canplaythrough", () => finish(audio), false);
                      audio.onerror = function audio_onerror(event) {
                          if (done) return;
                          err(`warning: browser could not fully decode audio ${name}, trying slower base64 approach`);

                          function encode64(data) {
                              var BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                              var PAD = "=";
                              var ret = "";
                              var leftchar = 0;
                              var leftbits = 0;
                              for (var i = 0; i < data.length; i++) {
                                  leftchar = leftchar << 8 | data[i];
                                  leftbits += 8;
                                  while (leftbits >= 6) {
                                      var curr = leftchar >> leftbits - 6 & 63;
                                      leftbits -= 6;
                                      ret += BASE[curr]
                                  }
                              }
                              if (leftbits == 2) {
                                  ret += BASE[(leftchar & 3) << 4];
                                  ret += PAD + PAD
                              } else if (leftbits == 4) {
                                  ret += BASE[(leftchar & 15) << 2];
                                  ret += PAD
                              }
                              return ret
                          }
                          audio.src = "data:audio/x-" + name.substr(-3) + ";base64," + encode64(byteArray);
                          finish(audio)
                      };
                      audio.src = url;
                      safeSetTimeout(() => {
                          finish(audio)
                      }, 1e4)
                  };
                  preloadPlugins.push(audioPlugin);

                  function pointerLockChange() {
                      Browser.pointerLock = document["pointerLockElement"] === Module["canvas"] || document["mozPointerLockElement"] === Module["canvas"] || document["webkitPointerLockElement"] === Module["canvas"] || document["msPointerLockElement"] === Module["canvas"]
                  }
                  var canvas = Module["canvas"];
                  if (canvas) {
                      canvas.requestPointerLock = canvas["requestPointerLock"] || canvas["mozRequestPointerLock"] || canvas["webkitRequestPointerLock"] || canvas["msRequestPointerLock"] || (() => {});
                      canvas.exitPointerLock = document["exitPointerLock"] || document["mozExitPointerLock"] || document["webkitExitPointerLock"] || document["msExitPointerLock"] || (() => {});
                      canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
                      document.addEventListener("pointerlockchange", pointerLockChange, false);
                      document.addEventListener("mozpointerlockchange", pointerLockChange, false);
                      document.addEventListener("webkitpointerlockchange", pointerLockChange, false);
                      document.addEventListener("mspointerlockchange", pointerLockChange, false);
                      if (Module["elementPointerLock"]) {
                          canvas.addEventListener("click", ev => {
                              if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
                                  Module["canvas"].requestPointerLock();
                                  ev.preventDefault()
                              }
                          }, false)
                      }
                  }
              },
              createContext(canvas, useWebGL, setInModule, webGLContextAttributes) {
                  if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx;
                  var ctx;
                  var contextHandle;
                  if (useWebGL) {
                      var contextAttributes = {
                          antialias: false,
                          alpha: false,
                          majorVersion: 1
                      };
                      if (webGLContextAttributes) {
                          for (var attribute in webGLContextAttributes) {
                              contextAttributes[attribute] = webGLContextAttributes[attribute]
                          }
                      }
                      if (typeof GL != "undefined") {
                          contextHandle = GL.createContext(canvas, contextAttributes);
                          if (contextHandle) {
                              ctx = GL.getContext(contextHandle).GLctx
                          }
                      }
                  } else {
                      ctx = canvas.getContext("2d")
                  }
                  if (!ctx) return null;
                  if (setInModule) {
                      if (!useWebGL) assert(typeof GLctx == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
                      Module.ctx = ctx;
                      if (useWebGL) GL.makeContextCurrent(contextHandle);
                      Module.useWebGL = useWebGL;
                      Browser.moduleContextCreatedCallbacks.forEach(callback => callback());
                      Browser.init()
                  }
                  return ctx
              },
              destroyContext(canvas, useWebGL, setInModule) {},
              fullscreenHandlersInstalled: false,
              lockPointer: undefined,
              resizeCanvas: undefined,
              requestFullscreen(lockPointer, resizeCanvas) {
                  Browser.lockPointer = lockPointer;
                  Browser.resizeCanvas = resizeCanvas;
                  if (typeof Browser.lockPointer == "undefined") Browser.lockPointer = true;
                  if (typeof Browser.resizeCanvas == "undefined") Browser.resizeCanvas = false;
                  var canvas = Module["canvas"];

                  function fullscreenChange() {
                      Browser.isFullscreen = false;
                      var canvasContainer = canvas.parentNode;
                      if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvasContainer) {
                          canvas.exitFullscreen = Browser.exitFullscreen;
                          if (Browser.lockPointer) canvas.requestPointerLock();
                          Browser.isFullscreen = true;
                          if (Browser.resizeCanvas) {
                              Browser.setFullscreenCanvasSize()
                          } else {
                              Browser.updateCanvasDimensions(canvas)
                          }
                      } else {
                          canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
                          canvasContainer.parentNode.removeChild(canvasContainer);
                          if (Browser.resizeCanvas) {
                              Browser.setWindowedCanvasSize()
                          } else {
                              Browser.updateCanvasDimensions(canvas)
                          }
                      }
                      Module["onFullScreen"]?.(Browser.isFullscreen);
                      Module["onFullscreen"]?.(Browser.isFullscreen)
                  }
                  if (!Browser.fullscreenHandlersInstalled) {
                      Browser.fullscreenHandlersInstalled = true;
                      document.addEventListener("fullscreenchange", fullscreenChange, false);
                      document.addEventListener("mozfullscreenchange", fullscreenChange, false);
                      document.addEventListener("webkitfullscreenchange", fullscreenChange, false);
                      document.addEventListener("MSFullscreenChange", fullscreenChange, false)
                  }
                  var canvasContainer = document.createElement("div");
                  canvas.parentNode.insertBefore(canvasContainer, canvas);
                  canvasContainer.appendChild(canvas);
                  canvasContainer.requestFullscreen = canvasContainer["requestFullscreen"] || canvasContainer["mozRequestFullScreen"] || canvasContainer["msRequestFullscreen"] || (canvasContainer["webkitRequestFullscreen"] ? () => canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]) : null) || (canvasContainer["webkitRequestFullScreen"] ? () => canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]) : null);
                  canvasContainer.requestFullscreen()
              },
              exitFullscreen() {
                  if (!Browser.isFullscreen) {
                      return false
                  }
                  var CFS = document["exitFullscreen"] || document["cancelFullScreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"] || document["webkitCancelFullScreen"] || (() => {});
                  CFS.apply(document, []);
                  return true
              },
              nextRAF: 0,
              fakeRequestAnimationFrame(func) {
                  var now = Date.now();
                  if (Browser.nextRAF === 0) {
                      Browser.nextRAF = now + 1e3 / 60
                  } else {
                      while (now + 2 >= Browser.nextRAF) {
                          Browser.nextRAF += 1e3 / 60
                      }
                  }
                  var delay = Math.max(Browser.nextRAF - now, 0);
                  setTimeout(func, delay)
              },
              requestAnimationFrame(func) {
                  if (typeof requestAnimationFrame == "function") {
                      requestAnimationFrame(func);
                      return
                  }
                  var RAF = Browser.fakeRequestAnimationFrame;
                  RAF(func)
              },
              safeSetTimeout(func, timeout) {
                  return safeSetTimeout(func, timeout)
              },
              safeRequestAnimationFrame(func) {
                  return Browser.requestAnimationFrame(() => {
                      callUserCallback(func)
                  })
              },
              getMimetype(name) {
                  return {
                      "jpg": "image/jpeg",
                      "jpeg": "image/jpeg",
                      "png": "image/png",
                      "bmp": "image/bmp",
                      "ogg": "audio/ogg",
                      "wav": "audio/wav",
                      "mp3": "audio/mpeg"
                  } [name.substr(name.lastIndexOf(".") + 1)]
              },
              getUserMedia(func) {
                  window.getUserMedia ||= navigator["getUserMedia"] || navigator["mozGetUserMedia"];
                  window.getUserMedia(func)
              },
              getMovementX(event) {
                  return event["movementX"] || event["mozMovementX"] || event["webkitMovementX"] || 0
              },
              getMovementY(event) {
                  return event["movementY"] || event["mozMovementY"] || event["webkitMovementY"] || 0
              },
              getMouseWheelDelta(event) {
                  var delta = 0;
                  switch (event.type) {
                      case "DOMMouseScroll":
                          delta = event.detail / 3;
                          break;
                      case "mousewheel":
                          delta = event.wheelDelta / 120;
                          break;
                      case "wheel":
                          delta = event.deltaY;
                          switch (event.deltaMode) {
                              case 0:
                                  delta /= 100;
                                  break;
                              case 1:
                                  delta /= 3;
                                  break;
                              case 2:
                                  delta *= 80;
                                  break;
                              default:
                                  throw "unrecognized mouse wheel delta mode: " + event.deltaMode
                          }
                          break;
                      default:
                          throw "unrecognized mouse wheel event: " + event.type
                  }
                  return delta
              },
              mouseX: 0,
              mouseY: 0,
              mouseMovementX: 0,
              mouseMovementY: 0,
              touches: {},
              lastTouches: {},
              calculateMouseCoords(pageX, pageY) {
                  var rect = Module["canvas"].getBoundingClientRect();
                  var cw = Module["canvas"].width;
                  var ch = Module["canvas"].height;
                  var scrollX = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset;
                  var scrollY = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
                  var adjustedX = pageX - (scrollX + rect.left);
                  var adjustedY = pageY - (scrollY + rect.top);
                  adjustedX = adjustedX * (cw / rect.width);
                  adjustedY = adjustedY * (ch / rect.height);
                  return {
                      x: adjustedX,
                      y: adjustedY
                  }
              },
              setMouseCoords(pageX, pageY) {
                  const {
                      x: x,
                      y: y
                  } = Browser.calculateMouseCoords(pageX, pageY);
                  Browser.mouseMovementX = x - Browser.mouseX;
                  Browser.mouseMovementY = y - Browser.mouseY;
                  Browser.mouseX = x;
                  Browser.mouseY = y
              },
              calculateMouseEvent(event) {
                  if (Browser.pointerLock) {
                      if (event.type != "mousemove" && "mozMovementX" in event) {
                          Browser.mouseMovementX = Browser.mouseMovementY = 0
                      } else {
                          Browser.mouseMovementX = Browser.getMovementX(event);
                          Browser.mouseMovementY = Browser.getMovementY(event)
                      }
                      if (typeof SDL != "undefined") {
                          Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
                          Browser.mouseY = SDL.mouseY + Browser.mouseMovementY
                      } else {
                          Browser.mouseX += Browser.mouseMovementX;
                          Browser.mouseY += Browser.mouseMovementY
                      }
                  } else {
                      if (event.type === "touchstart" || event.type === "touchend" || event.type === "touchmove") {
                          var touch = event.touch;
                          if (touch === undefined) {
                              return
                          }
                          var coords = Browser.calculateMouseCoords(touch.pageX, touch.pageY);
                          if (event.type === "touchstart") {
                              Browser.lastTouches[touch.identifier] = coords;
                              Browser.touches[touch.identifier] = coords
                          } else if (event.type === "touchend" || event.type === "touchmove") {
                              var last = Browser.touches[touch.identifier];
                              last ||= coords;
                              Browser.lastTouches[touch.identifier] = last;
                              Browser.touches[touch.identifier] = coords
                          }
                          return
                      }
                      Browser.setMouseCoords(event.pageX, event.pageY)
                  }
              },
              resizeListeners: [],
              updateResizeListeners() {
                  var canvas = Module["canvas"];
                  Browser.resizeListeners.forEach(listener => listener(canvas.width, canvas.height))
              },
              setCanvasSize(width, height, noUpdates) {
                  var canvas = Module["canvas"];
                  Browser.updateCanvasDimensions(canvas, width, height);
                  if (!noUpdates) Browser.updateResizeListeners()
              },
              windowedWidth: 0,
              windowedHeight: 0,
              setFullscreenCanvasSize() {
                  if (typeof SDL != "undefined") {
                      var flags = HEAPU32[SDL.screen >> 2];
                      flags = flags | 8388608;
                      HEAP32[SDL.screen >> 2] = flags
                  }
                  Browser.updateCanvasDimensions(Module["canvas"]);
                  Browser.updateResizeListeners()
              },
              setWindowedCanvasSize() {
                  if (typeof SDL != "undefined") {
                      var flags = HEAPU32[SDL.screen >> 2];
                      flags = flags & ~8388608;
                      HEAP32[SDL.screen >> 2] = flags
                  }
                  Browser.updateCanvasDimensions(Module["canvas"]);
                  Browser.updateResizeListeners()
              },
              updateCanvasDimensions(canvas, wNative, hNative) {
                  if (wNative && hNative) {
                      canvas.widthNative = wNative;
                      canvas.heightNative = hNative
                  } else {
                      wNative = canvas.widthNative;
                      hNative = canvas.heightNative
                  }
                  var w = wNative;
                  var h = hNative;
                  if (Module["forcedAspectRatio"] && Module["forcedAspectRatio"] > 0) {
                      if (w / h < Module["forcedAspectRatio"]) {
                          w = Math.round(h * Module["forcedAspectRatio"])
                      } else {
                          h = Math.round(w / Module["forcedAspectRatio"])
                      }
                  }
                  if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvas.parentNode && typeof screen != "undefined") {
                      var factor = Math.min(screen.width / w, screen.height / h);
                      w = Math.round(w * factor);
                      h = Math.round(h * factor)
                  }
                  if (Browser.resizeCanvas) {
                      if (canvas.width != w) canvas.width = w;
                      if (canvas.height != h) canvas.height = h;
                      if (typeof canvas.style != "undefined") {
                          canvas.style.removeProperty("width");
                          canvas.style.removeProperty("height")
                      }
                  } else {
                      if (canvas.width != wNative) canvas.width = wNative;
                      if (canvas.height != hNative) canvas.height = hNative;
                      if (typeof canvas.style != "undefined") {
                          if (w != wNative || h != hNative) {
                              canvas.style.setProperty("width", w + "px", "important");
                              canvas.style.setProperty("height", h + "px", "important")
                          } else {
                              canvas.style.removeProperty("width");
                              canvas.style.removeProperty("height")
                          }
                      }
                  }
              }
          };
          var EGL = {
              errorCode: 12288,
              defaultDisplayInitialized: false,
              currentContext: 0,
              currentReadSurface: 0,
              currentDrawSurface: 0,
              contextAttributes: {
                  alpha: false,
                  depth: false,
                  stencil: false,
                  antialias: false
              },
              stringCache: {},
              setErrorCode(code) {
                  EGL.errorCode = code
              },
              chooseConfig(display, attribList, config, config_size, numConfigs) {
                  if (display != 62e3) {
                      EGL.setErrorCode(12296);
                      return 0
                  }
                  if (attribList) {
                      for (;;) {
                          var param = HEAP32[attribList >> 2];
                          if (param == 12321) {
                              var alphaSize = HEAP32[attribList + 4 >> 2];
                              EGL.contextAttributes.alpha = alphaSize > 0
                          } else if (param == 12325) {
                              var depthSize = HEAP32[attribList + 4 >> 2];
                              EGL.contextAttributes.depth = depthSize > 0
                          } else if (param == 12326) {
                              var stencilSize = HEAP32[attribList + 4 >> 2];
                              EGL.contextAttributes.stencil = stencilSize > 0
                          } else if (param == 12337) {
                              var samples = HEAP32[attribList + 4 >> 2];
                              EGL.contextAttributes.antialias = samples > 0
                          } else if (param == 12338) {
                              var samples = HEAP32[attribList + 4 >> 2];
                              EGL.contextAttributes.antialias = samples == 1
                          } else if (param == 12544) {
                              var requestedPriority = HEAP32[attribList + 4 >> 2];
                              EGL.contextAttributes.lowLatency = requestedPriority != 12547
                          } else if (param == 12344) {
                              break
                          }
                          attribList += 8
                      }
                  }
                  if ((!config || !config_size) && !numConfigs) {
                      EGL.setErrorCode(12300);
                      return 0
                  }
                  if (numConfigs) {
                      HEAP32[numConfigs >> 2] = 1
                  }
                  if (config && config_size > 0) {
                      HEAPU32[config >> 2] = 62002
                  }
                  EGL.setErrorCode(12288);
                  return 1
              }
          };
          var _eglBindAPI = api => {
              if (api == 12448) {
                  EGL.setErrorCode(12288);
                  return 1
              }
              EGL.setErrorCode(12300);
              return 0
          };
          var _eglChooseConfig = (display, attrib_list, configs, config_size, numConfigs) => EGL.chooseConfig(display, attrib_list, configs, config_size, numConfigs);
          var webgl_enable_ANGLE_instanced_arrays = ctx => {
              var ext = ctx.getExtension("ANGLE_instanced_arrays");
              if (ext) {
                  ctx["vertexAttribDivisor"] = (index, divisor) => ext["vertexAttribDivisorANGLE"](index, divisor);
                  ctx["drawArraysInstanced"] = (mode, first, count, primcount) => ext["drawArraysInstancedANGLE"](mode, first, count, primcount);
                  ctx["drawElementsInstanced"] = (mode, count, type, indices, primcount) => ext["drawElementsInstancedANGLE"](mode, count, type, indices, primcount);
                  return 1
              }
          };
          var webgl_enable_OES_vertex_array_object = ctx => {
              var ext = ctx.getExtension("OES_vertex_array_object");
              if (ext) {
                  ctx["createVertexArray"] = () => ext["createVertexArrayOES"]();
                  ctx["deleteVertexArray"] = vao => ext["deleteVertexArrayOES"](vao);
                  ctx["bindVertexArray"] = vao => ext["bindVertexArrayOES"](vao);
                  ctx["isVertexArray"] = vao => ext["isVertexArrayOES"](vao);
                  return 1
              }
          };
          var webgl_enable_WEBGL_draw_buffers = ctx => {
              var ext = ctx.getExtension("WEBGL_draw_buffers");
              if (ext) {
                  ctx["drawBuffers"] = (n, bufs) => ext["drawBuffersWEBGL"](n, bufs);
                  return 1
              }
          };
          var webgl_enable_WEBGL_multi_draw = ctx => !!(ctx.multiDrawWebgl = ctx.getExtension("WEBGL_multi_draw"));
          var getEmscriptenSupportedExtensions = function(ctx) {
              var supportedExtensions = ["ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_disjoint_timer_query", "EXT_frag_depth", "EXT_shader_texture_lod", "EXT_sRGB", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_depth_texture", "WEBGL_draw_buffers", "EXT_color_buffer_half_float", "EXT_float_blend", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "KHR_parallel_shader_compile", "OES_texture_float_linear", "WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders", "WEBGL_lose_context", "WEBGL_multi_draw"];
              return (ctx.getSupportedExtensions() || []).filter(ext => supportedExtensions.includes(ext))
          };
          var GL = {
              counter: 1,
              buffers: [],
              programs: [],
              framebuffers: [],
              renderbuffers: [],
              textures: [],
              shaders: [],
              vaos: [],
              contexts: [],
              offscreenCanvases: {},
              queries: [],
              byteSizeByTypeRoot: 5120,
              byteSizeByType: [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8],
              stringCache: {},
              unpackAlignment: 4,
              recordError: function recordError(errorCode) {
                  if (!GL.lastError) {
                      GL.lastError = errorCode
                  }
              },
              getNewId: table => {
                  var ret = GL.counter++;
                  for (var i = table.length; i < ret; i++) {
                      table[i] = null
                  }
                  return ret
              },
              MAX_TEMP_BUFFER_SIZE: 2097152,
              numTempVertexBuffersPerSize: 64,
              log2ceilLookup: i => 32 - Math.clz32(i === 0 ? 0 : i - 1),
              generateTempBuffers: (quads, context) => {
                  var largestIndex = GL.log2ceilLookup(GL.MAX_TEMP_BUFFER_SIZE);
                  context.tempVertexBufferCounters1 = [];
                  context.tempVertexBufferCounters2 = [];
                  context.tempVertexBufferCounters1.length = context.tempVertexBufferCounters2.length = largestIndex + 1;
                  context.tempVertexBuffers1 = [];
                  context.tempVertexBuffers2 = [];
                  context.tempVertexBuffers1.length = context.tempVertexBuffers2.length = largestIndex + 1;
                  context.tempIndexBuffers = [];
                  context.tempIndexBuffers.length = largestIndex + 1;
                  for (var i = 0; i <= largestIndex; ++i) {
                      context.tempIndexBuffers[i] = null;
                      context.tempVertexBufferCounters1[i] = context.tempVertexBufferCounters2[i] = 0;
                      var ringbufferLength = GL.numTempVertexBuffersPerSize;
                      context.tempVertexBuffers1[i] = [];
                      context.tempVertexBuffers2[i] = [];
                      var ringbuffer1 = context.tempVertexBuffers1[i];
                      var ringbuffer2 = context.tempVertexBuffers2[i];
                      ringbuffer1.length = ringbuffer2.length = ringbufferLength;
                      for (var j = 0; j < ringbufferLength; ++j) {
                          ringbuffer1[j] = ringbuffer2[j] = null
                      }
                  }
                  if (quads) {
                      context.tempQuadIndexBuffer = GLctx.createBuffer();
                      context.GLctx.bindBuffer(34963, context.tempQuadIndexBuffer);
                      var numIndexes = GL.MAX_TEMP_BUFFER_SIZE >> 1;
                      var quadIndexes = new Uint16Array(numIndexes);
                      var i = 0,
                          v = 0;
                      while (1) {
                          quadIndexes[i++] = v;
                          if (i >= numIndexes) break;
                          quadIndexes[i++] = v + 1;
                          if (i >= numIndexes) break;
                          quadIndexes[i++] = v + 2;
                          if (i >= numIndexes) break;
                          quadIndexes[i++] = v;
                          if (i >= numIndexes) break;
                          quadIndexes[i++] = v + 2;
                          if (i >= numIndexes) break;
                          quadIndexes[i++] = v + 3;
                          if (i >= numIndexes) break;
                          v += 4
                      }
                      context.GLctx.bufferData(34963, quadIndexes, 35044);
                      context.GLctx.bindBuffer(34963, null)
                  }
              },
              getTempVertexBuffer: function getTempVertexBuffer(sizeBytes) {
                  var idx = GL.log2ceilLookup(sizeBytes);
                  var ringbuffer = GL.currentContext.tempVertexBuffers1[idx];
                  var nextFreeBufferIndex = GL.currentContext.tempVertexBufferCounters1[idx];
                  GL.currentContext.tempVertexBufferCounters1[idx] = GL.currentContext.tempVertexBufferCounters1[idx] + 1 & GL.numTempVertexBuffersPerSize - 1;
                  var vbo = ringbuffer[nextFreeBufferIndex];
                  if (vbo) {
                      return vbo
                  }
                  var prevVBO = GLctx.getParameter(34964);
                  ringbuffer[nextFreeBufferIndex] = GLctx.createBuffer();
                  GLctx.bindBuffer(34962, ringbuffer[nextFreeBufferIndex]);
                  GLctx.bufferData(34962, 1 << idx, 35048);
                  GLctx.bindBuffer(34962, prevVBO);
                  return ringbuffer[nextFreeBufferIndex]
              },
              getTempIndexBuffer: function getTempIndexBuffer(sizeBytes) {
                  var idx = GL.log2ceilLookup(sizeBytes);
                  var ibo = GL.currentContext.tempIndexBuffers[idx];
                  if (ibo) {
                      return ibo
                  }
                  var prevIBO = GLctx.getParameter(34965);
                  GL.currentContext.tempIndexBuffers[idx] = GLctx.createBuffer();
                  GLctx.bindBuffer(34963, GL.currentContext.tempIndexBuffers[idx]);
                  GLctx.bufferData(34963, 1 << idx, 35048);
                  GLctx.bindBuffer(34963, prevIBO);
                  return GL.currentContext.tempIndexBuffers[idx]
              },
              newRenderingFrameStarted: function newRenderingFrameStarted() {
                  if (!GL.currentContext) {
                      return
                  }
                  var vb = GL.currentContext.tempVertexBuffers1;
                  GL.currentContext.tempVertexBuffers1 = GL.currentContext.tempVertexBuffers2;
                  GL.currentContext.tempVertexBuffers2 = vb;
                  vb = GL.currentContext.tempVertexBufferCounters1;
                  GL.currentContext.tempVertexBufferCounters1 = GL.currentContext.tempVertexBufferCounters2;
                  GL.currentContext.tempVertexBufferCounters2 = vb;
                  var largestIndex = GL.log2ceilLookup(GL.MAX_TEMP_BUFFER_SIZE);
                  for (var i = 0; i <= largestIndex; ++i) {
                      GL.currentContext.tempVertexBufferCounters1[i] = 0
                  }
              },
              getSource: (shader, count, string, length) => {
                  var source = "";
                  for (var i = 0; i < count; ++i) {
                      var len = length ? HEAPU32[length + i * 4 >> 2] : undefined;
                      source += UTF8ToString(HEAPU32[string + i * 4 >> 2], len)
                  }
                  return source
              },
              calcBufLength: function calcBufLength(size, type, stride, count) {
                  if (stride > 0) {
                      return count * stride
                  }
                  var typeSize = GL.byteSizeByType[type - GL.byteSizeByTypeRoot];
                  return size * typeSize * count
              },
              usedTempBuffers: [],
              preDrawHandleClientVertexAttribBindings: function preDrawHandleClientVertexAttribBindings(count) {
                  GL.resetBufferBinding = false;
                  for (var i = 0; i < GL.currentContext.maxVertexAttribs; ++i) {
                      var cb = GL.currentContext.clientBuffers[i];
                      if (!cb.clientside || !cb.enabled) continue;
                      GL.resetBufferBinding = true;
                      var size = GL.calcBufLength(cb.size, cb.type, cb.stride, count);
                      var buf = GL.getTempVertexBuffer(size);
                      GLctx.bindBuffer(34962, buf);
                      GLctx.bufferSubData(34962, 0, HEAPU8.subarray(cb.ptr, cb.ptr + size));
                      cb.vertexAttribPointerAdaptor.call(GLctx, i, cb.size, cb.type, cb.normalized, cb.stride, 0)
                  }
              },
              postDrawHandleClientVertexAttribBindings: function postDrawHandleClientVertexAttribBindings() {
                  if (GL.resetBufferBinding) {
                      GLctx.bindBuffer(34962, GL.buffers[GLctx.currentArrayBufferBinding])
                  }
              },
              createContext: (canvas, webGLContextAttributes) => {
                  if (!canvas.getContextSafariWebGL2Fixed) {
                      canvas.getContextSafariWebGL2Fixed = canvas.getContext;

                      function fixedGetContext(ver, attrs) {
                          var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
                          return ver == "webgl" == gl instanceof WebGLRenderingContext ? gl : null
                      }
                      canvas.getContext = fixedGetContext
                  }
                  var ctx = canvas.getContext("webgl", webGLContextAttributes);
                  if (!ctx) return 0;
                  var handle = GL.registerContext(ctx, webGLContextAttributes);
                  return handle
              },
              registerContext: (ctx, webGLContextAttributes) => {
                  var handle = GL.getNewId(GL.contexts);
                  var context = {
                      handle: handle,
                      attributes: webGLContextAttributes,
                      version: webGLContextAttributes.majorVersion,
                      GLctx: ctx
                  };
                  if (ctx.canvas) ctx.canvas.GLctxObject = context;
                  GL.contexts[handle] = context;
                  if (typeof webGLContextAttributes.enableExtensionsByDefault == "undefined" || webGLContextAttributes.enableExtensionsByDefault) {
                      GL.initExtensions(context)
                  }
                  context.maxVertexAttribs = context.GLctx.getParameter(34921);
                  context.clientBuffers = [];
                  for (var i = 0; i < context.maxVertexAttribs; i++) {
                      context.clientBuffers[i] = {
                          enabled: false,
                          clientside: false,
                          size: 0,
                          type: 0,
                          normalized: 0,
                          stride: 0,
                          ptr: 0,
                          vertexAttribPointerAdaptor: null
                      }
                  }
                  GL.generateTempBuffers(false, context);
                  return handle
              },
              makeContextCurrent: contextHandle => {
                  GL.currentContext = GL.contexts[contextHandle];
                  Module.ctx = GLctx = GL.currentContext?.GLctx;
                  return !(contextHandle && !GLctx)
              },
              getContext: contextHandle => GL.contexts[contextHandle],
              deleteContext: contextHandle => {
                  if (GL.currentContext === GL.contexts[contextHandle]) {
                      GL.currentContext = null
                  }
                  if (typeof JSEvents == "object") {
                      JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas)
                  }
                  if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) {
                      GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined
                  }
                  GL.contexts[contextHandle] = null
              },
              initExtensions: context => {
                  context ||= GL.currentContext;
                  if (context.initExtensionsDone) return;
                  context.initExtensionsDone = true;
                  var GLctx = context.GLctx;
                  webgl_enable_ANGLE_instanced_arrays(GLctx);
                  webgl_enable_OES_vertex_array_object(GLctx);
                  webgl_enable_WEBGL_draw_buffers(GLctx);
                  {
                      GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query")
                  }
                  webgl_enable_WEBGL_multi_draw(GLctx);
                  getEmscriptenSupportedExtensions(GLctx).forEach(ext => {
                      if (!ext.includes("lose_context") && !ext.includes("debug")) {
                          GLctx.getExtension(ext)
                      }
                  })
              }
          };
          var _eglCreateContext = (display, config, hmm, contextAttribs) => {
              if (display != 62e3) {
                  EGL.setErrorCode(12296);
                  return 0
              }
              var glesContextVersion = 1;
              for (;;) {
                  var param = HEAP32[contextAttribs >> 2];
                  if (param == 12440) {
                      glesContextVersion = HEAP32[contextAttribs + 4 >> 2]
                  } else if (param == 12344) {
                      break
                  } else {
                      EGL.setErrorCode(12292);
                      return 0
                  }
                  contextAttribs += 8
              }
              if (glesContextVersion != 2) {
                  EGL.setErrorCode(12293);
                  return 0
              }
              EGL.contextAttributes.majorVersion = glesContextVersion - 1;
              EGL.contextAttributes.minorVersion = 0;
              EGL.context = GL.createContext(Module["canvas"], EGL.contextAttributes);
              if (EGL.context != 0) {
                  EGL.setErrorCode(12288);
                  GL.makeContextCurrent(EGL.context);
                  Module.useWebGL = true;
                  Browser.moduleContextCreatedCallbacks.forEach(function(callback) {
                      callback()
                  });
                  GL.makeContextCurrent(null);
                  return 62004
              } else {
                  EGL.setErrorCode(12297);
                  return 0
              }
          };
          var _eglCreateWindowSurface = (display, config, win, attrib_list) => {
              if (display != 62e3) {
                  EGL.setErrorCode(12296);
                  return 0
              }
              if (config != 62002) {
                  EGL.setErrorCode(12293);
                  return 0
              }
              EGL.setErrorCode(12288);
              return 62006
          };
          var _eglDestroyContext = (display, context) => {
              if (display != 62e3) {
                  EGL.setErrorCode(12296);
                  return 0
              }
              if (context != 62004) {
                  EGL.setErrorCode(12294);
                  return 0
              }
              GL.deleteContext(EGL.context);
              EGL.setErrorCode(12288);
              if (EGL.currentContext == context) {
                  EGL.currentContext = 0
              }
              return 1
          };
          var _eglDestroySurface = (display, surface) => {
              if (display != 62e3) {
                  EGL.setErrorCode(12296);
                  return 0
              }
              if (surface != 62006) {
                  EGL.setErrorCode(12301);
                  return 1
              }
              if (EGL.currentReadSurface == surface) {
                  EGL.currentReadSurface = 0
              }
              if (EGL.currentDrawSurface == surface) {
                  EGL.currentDrawSurface = 0
              }
              EGL.setErrorCode(12288);
              return 1
          };
          var _eglGetConfigAttrib = (display, config, attribute, value) => {
              if (display != 62e3) {
                  EGL.setErrorCode(12296);
                  return 0
              }
              if (config != 62002) {
                  EGL.setErrorCode(12293);
                  return 0
              }
              if (!value) {
                  EGL.setErrorCode(12300);
                  return 0
              }
              EGL.setErrorCode(12288);
              switch (attribute) {
                  case 12320:
                      HEAP32[value >> 2] = EGL.contextAttributes.alpha ? 32 : 24;
                      return 1;
                  case 12321:
                      HEAP32[value >> 2] = EGL.contextAttributes.alpha ? 8 : 0;
                      return 1;
                  case 12322:
                      HEAP32[value >> 2] = 8;
                      return 1;
                  case 12323:
                      HEAP32[value >> 2] = 8;
                      return 1;
                  case 12324:
                      HEAP32[value >> 2] = 8;
                      return 1;
                  case 12325:
                      HEAP32[value >> 2] = EGL.contextAttributes.depth ? 24 : 0;
                      return 1;
                  case 12326:
                      HEAP32[value >> 2] = EGL.contextAttributes.stencil ? 8 : 0;
                      return 1;
                  case 12327:
                      HEAP32[value >> 2] = 12344;
                      return 1;
                  case 12328:
                      HEAP32[value >> 2] = 62002;
                      return 1;
                  case 12329:
                      HEAP32[value >> 2] = 0;
                      return 1;
                  case 12330:
                      HEAP32[value >> 2] = 4096;
                      return 1;
                  case 12331:
                      HEAP32[value >> 2] = 16777216;
                      return 1;
                  case 12332:
                      HEAP32[value >> 2] = 4096;
                      return 1;
                  case 12333:
                      HEAP32[value >> 2] = 0;
                      return 1;
                  case 12334:
                      HEAP32[value >> 2] = 0;
                      return 1;
                  case 12335:
                      HEAP32[value >> 2] = 12344;
                      return 1;
                  case 12337:
                      HEAP32[value >> 2] = EGL.contextAttributes.antialias ? 4 : 0;
                      return 1;
                  case 12338:
                      HEAP32[value >> 2] = EGL.contextAttributes.antialias ? 1 : 0;
                      return 1;
                  case 12339:
                      HEAP32[value >> 2] = 4;
                      return 1;
                  case 12340:
                      HEAP32[value >> 2] = 12344;
                      return 1;
                  case 12341:
                  case 12342:
                  case 12343:
                      HEAP32[value >> 2] = -1;
                      return 1;
                  case 12345:
                  case 12346:
                      HEAP32[value >> 2] = 0;
                      return 1;
                  case 12347:
                      HEAP32[value >> 2] = 0;
                      return 1;
                  case 12348:
                      HEAP32[value >> 2] = 1;
                      return 1;
                  case 12349:
                  case 12350:
                      HEAP32[value >> 2] = 0;
                      return 1;
                  case 12351:
                      HEAP32[value >> 2] = 12430;
                      return 1;
                  case 12352:
                      HEAP32[value >> 2] = 4;
                      return 1;
                  case 12354:
                      HEAP32[value >> 2] = 0;
                      return 1;
                  default:
                      EGL.setErrorCode(12292);
                      return 0
              }
          };
          var _eglGetDisplay = nativeDisplayType => {
              EGL.setErrorCode(12288);
              if (nativeDisplayType != 0 && nativeDisplayType != 1) {
                  return 0
              }
              return 62e3
          };
          var _eglGetError = () => EGL.errorCode;
          var _eglInitialize = (display, majorVersion, minorVersion) => {
              if (display != 62e3) {
                  EGL.setErrorCode(12296);
                  return 0
              }
              if (majorVersion) {
                  HEAP32[majorVersion >> 2] = 1
              }
              if (minorVersion) {
                  HEAP32[minorVersion >> 2] = 4
              }
              EGL.defaultDisplayInitialized = true;
              EGL.setErrorCode(12288);
              return 1
          };
          var _eglMakeCurrent = (display, draw, read, context) => {
              if (display != 62e3) {
                  EGL.setErrorCode(12296);
                  return 0
              }
              if (context != 0 && context != 62004) {
                  EGL.setErrorCode(12294);
                  return 0
              }
              if (read != 0 && read != 62006 || draw != 0 && draw != 62006) {
                  EGL.setErrorCode(12301);
                  return 0
              }
              GL.makeContextCurrent(context ? EGL.context : null);
              EGL.currentContext = context;
              EGL.currentDrawSurface = draw;
              EGL.currentReadSurface = read;
              EGL.setErrorCode(12288);
              return 1
          };
          var _eglQueryString = (display, name) => {
              if (display != 62e3) {
                  EGL.setErrorCode(12296);
                  return 0
              }
              EGL.setErrorCode(12288);
              if (EGL.stringCache[name]) return EGL.stringCache[name];
              var ret;
              switch (name) {
                  case 12371:
                      ret = stringToNewUTF8("Emscripten");
                      break;
                  case 12372:
                      ret = stringToNewUTF8("1.4 Emscripten EGL");
                      break;
                  case 12373:
                      ret = stringToNewUTF8("");
                      break;
                  case 12429:
                      ret = stringToNewUTF8("OpenGL_ES");
                      break;
                  default:
                      EGL.setErrorCode(12300);
                      return 0
              }
              EGL.stringCache[name] = ret;
              return ret
          };
          var _eglSwapBuffers = (dpy, surface) => {
              if (!EGL.defaultDisplayInitialized) {
                  EGL.setErrorCode(12289)
              } else if (!Module.ctx) {
                  EGL.setErrorCode(12290)
              } else if (Module.ctx.isContextLost()) {
                  EGL.setErrorCode(12302)
              } else {
                  EGL.setErrorCode(12288);
                  return 1
              }
              return 0
          };
          var _eglSwapInterval = (display, interval) => {
              if (display != 62e3) {
                  EGL.setErrorCode(12296);
                  return 0
              }
              if (interval == 0) _emscripten_set_main_loop_timing(0, 0);
              else _emscripten_set_main_loop_timing(1, interval);
              EGL.setErrorCode(12288);
              return 1
          };
          var _eglTerminate = display => {
              if (display != 62e3) {
                  EGL.setErrorCode(12296);
                  return 0
              }
              EGL.currentContext = 0;
              EGL.currentReadSurface = 0;
              EGL.currentDrawSurface = 0;
              EGL.defaultDisplayInitialized = false;
              EGL.setErrorCode(12288);
              return 1
          };
          var _eglWaitClient = () => {
              EGL.setErrorCode(12288);
              return 1
          };
          var _eglWaitGL = _eglWaitClient;
          var _eglWaitNative = nativeEngineId => {
              EGL.setErrorCode(12288);
              return 1
          };
          var readEmAsmArgsArray = [];
          var readEmAsmArgs = (sigPtr, buf) => {
              readEmAsmArgsArray.length = 0;
              var ch;
              while (ch = HEAPU8[sigPtr++]) {
                  var wide = ch != 105;
                  wide &= ch != 112;
                  buf += wide && buf % 8 ? 4 : 0;
                  readEmAsmArgsArray.push(ch == 112 ? HEAPU32[buf >> 2] : ch == 105 ? HEAP32[buf >> 2] : HEAPF64[buf >> 3]);
                  buf += wide ? 8 : 4
              }
              return readEmAsmArgsArray
          };
          var runEmAsmFunction = (code, sigPtr, argbuf) => {
              var args = readEmAsmArgs(sigPtr, argbuf);
              return ASM_CONSTS[code].apply(null, args)
          };
          var _emscripten_asm_const_int = (code, sigPtr, argbuf) => runEmAsmFunction(code, sigPtr, argbuf);
          var runMainThreadEmAsm = (code, sigPtr, argbuf, sync) => {
              var args = readEmAsmArgs(sigPtr, argbuf);
              return ASM_CONSTS[code].apply(null, args)
          };
          var _emscripten_asm_const_int_sync_on_main_thread = (code, sigPtr, argbuf) => runMainThreadEmAsm(code, sigPtr, argbuf, 1);
          var _emscripten_date_now = () => Date.now();
          var withStackSave = f => {
              var stack = stackSave();
              var ret = f();
              stackRestore(stack);
              return ret
          };
          var JSEvents = {
              removeAllEventListeners() {
                  while (JSEvents.eventHandlers.length) {
                      JSEvents._removeHandler(JSEvents.eventHandlers.length - 1)
                  }
                  JSEvents.deferredCalls = []
              },
              inEventHandler: 0,
              deferredCalls: [],
              deferCall(targetFunction, precedence, argsList) {
                  function arraysHaveEqualContent(arrA, arrB) {
                      if (arrA.length != arrB.length) return false;
                      for (var i in arrA) {
                          if (arrA[i] != arrB[i]) return false
                      }
                      return true
                  }
                  for (var i in JSEvents.deferredCalls) {
                      var call = JSEvents.deferredCalls[i];
                      if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
                          return
                      }
                  }
                  JSEvents.deferredCalls.push({
                      targetFunction: targetFunction,
                      precedence: precedence,
                      argsList: argsList
                  });
                  JSEvents.deferredCalls.sort((x, y) => x.precedence < y.precedence)
              },
              removeDeferredCalls(targetFunction) {
                  for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
                      if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {
                          JSEvents.deferredCalls.splice(i, 1);
                          --i
                      }
                  }
              },
              canPerformEventHandlerRequests() {
                  if (navigator.userActivation) {
                      return navigator.userActivation.isActive
                  }
                  return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls
              },
              runDeferredCalls() {
                  if (!JSEvents.canPerformEventHandlerRequests()) {
                      return
                  }
                  for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
                      var call = JSEvents.deferredCalls[i];
                      JSEvents.deferredCalls.splice(i, 1);
                      --i;
                      call.targetFunction.apply(null, call.argsList)
                  }
              },
              eventHandlers: [],
              removeAllHandlersOnTarget: (target, eventTypeString) => {
                  for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
                      if (JSEvents.eventHandlers[i].target == target && (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
                          JSEvents._removeHandler(i--)
                      }
                  }
              },
              _removeHandler(i) {
                  var h = JSEvents.eventHandlers[i];
                  h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
                  JSEvents.eventHandlers.splice(i, 1)
              },
              registerOrRemoveHandler(eventHandler) {
                  if (!eventHandler.target) {
                      return -4
                  }
                  if (eventHandler.callbackfunc) {
                      eventHandler.eventListenerFunc = function(event) {
                          ++JSEvents.inEventHandler;
                          JSEvents.currentEventHandler = eventHandler;
                          JSEvents.runDeferredCalls();
                          eventHandler.handlerFunc(event);
                          JSEvents.runDeferredCalls();
                          --JSEvents.inEventHandler
                      };
                      eventHandler.target.addEventListener(eventHandler.eventTypeString, eventHandler.eventListenerFunc, eventHandler.useCapture);
                      JSEvents.eventHandlers.push(eventHandler)
                  } else {
                      for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
                          if (JSEvents.eventHandlers[i].target == eventHandler.target && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
                              JSEvents._removeHandler(i--)
                          }
                      }
                  }
                  return 0
              },
              getNodeNameForTarget(target) {
                  if (!target) return "";
                  if (target == window) return "#window";
                  if (target == screen) return "#screen";
                  return target?.nodeName || ""
              },
              fullscreenEnabled() {
                  return document.fullscreenEnabled || document.webkitFullscreenEnabled
              }
          };
          var currentFullscreenStrategy = {};
          var maybeCStringToJsString = cString => cString > 2 ? UTF8ToString(cString) : cString;
          var specialHTMLTargets = [0, typeof document != "undefined" ? document : 0, typeof window != "undefined" ? window : 0];
          var findEventTarget = target => {
              target = maybeCStringToJsString(target);
              var domElement = specialHTMLTargets[target] || (typeof document != "undefined" ? document.querySelector(target) : undefined);
              return domElement
          };
          var findCanvasEventTarget = findEventTarget;
          var _emscripten_get_canvas_element_size = (target, width, height) => {
              var canvas = findCanvasEventTarget(target);
              if (!canvas) return -4;
              HEAP32[width >> 2] = canvas.width;
              HEAP32[height >> 2] = canvas.height
          };
          var stringToUTF8OnStack = str => {
              var size = lengthBytesUTF8(str) + 1;
              var ret = stackAlloc(size);
              stringToUTF8(str, ret, size);
              return ret
          };
          var getCanvasElementSize = target => withStackSave(() => {
              var w = stackAlloc(8);
              var h = w + 4;
              var targetInt = stringToUTF8OnStack(target.id);
              var ret = _emscripten_get_canvas_element_size(targetInt, w, h);
              var size = [HEAP32[w >> 2], HEAP32[h >> 2]];
              return size
          });
          var _emscripten_set_canvas_element_size = (target, width, height) => {
              var canvas = findCanvasEventTarget(target);
              if (!canvas) return -4;
              canvas.width = width;
              canvas.height = height;
              return 0
          };
          var setCanvasElementSize = (target, width, height) => {
              if (!target.controlTransferredOffscreen) {
                  target.width = width;
                  target.height = height
              } else {
                  withStackSave(() => {
                      var targetInt = stringToUTF8OnStack(target.id);
                      _emscripten_set_canvas_element_size(targetInt, width, height)
                  })
              }
          };
          var registerRestoreOldStyle = canvas => {
              var canvasSize = getCanvasElementSize(canvas);
              var oldWidth = canvasSize[0];
              var oldHeight = canvasSize[1];
              var oldCssWidth = canvas.style.width;
              var oldCssHeight = canvas.style.height;
              var oldBackgroundColor = canvas.style.backgroundColor;
              var oldDocumentBackgroundColor = document.body.style.backgroundColor;
              var oldPaddingLeft = canvas.style.paddingLeft;
              var oldPaddingRight = canvas.style.paddingRight;
              var oldPaddingTop = canvas.style.paddingTop;
              var oldPaddingBottom = canvas.style.paddingBottom;
              var oldMarginLeft = canvas.style.marginLeft;
              var oldMarginRight = canvas.style.marginRight;
              var oldMarginTop = canvas.style.marginTop;
              var oldMarginBottom = canvas.style.marginBottom;
              var oldDocumentBodyMargin = document.body.style.margin;
              var oldDocumentOverflow = document.documentElement.style.overflow;
              var oldDocumentScroll = document.body.scroll;
              var oldImageRendering = canvas.style.imageRendering;

              function restoreOldStyle() {
                  var fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
                  if (!fullscreenElement) {
                      document.removeEventListener("fullscreenchange", restoreOldStyle);
                      document.removeEventListener("webkitfullscreenchange", restoreOldStyle);
                      setCanvasElementSize(canvas, oldWidth, oldHeight);
                      canvas.style.width = oldCssWidth;
                      canvas.style.height = oldCssHeight;
                      canvas.style.backgroundColor = oldBackgroundColor;
                      if (!oldDocumentBackgroundColor) document.body.style.backgroundColor = "white";
                      document.body.style.backgroundColor = oldDocumentBackgroundColor;
                      canvas.style.paddingLeft = oldPaddingLeft;
                      canvas.style.paddingRight = oldPaddingRight;
                      canvas.style.paddingTop = oldPaddingTop;
                      canvas.style.paddingBottom = oldPaddingBottom;
                      canvas.style.marginLeft = oldMarginLeft;
                      canvas.style.marginRight = oldMarginRight;
                      canvas.style.marginTop = oldMarginTop;
                      canvas.style.marginBottom = oldMarginBottom;
                      document.body.style.margin = oldDocumentBodyMargin;
                      document.documentElement.style.overflow = oldDocumentOverflow;
                      document.body.scroll = oldDocumentScroll;
                      canvas.style.imageRendering = oldImageRendering;
                      if (canvas.GLctxObject) canvas.GLctxObject.GLctx.viewport(0, 0, oldWidth, oldHeight);
                      if (currentFullscreenStrategy.canvasResizedCallback) {
                          getWasmTableEntry(currentFullscreenStrategy.canvasResizedCallback)(37, 0, currentFullscreenStrategy.canvasResizedCallbackUserData)
                      }
                  }
              }
              document.addEventListener("fullscreenchange", restoreOldStyle);
              document.addEventListener("webkitfullscreenchange", restoreOldStyle);
              return restoreOldStyle
          };
          var setLetterbox = (element, topBottom, leftRight) => {
              element.style.paddingLeft = element.style.paddingRight = leftRight + "px";
              element.style.paddingTop = element.style.paddingBottom = topBottom + "px"
          };
          var getBoundingClientRect = e => specialHTMLTargets.indexOf(e) < 0 ? e.getBoundingClientRect() : {
              "left": 0,
              "top": 0
          };
          var JSEvents_resizeCanvasForFullscreen = (target, strategy) => {
              var restoreOldStyle = registerRestoreOldStyle(target);
              var cssWidth = strategy.softFullscreen ? innerWidth : screen.width;
              var cssHeight = strategy.softFullscreen ? innerHeight : screen.height;
              var rect = getBoundingClientRect(target);
              var windowedCssWidth = rect.width;
              var windowedCssHeight = rect.height;
              var canvasSize = getCanvasElementSize(target);
              var windowedRttWidth = canvasSize[0];
              var windowedRttHeight = canvasSize[1];
              if (strategy.scaleMode == 3) {
                  setLetterbox(target, (cssHeight - windowedCssHeight) / 2, (cssWidth - windowedCssWidth) / 2);
                  cssWidth = windowedCssWidth;
                  cssHeight = windowedCssHeight
              } else if (strategy.scaleMode == 2) {
                  if (cssWidth * windowedRttHeight < windowedRttWidth * cssHeight) {
                      var desiredCssHeight = windowedRttHeight * cssWidth / windowedRttWidth;
                      setLetterbox(target, (cssHeight - desiredCssHeight) / 2, 0);
                      cssHeight = desiredCssHeight
                  } else {
                      var desiredCssWidth = windowedRttWidth * cssHeight / windowedRttHeight;
                      setLetterbox(target, 0, (cssWidth - desiredCssWidth) / 2);
                      cssWidth = desiredCssWidth
                  }
              }
              if (!target.style.backgroundColor) target.style.backgroundColor = "black";
              if (!document.body.style.backgroundColor) document.body.style.backgroundColor = "black";
              target.style.width = cssWidth + "px";
              target.style.height = cssHeight + "px";
              if (strategy.filteringMode == 1) {
                  target.style.imageRendering = "optimizeSpeed";
                  target.style.imageRendering = "-moz-crisp-edges";
                  target.style.imageRendering = "-o-crisp-edges";
                  target.style.imageRendering = "-webkit-optimize-contrast";
                  target.style.imageRendering = "optimize-contrast";
                  target.style.imageRendering = "crisp-edges";
                  target.style.imageRendering = "pixelated"
              }
              var dpiScale = strategy.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
              if (strategy.canvasResolutionScaleMode != 0) {
                  var newWidth = cssWidth * dpiScale | 0;
                  var newHeight = cssHeight * dpiScale | 0;
                  setCanvasElementSize(target, newWidth, newHeight);
                  if (target.GLctxObject) target.GLctxObject.GLctx.viewport(0, 0, newWidth, newHeight)
              }
              return restoreOldStyle
          };
          var JSEvents_requestFullscreen = (target, strategy) => {
              if (strategy.scaleMode != 0 || strategy.canvasResolutionScaleMode != 0) {
                  JSEvents_resizeCanvasForFullscreen(target, strategy)
              }
              if (target.requestFullscreen) {
                  target.requestFullscreen()
              } else if (target.webkitRequestFullscreen) {
                  target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
              } else {
                  return JSEvents.fullscreenEnabled() ? -3 : -1
              }
              currentFullscreenStrategy = strategy;
              if (strategy.canvasResizedCallback) {
                  getWasmTableEntry(strategy.canvasResizedCallback)(37, 0, strategy.canvasResizedCallbackUserData)
              }
              return 0
          };
          var _emscripten_exit_fullscreen = () => {
              if (!JSEvents.fullscreenEnabled()) return -1;
              JSEvents.removeDeferredCalls(JSEvents_requestFullscreen);
              var d = specialHTMLTargets[1];
              if (d.exitFullscreen) {
                  d.fullscreenElement && d.exitFullscreen()
              } else if (d.webkitExitFullscreen) {
                  d.webkitFullscreenElement && d.webkitExitFullscreen()
              } else {
                  return -1
              }
              return 0
          };
          var requestPointerLock = target => {
              if (target.requestPointerLock) {
                  target.requestPointerLock()
              } else {
                  if (document.body.requestPointerLock) {
                      return -3
                  }
                  return -1
              }
              return 0
          };
          var _emscripten_exit_pointerlock = () => {
              JSEvents.removeDeferredCalls(requestPointerLock);
              if (document.exitPointerLock) {
                  document.exitPointerLock()
              } else {
                  return -1
              }
              return 0
          };
          var _emscripten_get_device_pixel_ratio = () => devicePixelRatio;
          var _emscripten_get_element_css_size = (target, width, height) => {
              target = findEventTarget(target);
              if (!target) return -4;
              var rect = getBoundingClientRect(target);
              HEAPF64[width >> 3] = rect.width;
              HEAPF64[height >> 3] = rect.height;
              return 0
          };
          var fillGamepadEventData = (eventStruct, e) => {
              HEAPF64[eventStruct >> 3] = e.timestamp;
              for (var i = 0; i < e.axes.length; ++i) {
                  HEAPF64[eventStruct + i * 8 + 16 >> 3] = e.axes[i]
              }
              for (var i = 0; i < e.buttons.length; ++i) {
                  if (typeof e.buttons[i] == "object") {
                      HEAPF64[eventStruct + i * 8 + 528 >> 3] = e.buttons[i].value
                  } else {
                      HEAPF64[eventStruct + i * 8 + 528 >> 3] = e.buttons[i]
                  }
              }
              for (var i = 0; i < e.buttons.length; ++i) {
                  if (typeof e.buttons[i] == "object") {
                      HEAP32[eventStruct + i * 4 + 1040 >> 2] = e.buttons[i].pressed
                  } else {
                      HEAP32[eventStruct + i * 4 + 1040 >> 2] = e.buttons[i] == 1
                  }
              }
              HEAP32[eventStruct + 1296 >> 2] = e.connected;
              HEAP32[eventStruct + 1300 >> 2] = e.index;
              HEAP32[eventStruct + 8 >> 2] = e.axes.length;
              HEAP32[eventStruct + 12 >> 2] = e.buttons.length;
              stringToUTF8(e.id, eventStruct + 1304, 64);
              stringToUTF8(e.mapping, eventStruct + 1368, 64)
          };
          var _emscripten_get_gamepad_status = (index, gamepadState) => {
              if (index < 0 || index >= JSEvents.lastGamepadState.length) return -5;
              if (!JSEvents.lastGamepadState[index]) return -7;
              fillGamepadEventData(gamepadState, JSEvents.lastGamepadState[index]);
              return 0
          };
          var _emscripten_get_main_loop_timing = (mode, value) => {
              if (mode) HEAP32[mode >> 2] = Browser.mainLoop.timingMode;
              if (value) HEAP32[value >> 2] = Browser.mainLoop.timingValue
          };
          var _emscripten_get_num_gamepads = () => JSEvents.lastGamepadState.length;
          var _emscripten_get_screen_size = (width, height) => {
              HEAP32[width >> 2] = screen.width;
              HEAP32[height >> 2] = screen.height
          };

          function _glActiveTexture(x0) {
              GLctx.activeTexture(x0)
          }
          var _emscripten_glActiveTexture = _glActiveTexture;
          var _glAttachShader = (program, shader) => {
              GLctx.attachShader(GL.programs[program], GL.shaders[shader])
          };
          var _emscripten_glAttachShader = _glAttachShader;
          var _glBeginQueryEXT = (target, id) => {
              GLctx.disjointTimerQueryExt["beginQueryEXT"](target, GL.queries[id])
          };
          var _emscripten_glBeginQueryEXT = _glBeginQueryEXT;
          var _glBindAttribLocation = (program, index, name) => {
              GLctx.bindAttribLocation(GL.programs[program], index, UTF8ToString(name))
          };
          var _emscripten_glBindAttribLocation = _glBindAttribLocation;
          var _glBindBuffer = (target, buffer) => {
              if (target == 34962) {
                  GLctx.currentArrayBufferBinding = buffer
              } else if (target == 34963) {
                  GLctx.currentElementArrayBufferBinding = buffer
              }
              GLctx.bindBuffer(target, GL.buffers[buffer])
          };
          var _emscripten_glBindBuffer = _glBindBuffer;
          var _glBindFramebuffer = (target, framebuffer) => {
              GLctx.bindFramebuffer(target, GL.framebuffers[framebuffer])
          };
          var _emscripten_glBindFramebuffer = _glBindFramebuffer;
          var _glBindRenderbuffer = (target, renderbuffer) => {
              GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer])
          };
          var _emscripten_glBindRenderbuffer = _glBindRenderbuffer;
          var _glBindTexture = (target, texture) => {
              GLctx.bindTexture(target, GL.textures[texture])
          };
          var _emscripten_glBindTexture = _glBindTexture;
          var _glBindVertexArray = vao => {
              GLctx.bindVertexArray(GL.vaos[vao]);
              var ibo = GLctx.getParameter(34965);
              GLctx.currentElementArrayBufferBinding = ibo ? ibo.name | 0 : 0
          };
          var _glBindVertexArrayOES = _glBindVertexArray;
          var _emscripten_glBindVertexArrayOES = _glBindVertexArrayOES;

          function _glBlendColor(x0, x1, x2, x3) {
              GLctx.blendColor(x0, x1, x2, x3)
          }
          var _emscripten_glBlendColor = _glBlendColor;

          function _glBlendEquation(x0) {
              GLctx.blendEquation(x0)
          }
          var _emscripten_glBlendEquation = _glBlendEquation;

          function _glBlendEquationSeparate(x0, x1) {
              GLctx.blendEquationSeparate(x0, x1)
          }
          var _emscripten_glBlendEquationSeparate = _glBlendEquationSeparate;

          function _glBlendFunc(x0, x1) {
              GLctx.blendFunc(x0, x1)
          }
          var _emscripten_glBlendFunc = _glBlendFunc;

          function _glBlendFuncSeparate(x0, x1, x2, x3) {
              GLctx.blendFuncSeparate(x0, x1, x2, x3)
          }
          var _emscripten_glBlendFuncSeparate = _glBlendFuncSeparate;
          var _glBufferData = (target, size, data, usage) => {
              GLctx.bufferData(target, data ? HEAPU8.subarray(data, data + size) : size, usage)
          };
          var _emscripten_glBufferData = _glBufferData;
          var _glBufferSubData = (target, offset, size, data) => {
              GLctx.bufferSubData(target, offset, HEAPU8.subarray(data, data + size))
          };
          var _emscripten_glBufferSubData = _glBufferSubData;

          function _glCheckFramebufferStatus(x0) {
              return GLctx.checkFramebufferStatus(x0)
          }
          var _emscripten_glCheckFramebufferStatus = _glCheckFramebufferStatus;

          function _glClear(x0) {
              GLctx.clear(x0)
          }
          var _emscripten_glClear = _glClear;

          function _glClearColor(x0, x1, x2, x3) {
              GLctx.clearColor(x0, x1, x2, x3)
          }
          var _emscripten_glClearColor = _glClearColor;

          function _glClearDepthf(x0) {
              GLctx.clearDepth(x0)
          }
          var _emscripten_glClearDepthf = _glClearDepthf;

          function _glClearStencil(x0) {
              GLctx.clearStencil(x0)
          }
          var _emscripten_glClearStencil = _glClearStencil;
          var _glColorMask = (red, green, blue, alpha) => {
              GLctx.colorMask(!!red, !!green, !!blue, !!alpha)
          };
          var _emscripten_glColorMask = _glColorMask;
          var _glCompileShader = shader => {
              GLctx.compileShader(GL.shaders[shader])
          };
          var _emscripten_glCompileShader = _glCompileShader;
          var _glCompressedTexImage2D = (target, level, internalFormat, width, height, border, imageSize, data) => {
              GLctx.compressedTexImage2D(target, level, internalFormat, width, height, border, data ? HEAPU8.subarray(data, data + imageSize) : null)
          };
          var _emscripten_glCompressedTexImage2D = _glCompressedTexImage2D;
          var _glCompressedTexSubImage2D = (target, level, xoffset, yoffset, width, height, format, imageSize, data) => {
              GLctx.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, data ? HEAPU8.subarray(data, data + imageSize) : null)
          };
          var _emscripten_glCompressedTexSubImage2D = _glCompressedTexSubImage2D;

          function _glCopyTexImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
              GLctx.copyTexImage2D(x0, x1, x2, x3, x4, x5, x6, x7)
          }
          var _emscripten_glCopyTexImage2D = _glCopyTexImage2D;

          function _glCopyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
              GLctx.copyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7)
          }
          var _emscripten_glCopyTexSubImage2D = _glCopyTexSubImage2D;
          var _glCreateProgram = () => {
              var id = GL.getNewId(GL.programs);
              var program = GLctx.createProgram();
              program.name = id;
              program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
              program.uniformIdCounter = 1;
              GL.programs[id] = program;
              return id
          };
          var _emscripten_glCreateProgram = _glCreateProgram;
          var _glCreateShader = shaderType => {
              var id = GL.getNewId(GL.shaders);
              GL.shaders[id] = GLctx.createShader(shaderType);
              return id
          };
          var _emscripten_glCreateShader = _glCreateShader;

          function _glCullFace(x0) {
              GLctx.cullFace(x0)
          }
          var _emscripten_glCullFace = _glCullFace;
          var _glDeleteBuffers = (n, buffers) => {
              for (var i = 0; i < n; i++) {
                  var id = HEAP32[buffers + i * 4 >> 2];
                  var buffer = GL.buffers[id];
                  if (!buffer) continue;
                  GLctx.deleteBuffer(buffer);
                  buffer.name = 0;
                  GL.buffers[id] = null;
                  if (id == GLctx.currentArrayBufferBinding) GLctx.currentArrayBufferBinding = 0;
                  if (id == GLctx.currentElementArrayBufferBinding) GLctx.currentElementArrayBufferBinding = 0
              }
          };
          var _emscripten_glDeleteBuffers = _glDeleteBuffers;
          var _glDeleteFramebuffers = (n, framebuffers) => {
              for (var i = 0; i < n; ++i) {
                  var id = HEAP32[framebuffers + i * 4 >> 2];
                  var framebuffer = GL.framebuffers[id];
                  if (!framebuffer) continue;
                  GLctx.deleteFramebuffer(framebuffer);
                  framebuffer.name = 0;
                  GL.framebuffers[id] = null
              }
          };
          var _emscripten_glDeleteFramebuffers = _glDeleteFramebuffers;
          var _glDeleteProgram = id => {
              if (!id) return;
              var program = GL.programs[id];
              if (!program) {
                  GL.recordError(1281);
                  return
              }
              GLctx.deleteProgram(program);
              program.name = 0;
              GL.programs[id] = null
          };
          var _emscripten_glDeleteProgram = _glDeleteProgram;
          var _glDeleteQueriesEXT = (n, ids) => {
              for (var i = 0; i < n; i++) {
                  var id = HEAP32[ids + i * 4 >> 2];
                  var query = GL.queries[id];
                  if (!query) continue;
                  GLctx.disjointTimerQueryExt["deleteQueryEXT"](query);
                  GL.queries[id] = null
              }
          };
          var _emscripten_glDeleteQueriesEXT = _glDeleteQueriesEXT;
          var _glDeleteRenderbuffers = (n, renderbuffers) => {
              for (var i = 0; i < n; i++) {
                  var id = HEAP32[renderbuffers + i * 4 >> 2];
                  var renderbuffer = GL.renderbuffers[id];
                  if (!renderbuffer) continue;
                  GLctx.deleteRenderbuffer(renderbuffer);
                  renderbuffer.name = 0;
                  GL.renderbuffers[id] = null
              }
          };
          var _emscripten_glDeleteRenderbuffers = _glDeleteRenderbuffers;
          var _glDeleteShader = id => {
              if (!id) return;
              var shader = GL.shaders[id];
              if (!shader) {
                  GL.recordError(1281);
                  return
              }
              GLctx.deleteShader(shader);
              GL.shaders[id] = null
          };
          var _emscripten_glDeleteShader = _glDeleteShader;
          var _glDeleteTextures = (n, textures) => {
              for (var i = 0; i < n; i++) {
                  var id = HEAP32[textures + i * 4 >> 2];
                  var texture = GL.textures[id];
                  if (!texture) continue;
                  GLctx.deleteTexture(texture);
                  texture.name = 0;
                  GL.textures[id] = null
              }
          };
          var _emscripten_glDeleteTextures = _glDeleteTextures;
          var _glDeleteVertexArrays = (n, vaos) => {
              for (var i = 0; i < n; i++) {
                  var id = HEAP32[vaos + i * 4 >> 2];
                  GLctx.deleteVertexArray(GL.vaos[id]);
                  GL.vaos[id] = null
              }
          };
          var _glDeleteVertexArraysOES = _glDeleteVertexArrays;
          var _emscripten_glDeleteVertexArraysOES = _glDeleteVertexArraysOES;

          function _glDepthFunc(x0) {
              GLctx.depthFunc(x0)
          }
          var _emscripten_glDepthFunc = _glDepthFunc;
          var _glDepthMask = flag => {
              GLctx.depthMask(!!flag)
          };
          var _emscripten_glDepthMask = _glDepthMask;

          function _glDepthRangef(x0, x1) {
              GLctx.depthRange(x0, x1)
          }
          var _emscripten_glDepthRangef = _glDepthRangef;
          var _glDetachShader = (program, shader) => {
              GLctx.detachShader(GL.programs[program], GL.shaders[shader])
          };
          var _emscripten_glDetachShader = _glDetachShader;

          function _glDisable(x0) {
              GLctx.disable(x0)
          }
          var _emscripten_glDisable = _glDisable;
          var _glDisableVertexAttribArray = index => {
              var cb = GL.currentContext.clientBuffers[index];
              cb.enabled = false;
              GLctx.disableVertexAttribArray(index)
          };
          var _emscripten_glDisableVertexAttribArray = _glDisableVertexAttribArray;
          var _glDrawArrays = (mode, first, count) => {
              GL.preDrawHandleClientVertexAttribBindings(first + count);
              GLctx.drawArrays(mode, first, count);
              GL.postDrawHandleClientVertexAttribBindings()
          };
          var _emscripten_glDrawArrays = _glDrawArrays;
          var _glDrawArraysInstanced = (mode, first, count, primcount) => {
              GLctx.drawArraysInstanced(mode, first, count, primcount)
          };
          var _glDrawArraysInstancedANGLE = _glDrawArraysInstanced;
          var _emscripten_glDrawArraysInstancedANGLE = _glDrawArraysInstancedANGLE;
          var tempFixedLengthArray = [];
          var _glDrawBuffers = (n, bufs) => {
              var bufArray = tempFixedLengthArray[n];
              for (var i = 0; i < n; i++) {
                  bufArray[i] = HEAP32[bufs + i * 4 >> 2]
              }
              GLctx.drawBuffers(bufArray)
          };
          var _glDrawBuffersWEBGL = _glDrawBuffers;
          var _emscripten_glDrawBuffersWEBGL = _glDrawBuffersWEBGL;
          var _glDrawElements = (mode, count, type, indices) => {
              var buf;
              if (!GLctx.currentElementArrayBufferBinding) {
                  var size = GL.calcBufLength(1, type, 0, count);
                  buf = GL.getTempIndexBuffer(size);
                  GLctx.bindBuffer(34963, buf);
                  GLctx.bufferSubData(34963, 0, HEAPU8.subarray(indices, indices + size));
                  indices = 0
              }
              GL.preDrawHandleClientVertexAttribBindings(count);
              GLctx.drawElements(mode, count, type, indices);
              GL.postDrawHandleClientVertexAttribBindings(count);
              if (!GLctx.currentElementArrayBufferBinding) {
                  GLctx.bindBuffer(34963, null)
              }
          };
          var _emscripten_glDrawElements = _glDrawElements;
          var _glDrawElementsInstanced = (mode, count, type, indices, primcount) => {
              GLctx.drawElementsInstanced(mode, count, type, indices, primcount)
          };
          var _glDrawElementsInstancedANGLE = _glDrawElementsInstanced;
          var _emscripten_glDrawElementsInstancedANGLE = _glDrawElementsInstancedANGLE;

          function _glEnable(x0) {
              GLctx.enable(x0)
          }
          var _emscripten_glEnable = _glEnable;
          var _glEnableVertexAttribArray = index => {
              var cb = GL.currentContext.clientBuffers[index];
              cb.enabled = true;
              GLctx.enableVertexAttribArray(index)
          };
          var _emscripten_glEnableVertexAttribArray = _glEnableVertexAttribArray;
          var _glEndQueryEXT = target => {
              GLctx.disjointTimerQueryExt["endQueryEXT"](target)
          };
          var _emscripten_glEndQueryEXT = _glEndQueryEXT;

          function _glFinish() {
              GLctx.finish()
          }
          var _emscripten_glFinish = _glFinish;

          function _glFlush() {
              GLctx.flush()
          }
          var _emscripten_glFlush = _glFlush;
          var _glFramebufferRenderbuffer = (target, attachment, renderbuffertarget, renderbuffer) => {
              GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget, GL.renderbuffers[renderbuffer])
          };
          var _emscripten_glFramebufferRenderbuffer = _glFramebufferRenderbuffer;
          var _glFramebufferTexture2D = (target, attachment, textarget, texture, level) => {
              GLctx.framebufferTexture2D(target, attachment, textarget, GL.textures[texture], level)
          };
          var _emscripten_glFramebufferTexture2D = _glFramebufferTexture2D;

          function _glFrontFace(x0) {
              GLctx.frontFace(x0)
          }
          var _emscripten_glFrontFace = _glFrontFace;
          var __glGenObject = (n, buffers, createFunction, objectTable) => {
              for (var i = 0; i < n; i++) {
                  var buffer = GLctx[createFunction]();
                  var id = buffer && GL.getNewId(objectTable);
                  if (buffer) {
                      buffer.name = id;
                      objectTable[id] = buffer
                  } else {
                      GL.recordError(1282)
                  }
                  HEAP32[buffers + i * 4 >> 2] = id
              }
          };
          var _glGenBuffers = (n, buffers) => {
              __glGenObject(n, buffers, "createBuffer", GL.buffers)
          };
          var _emscripten_glGenBuffers = _glGenBuffers;
          var _glGenFramebuffers = (n, ids) => {
              __glGenObject(n, ids, "createFramebuffer", GL.framebuffers)
          };
          var _emscripten_glGenFramebuffers = _glGenFramebuffers;
          var _glGenQueriesEXT = (n, ids) => {
              for (var i = 0; i < n; i++) {
                  var query = GLctx.disjointTimerQueryExt["createQueryEXT"]();
                  if (!query) {
                      GL.recordError(1282);
                      while (i < n) HEAP32[ids + i++ * 4 >> 2] = 0;
                      return
                  }
                  var id = GL.getNewId(GL.queries);
                  query.name = id;
                  GL.queries[id] = query;
                  HEAP32[ids + i * 4 >> 2] = id
              }
          };
          var _emscripten_glGenQueriesEXT = _glGenQueriesEXT;
          var _glGenRenderbuffers = (n, renderbuffers) => {
              __glGenObject(n, renderbuffers, "createRenderbuffer", GL.renderbuffers)
          };
          var _emscripten_glGenRenderbuffers = _glGenRenderbuffers;
          var _glGenTextures = (n, textures) => {
              __glGenObject(n, textures, "createTexture", GL.textures)
          };
          var _emscripten_glGenTextures = _glGenTextures;

          function _glGenVertexArrays(n, arrays) {
              __glGenObject(n, arrays, "createVertexArray", GL.vaos)
          }
          var _glGenVertexArraysOES = _glGenVertexArrays;
          var _emscripten_glGenVertexArraysOES = _glGenVertexArraysOES;

          function _glGenerateMipmap(x0) {
              GLctx.generateMipmap(x0)
          }
          var _emscripten_glGenerateMipmap = _glGenerateMipmap;
          var __glGetActiveAttribOrUniform = (funcName, program, index, bufSize, length, size, type, name) => {
              program = GL.programs[program];
              var info = GLctx[funcName](program, index);
              if (info) {
                  var numBytesWrittenExclNull = name && stringToUTF8(info.name, name, bufSize);
                  if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
                  if (size) HEAP32[size >> 2] = info.size;
                  if (type) HEAP32[type >> 2] = info.type
              }
          };
          var _glGetActiveAttrib = (program, index, bufSize, length, size, type, name) => {
              __glGetActiveAttribOrUniform("getActiveAttrib", program, index, bufSize, length, size, type, name)
          };
          var _emscripten_glGetActiveAttrib = _glGetActiveAttrib;
          var _glGetActiveUniform = (program, index, bufSize, length, size, type, name) => {
              __glGetActiveAttribOrUniform("getActiveUniform", program, index, bufSize, length, size, type, name)
          };
          var _emscripten_glGetActiveUniform = _glGetActiveUniform;
          var _glGetAttachedShaders = (program, maxCount, count, shaders) => {
              var result = GLctx.getAttachedShaders(GL.programs[program]);
              var len = result.length;
              if (len > maxCount) {
                  len = maxCount
              }
              HEAP32[count >> 2] = len;
              for (var i = 0; i < len; ++i) {
                  var id = GL.shaders.indexOf(result[i]);
                  HEAP32[shaders + i * 4 >> 2] = id
              }
          };
          var _emscripten_glGetAttachedShaders = _glGetAttachedShaders;
          var _glGetAttribLocation = (program, name) => GLctx.getAttribLocation(GL.programs[program], UTF8ToString(name));
          var _emscripten_glGetAttribLocation = _glGetAttribLocation;
          var writeI53ToI64 = (ptr, num) => {
              HEAPU32[ptr >> 2] = num;
              var lower = HEAPU32[ptr >> 2];
              HEAPU32[ptr + 4 >> 2] = (num - lower) / 4294967296
          };
          var emscriptenWebGLGet = (name_, p, type) => {
              if (!p) {
                  GL.recordError(1281);
                  return
              }
              var ret = undefined;
              switch (name_) {
                  case 36346:
                      ret = 1;
                      break;
                  case 36344:
                      if (type != 0 && type != 1) {
                          GL.recordError(1280)
                      }
                      return;
                  case 36345:
                      ret = 0;
                      break;
                  case 34466:
                      var formats = GLctx.getParameter(34467);
                      ret = formats ? formats.length : 0;
                      break
              }
              if (ret === undefined) {
                  var result = GLctx.getParameter(name_);
                  switch (typeof result) {
                      case "number":
                          ret = result;
                          break;
                      case "boolean":
                          ret = result ? 1 : 0;
                          break;
                      case "string":
                          GL.recordError(1280);
                          return;
                      case "object":
                          if (result === null) {
                              switch (name_) {
                                  case 34964:
                                  case 35725:
                                  case 34965:
                                  case 36006:
                                  case 36007:
                                  case 32873:
                                  case 34229:
                                  case 34068: {
                                      ret = 0;
                                      break
                                  }
                                  default: {
                                      GL.recordError(1280);
                                      return
                                  }
                              }
                          } else if (result instanceof Float32Array || result instanceof Uint32Array || result instanceof Int32Array || result instanceof Array) {
                              for (var i = 0; i < result.length; ++i) {
                                  switch (type) {
                                      case 0:
                                          HEAP32[p + i * 4 >> 2] = result[i];
                                          break;
                                      case 2:
                                          HEAPF32[p + i * 4 >> 2] = result[i];
                                          break;
                                      case 4:
                                          HEAP8[p + i >> 0] = result[i] ? 1 : 0;
                                          break
                                  }
                              }
                              return
                          } else {
                              try {
                                  ret = result.name | 0
                              } catch (e) {
                                  GL.recordError(1280);
                                  err(`GL_INVALID_ENUM in glGet${type}v: Unknown object returned from WebGL getParameter(${name_})! (error: ${e})`);
                                  return
                              }
                          }
                          break;
                      default:
                          GL.recordError(1280);
                          err(`GL_INVALID_ENUM in glGet${type}v: Native code calling glGet${type}v(${name_}) and it returns ${result} of type ${typeof result}!`);
                          return
                  }
              }
              switch (type) {
                  case 1:
                      writeI53ToI64(p, ret);
                      break;
                  case 0:
                      HEAP32[p >> 2] = ret;
                      break;
                  case 2:
                      HEAPF32[p >> 2] = ret;
                      break;
                  case 4:
                      HEAP8[p >> 0] = ret ? 1 : 0;
                      break
              }
          };
          var _glGetBooleanv = (name_, p) => emscriptenWebGLGet(name_, p, 4);
          var _emscripten_glGetBooleanv = _glGetBooleanv;
          var _glGetBufferParameteriv = (target, value, data) => {
              if (!data) {
                  GL.recordError(1281);
                  return
              }
              HEAP32[data >> 2] = GLctx.getBufferParameter(target, value)
          };
          var _emscripten_glGetBufferParameteriv = _glGetBufferParameteriv;
          var _glGetError = () => {
              var error = GLctx.getError() || GL.lastError;
              GL.lastError = 0;
              return error
          };
          var _emscripten_glGetError = _glGetError;
          var _glGetFloatv = (name_, p) => emscriptenWebGLGet(name_, p, 2);
          var _emscripten_glGetFloatv = _glGetFloatv;
          var _glGetFramebufferAttachmentParameteriv = (target, attachment, pname, params) => {
              var result = GLctx.getFramebufferAttachmentParameter(target, attachment, pname);
              if (result instanceof WebGLRenderbuffer || result instanceof WebGLTexture) {
                  result = result.name | 0
              }
              HEAP32[params >> 2] = result
          };
          var _emscripten_glGetFramebufferAttachmentParameteriv = _glGetFramebufferAttachmentParameteriv;
          var _glGetIntegerv = (name_, p) => emscriptenWebGLGet(name_, p, 0);
          var _emscripten_glGetIntegerv = _glGetIntegerv;
          var _glGetProgramInfoLog = (program, maxLength, length, infoLog) => {
              var log = GLctx.getProgramInfoLog(GL.programs[program]);
              if (log === null) log = "(unknown error)";
              var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
              if (length) HEAP32[length >> 2] = numBytesWrittenExclNull
          };
          var _emscripten_glGetProgramInfoLog = _glGetProgramInfoLog;
          var _glGetProgramiv = (program, pname, p) => {
              if (!p) {
                  GL.recordError(1281);
                  return
              }
              if (program >= GL.counter) {
                  GL.recordError(1281);
                  return
              }
              program = GL.programs[program];
              if (pname == 35716) {
                  var log = GLctx.getProgramInfoLog(program);
                  if (log === null) log = "(unknown error)";
                  HEAP32[p >> 2] = log.length + 1
              } else if (pname == 35719) {
                  if (!program.maxUniformLength) {
                      for (var i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
                          program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length + 1)
                      }
                  }
                  HEAP32[p >> 2] = program.maxUniformLength
              } else if (pname == 35722) {
                  if (!program.maxAttributeLength) {
                      for (var i = 0; i < GLctx.getProgramParameter(program, 35721); ++i) {
                          program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length + 1)
                      }
                  }
                  HEAP32[p >> 2] = program.maxAttributeLength
              } else if (pname == 35381) {
                  if (!program.maxUniformBlockNameLength) {
                      for (var i = 0; i < GLctx.getProgramParameter(program, 35382); ++i) {
                          program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program, i).length + 1)
                      }
                  }
                  HEAP32[p >> 2] = program.maxUniformBlockNameLength
              } else {
                  HEAP32[p >> 2] = GLctx.getProgramParameter(program, pname)
              }
          };
          var _emscripten_glGetProgramiv = _glGetProgramiv;
          var _glGetQueryObjecti64vEXT = (id, pname, params) => {
              if (!params) {
                  GL.recordError(1281);
                  return
              }
              var query = GL.queries[id];
              var param;
              {
                  param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname)
              }
              var ret;
              if (typeof param == "boolean") {
                  ret = param ? 1 : 0
              } else {
                  ret = param
              }
              writeI53ToI64(params, ret)
          };
          var _emscripten_glGetQueryObjecti64vEXT = _glGetQueryObjecti64vEXT;
          var _glGetQueryObjectivEXT = (id, pname, params) => {
              if (!params) {
                  GL.recordError(1281);
                  return
              }
              var query = GL.queries[id];
              var param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname);
              var ret;
              if (typeof param == "boolean") {
                  ret = param ? 1 : 0
              } else {
                  ret = param
              }
              HEAP32[params >> 2] = ret
          };
          var _emscripten_glGetQueryObjectivEXT = _glGetQueryObjectivEXT;
          var _glGetQueryObjectui64vEXT = _glGetQueryObjecti64vEXT;
          var _emscripten_glGetQueryObjectui64vEXT = _glGetQueryObjectui64vEXT;
          var _glGetQueryObjectuivEXT = _glGetQueryObjectivEXT;
          var _emscripten_glGetQueryObjectuivEXT = _glGetQueryObjectuivEXT;
          var _glGetQueryivEXT = (target, pname, params) => {
              if (!params) {
                  GL.recordError(1281);
                  return
              }
              HEAP32[params >> 2] = GLctx.disjointTimerQueryExt["getQueryEXT"](target, pname)
          };
          var _emscripten_glGetQueryivEXT = _glGetQueryivEXT;
          var _glGetRenderbufferParameteriv = (target, pname, params) => {
              if (!params) {
                  GL.recordError(1281);
                  return
              }
              HEAP32[params >> 2] = GLctx.getRenderbufferParameter(target, pname)
          };
          var _emscripten_glGetRenderbufferParameteriv = _glGetRenderbufferParameteriv;
          var _glGetShaderInfoLog = (shader, maxLength, length, infoLog) => {
              var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
              if (log === null) log = "(unknown error)";
              var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
              if (length) HEAP32[length >> 2] = numBytesWrittenExclNull
          };
          var _emscripten_glGetShaderInfoLog = _glGetShaderInfoLog;
          var _glGetShaderPrecisionFormat = (shaderType, precisionType, range, precision) => {
              var result = GLctx.getShaderPrecisionFormat(shaderType, precisionType);
              HEAP32[range >> 2] = result.rangeMin;
              HEAP32[range + 4 >> 2] = result.rangeMax;
              HEAP32[precision >> 2] = result.precision
          };
          var _emscripten_glGetShaderPrecisionFormat = _glGetShaderPrecisionFormat;
          var _glGetShaderSource = (shader, bufSize, length, source) => {
              var result = GLctx.getShaderSource(GL.shaders[shader]);
              if (!result) return;
              var numBytesWrittenExclNull = bufSize > 0 && source ? stringToUTF8(result, source, bufSize) : 0;
              if (length) HEAP32[length >> 2] = numBytesWrittenExclNull
          };
          var _emscripten_glGetShaderSource = _glGetShaderSource;
          var _glGetShaderiv = (shader, pname, p) => {
              if (!p) {
                  GL.recordError(1281);
                  return
              }
              if (pname == 35716) {
                  var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
                  if (log === null) log = "(unknown error)";
                  var logLength = log ? log.length + 1 : 0;
                  HEAP32[p >> 2] = logLength
              } else if (pname == 35720) {
                  var source = GLctx.getShaderSource(GL.shaders[shader]);
                  var sourceLength = source ? source.length + 1 : 0;
                  HEAP32[p >> 2] = sourceLength
              } else {
                  HEAP32[p >> 2] = GLctx.getShaderParameter(GL.shaders[shader], pname)
              }
          };
          var _emscripten_glGetShaderiv = _glGetShaderiv;
          var webglGetExtensions = function $webglGetExtensions() {
              var exts = getEmscriptenSupportedExtensions(GLctx);
              exts = exts.concat(exts.map(e => "GL_" + e));
              return exts
          };
          var _glGetString = name_ => {
              var ret = GL.stringCache[name_];
              if (!ret) {
                  switch (name_) {
                      case 7939:
                          ret = stringToNewUTF8(webglGetExtensions().join(" "));
                          break;
                      case 7936:
                      case 7937:
                      case 37445:
                      case 37446:
                          var s = GLctx.getParameter(name_);
                          if (!s) {
                              GL.recordError(1280)
                          }
                          ret = s ? stringToNewUTF8(s) : 0;
                          break;
                      case 7938:
                          var glVersion = GLctx.getParameter(7938);
                          {
                              glVersion = `OpenGL ES 2.0 (${glVersion})`
                          }
                          ret = stringToNewUTF8(glVersion);
                          break;
                      case 35724:
                          var glslVersion = GLctx.getParameter(35724);
                          var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
                          var ver_num = glslVersion.match(ver_re);
                          if (ver_num !== null) {
                              if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + "0";
                              glslVersion = `OpenGL ES GLSL ES ${ver_num[1]} (${glslVersion})`
                          }
                          ret = stringToNewUTF8(glslVersion);
                          break;
                      default:
                          GL.recordError(1280)
                  }
                  GL.stringCache[name_] = ret
              }
              return ret
          };
          var _emscripten_glGetString = _glGetString;
          var _glGetTexParameterfv = (target, pname, params) => {
              if (!params) {
                  GL.recordError(1281);
                  return
              }
              HEAPF32[params >> 2] = GLctx.getTexParameter(target, pname)
          };
          var _emscripten_glGetTexParameterfv = _glGetTexParameterfv;
          var _glGetTexParameteriv = (target, pname, params) => {
              if (!params) {
                  GL.recordError(1281);
                  return
              }
              HEAP32[params >> 2] = GLctx.getTexParameter(target, pname)
          };
          var _emscripten_glGetTexParameteriv = _glGetTexParameteriv;
          var jstoi_q = str => parseInt(str);
          var webglGetLeftBracePos = name => name.slice(-1) == "]" && name.lastIndexOf("[");
          var webglPrepareUniformLocationsBeforeFirstUse = program => {
              var uniformLocsById = program.uniformLocsById,
                  uniformSizeAndIdsByName = program.uniformSizeAndIdsByName,
                  i, j;
              if (!uniformLocsById) {
                  program.uniformLocsById = uniformLocsById = {};
                  program.uniformArrayNamesById = {};
                  for (i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
                      var u = GLctx.getActiveUniform(program, i);
                      var nm = u.name;
                      var sz = u.size;
                      var lb = webglGetLeftBracePos(nm);
                      var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
                      var id = program.uniformIdCounter;
                      program.uniformIdCounter += sz;
                      uniformSizeAndIdsByName[arrayName] = [sz, id];
                      for (j = 0; j < sz; ++j) {
                          uniformLocsById[id] = j;
                          program.uniformArrayNamesById[id++] = arrayName
                      }
                  }
              }
          };
          var _glGetUniformLocation = (program, name) => {
              name = UTF8ToString(name);
              if (program = GL.programs[program]) {
                  webglPrepareUniformLocationsBeforeFirstUse(program);
                  var uniformLocsById = program.uniformLocsById;
                  var arrayIndex = 0;
                  var uniformBaseName = name;
                  var leftBrace = webglGetLeftBracePos(name);
                  if (leftBrace > 0) {
                      arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0;
                      uniformBaseName = name.slice(0, leftBrace)
                  }
                  var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName];
                  if (sizeAndId && arrayIndex < sizeAndId[0]) {
                      arrayIndex += sizeAndId[1];
                      if (uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name)) {
                          return arrayIndex
                      }
                  }
              } else {
                  GL.recordError(1281)
              }
              return -1
          };
          var _emscripten_glGetUniformLocation = _glGetUniformLocation;
          var webglGetUniformLocation = location => {
              var p = GLctx.currentProgram;
              if (p) {
                  var webglLoc = p.uniformLocsById[location];
                  if (typeof webglLoc == "number") {
                      p.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(p, p.uniformArrayNamesById[location] + (webglLoc > 0 ? `[${webglLoc}]` : ""))
                  }
                  return webglLoc
              } else {
                  GL.recordError(1282)
              }
          };
          var emscriptenWebGLGetUniform = (program, location, params, type) => {
              if (!params) {
                  GL.recordError(1281);
                  return
              }
              program = GL.programs[program];
              webglPrepareUniformLocationsBeforeFirstUse(program);
              var data = GLctx.getUniform(program, webglGetUniformLocation(location));
              if (typeof data == "number" || typeof data == "boolean") {
                  switch (type) {
                      case 0:
                          HEAP32[params >> 2] = data;
                          break;
                      case 2:
                          HEAPF32[params >> 2] = data;
                          break
                  }
              } else {
                  for (var i = 0; i < data.length; i++) {
                      switch (type) {
                          case 0:
                              HEAP32[params + i * 4 >> 2] = data[i];
                              break;
                          case 2:
                              HEAPF32[params + i * 4 >> 2] = data[i];
                              break
                      }
                  }
              }
          };
          var _glGetUniformfv = (program, location, params) => {
              emscriptenWebGLGetUniform(program, location, params, 2)
          };
          var _emscripten_glGetUniformfv = _glGetUniformfv;
          var _glGetUniformiv = (program, location, params) => {
              emscriptenWebGLGetUniform(program, location, params, 0)
          };
          var _emscripten_glGetUniformiv = _glGetUniformiv;
          var _glGetVertexAttribPointerv = (index, pname, pointer) => {
              if (!pointer) {
                  GL.recordError(1281);
                  return
              }
              if (GL.currentContext.clientBuffers[index].enabled) {
                  err("glGetVertexAttribPointer on client-side array: not supported, bad data returned")
              }
              HEAP32[pointer >> 2] = GLctx.getVertexAttribOffset(index, pname)
          };
          var _emscripten_glGetVertexAttribPointerv = _glGetVertexAttribPointerv;
          var emscriptenWebGLGetVertexAttrib = (index, pname, params, type) => {
              if (!params) {
                  GL.recordError(1281);
                  return
              }
              if (GL.currentContext.clientBuffers[index].enabled) {
                  err("glGetVertexAttrib*v on client-side array: not supported, bad data returned")
              }
              var data = GLctx.getVertexAttrib(index, pname);
              if (pname == 34975) {
                  HEAP32[params >> 2] = data && data["name"]
              } else if (typeof data == "number" || typeof data == "boolean") {
                  switch (type) {
                      case 0:
                          HEAP32[params >> 2] = data;
                          break;
                      case 2:
                          HEAPF32[params >> 2] = data;
                          break;
                      case 5:
                          HEAP32[params >> 2] = Math.fround(data);
                          break
                  }
              } else {
                  for (var i = 0; i < data.length; i++) {
                      switch (type) {
                          case 0:
                              HEAP32[params + i * 4 >> 2] = data[i];
                              break;
                          case 2:
                              HEAPF32[params + i * 4 >> 2] = data[i];
                              break;
                          case 5:
                              HEAP32[params + i * 4 >> 2] = Math.fround(data[i]);
                              break
                      }
                  }
              }
          };
          var _glGetVertexAttribfv = (index, pname, params) => {
              emscriptenWebGLGetVertexAttrib(index, pname, params, 2)
          };
          var _emscripten_glGetVertexAttribfv = _glGetVertexAttribfv;
          var _glGetVertexAttribiv = (index, pname, params) => {
              emscriptenWebGLGetVertexAttrib(index, pname, params, 5)
          };
          var _emscripten_glGetVertexAttribiv = _glGetVertexAttribiv;

          function _glHint(x0, x1) {
              GLctx.hint(x0, x1)
          }
          var _emscripten_glHint = _glHint;
          var _glIsBuffer = buffer => {
              var b = GL.buffers[buffer];
              if (!b) return 0;
              return GLctx.isBuffer(b)
          };
          var _emscripten_glIsBuffer = _glIsBuffer;

          function _glIsEnabled(x0) {
              return GLctx.isEnabled(x0)
          }
          var _emscripten_glIsEnabled = _glIsEnabled;
          var _glIsFramebuffer = framebuffer => {
              var fb = GL.framebuffers[framebuffer];
              if (!fb) return 0;
              return GLctx.isFramebuffer(fb)
          };
          var _emscripten_glIsFramebuffer = _glIsFramebuffer;
          var _glIsProgram = program => {
              program = GL.programs[program];
              if (!program) return 0;
              return GLctx.isProgram(program)
          };
          var _emscripten_glIsProgram = _glIsProgram;
          var _glIsQueryEXT = id => {
              var query = GL.queries[id];
              if (!query) return 0;
              return GLctx.disjointTimerQueryExt["isQueryEXT"](query)
          };
          var _emscripten_glIsQueryEXT = _glIsQueryEXT;
          var _glIsRenderbuffer = renderbuffer => {
              var rb = GL.renderbuffers[renderbuffer];
              if (!rb) return 0;
              return GLctx.isRenderbuffer(rb)
          };
          var _emscripten_glIsRenderbuffer = _glIsRenderbuffer;
          var _glIsShader = shader => {
              var s = GL.shaders[shader];
              if (!s) return 0;
              return GLctx.isShader(s)
          };
          var _emscripten_glIsShader = _glIsShader;
          var _glIsTexture = id => {
              var texture = GL.textures[id];
              if (!texture) return 0;
              return GLctx.isTexture(texture)
          };
          var _emscripten_glIsTexture = _glIsTexture;
          var _glIsVertexArray = array => {
              var vao = GL.vaos[array];
              if (!vao) return 0;
              return GLctx.isVertexArray(vao)
          };
          var _glIsVertexArrayOES = _glIsVertexArray;
          var _emscripten_glIsVertexArrayOES = _glIsVertexArrayOES;

          function _glLineWidth(x0) {
              GLctx.lineWidth(x0)
          }
          var _emscripten_glLineWidth = _glLineWidth;
          var _glLinkProgram = program => {
              program = GL.programs[program];
              GLctx.linkProgram(program);
              program.uniformLocsById = 0;
              program.uniformSizeAndIdsByName = {}
          };
          var _emscripten_glLinkProgram = _glLinkProgram;
          var _glPixelStorei = (pname, param) => {
              if (pname == 3317) {
                  GL.unpackAlignment = param
              }
              GLctx.pixelStorei(pname, param)
          };
          var _emscripten_glPixelStorei = _glPixelStorei;

          function _glPolygonOffset(x0, x1) {
              GLctx.polygonOffset(x0, x1)
          }
          var _emscripten_glPolygonOffset = _glPolygonOffset;
          var _glQueryCounterEXT = (id, target) => {
              GLctx.disjointTimerQueryExt["queryCounterEXT"](GL.queries[id], target)
          };
          var _emscripten_glQueryCounterEXT = _glQueryCounterEXT;
          var computeUnpackAlignedImageSize = (width, height, sizePerPixel, alignment) => {
              function roundedToNextMultipleOf(x, y) {
                  return x + y - 1 & -y
              }
              var plainRowSize = width * sizePerPixel;
              var alignedRowSize = roundedToNextMultipleOf(plainRowSize, alignment);
              return height * alignedRowSize
          };
          var colorChannelsInGlTextureFormat = format => {
              var colorChannels = {
                  5: 3,
                  6: 4,
                  8: 2,
                  29502: 3,
                  29504: 4
              };
              return colorChannels[format - 6402] || 1
          };
          var heapObjectForWebGLType = type => {
              type -= 5120;
              if (type == 1) return HEAPU8;
              if (type == 4) return HEAP32;
              if (type == 6) return HEAPF32;
              if (type == 5 || type == 28922) return HEAPU32;
              return HEAPU16
          };
          var heapAccessShiftForWebGLHeap = heap => 31 - Math.clz32(heap.BYTES_PER_ELEMENT);
          var emscriptenWebGLGetTexPixelData = (type, format, width, height, pixels, internalFormat) => {
              var heap = heapObjectForWebGLType(type);
              var shift = heapAccessShiftForWebGLHeap(heap);
              var byteSize = 1 << shift;
              var sizePerPixel = colorChannelsInGlTextureFormat(format) * byteSize;
              var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel, GL.unpackAlignment);
              return heap.subarray(pixels >> shift, pixels + bytes >> shift)
          };
          var _glReadPixels = (x, y, width, height, format, type, pixels) => {
              var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
              if (!pixelData) {
                  GL.recordError(1280);
                  return
              }
              GLctx.readPixels(x, y, width, height, format, type, pixelData)
          };
          var _emscripten_glReadPixels = _glReadPixels;
          var _glReleaseShaderCompiler = () => {};
          var _emscripten_glReleaseShaderCompiler = _glReleaseShaderCompiler;

          function _glRenderbufferStorage(x0, x1, x2, x3) {
              GLctx.renderbufferStorage(x0, x1, x2, x3)
          }
          var _emscripten_glRenderbufferStorage = _glRenderbufferStorage;
          var _glSampleCoverage = (value, invert) => {
              GLctx.sampleCoverage(value, !!invert)
          };
          var _emscripten_glSampleCoverage = _glSampleCoverage;

          function _glScissor(x0, x1, x2, x3) {
              GLctx.scissor(x0, x1, x2, x3)
          }
          var _emscripten_glScissor = _glScissor;
          var _glShaderBinary = (count, shaders, binaryformat, binary, length) => {
              GL.recordError(1280)
          };
          var _emscripten_glShaderBinary = _glShaderBinary;
          var _glShaderSource = (shader, count, string, length) => {
              var source = GL.getSource(shader, count, string, length);
              GLctx.shaderSource(GL.shaders[shader], source)
          };
          var _emscripten_glShaderSource = _glShaderSource;

          function _glStencilFunc(x0, x1, x2) {
              GLctx.stencilFunc(x0, x1, x2)
          }
          var _emscripten_glStencilFunc = _glStencilFunc;

          function _glStencilFuncSeparate(x0, x1, x2, x3) {
              GLctx.stencilFuncSeparate(x0, x1, x2, x3)
          }
          var _emscripten_glStencilFuncSeparate = _glStencilFuncSeparate;

          function _glStencilMask(x0) {
              GLctx.stencilMask(x0)
          }
          var _emscripten_glStencilMask = _glStencilMask;

          function _glStencilMaskSeparate(x0, x1) {
              GLctx.stencilMaskSeparate(x0, x1)
          }
          var _emscripten_glStencilMaskSeparate = _glStencilMaskSeparate;

          function _glStencilOp(x0, x1, x2) {
              GLctx.stencilOp(x0, x1, x2)
          }
          var _emscripten_glStencilOp = _glStencilOp;

          function _glStencilOpSeparate(x0, x1, x2, x3) {
              GLctx.stencilOpSeparate(x0, x1, x2, x3)
          }
          var _emscripten_glStencilOpSeparate = _glStencilOpSeparate;
          var _glTexImage2D = (target, level, internalFormat, width, height, border, format, type, pixels) => {
              GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null)
          };
          var _emscripten_glTexImage2D = _glTexImage2D;

          function _glTexParameterf(x0, x1, x2) {
              GLctx.texParameterf(x0, x1, x2)
          }
          var _emscripten_glTexParameterf = _glTexParameterf;
          var _glTexParameterfv = (target, pname, params) => {
              var param = HEAPF32[params >> 2];
              GLctx.texParameterf(target, pname, param)
          };
          var _emscripten_glTexParameterfv = _glTexParameterfv;

          function _glTexParameteri(x0, x1, x2) {
              GLctx.texParameteri(x0, x1, x2)
          }
          var _emscripten_glTexParameteri = _glTexParameteri;
          var _glTexParameteriv = (target, pname, params) => {
              var param = HEAP32[params >> 2];
              GLctx.texParameteri(target, pname, param)
          };
          var _emscripten_glTexParameteriv = _glTexParameteriv;
          var _glTexSubImage2D = (target, level, xoffset, yoffset, width, height, format, type, pixels) => {
              var pixelData = null;
              if (pixels) pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
              GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData)
          };
          var _emscripten_glTexSubImage2D = _glTexSubImage2D;
          var _glUniform1f = (location, v0) => {
              GLctx.uniform1f(webglGetUniformLocation(location), v0)
          };
          var _emscripten_glUniform1f = _glUniform1f;
          var miniTempWebGLFloatBuffers = [];
          var _glUniform1fv = (location, count, value) => {
              if (count <= 288) {
                  var view = miniTempWebGLFloatBuffers[count - 1];
                  for (var i = 0; i < count; ++i) {
                      view[i] = HEAPF32[value + 4 * i >> 2]
                  }
              } else {
                  var view = HEAPF32.subarray(value >> 2, value + count * 4 >> 2)
              }
              GLctx.uniform1fv(webglGetUniformLocation(location), view)
          };
          var _emscripten_glUniform1fv = _glUniform1fv;
          var _glUniform1i = (location, v0) => {
              GLctx.uniform1i(webglGetUniformLocation(location), v0)
          };
          var _emscripten_glUniform1i = _glUniform1i;
          var miniTempWebGLIntBuffers = [];
          var _glUniform1iv = (location, count, value) => {
              if (count <= 288) {
                  var view = miniTempWebGLIntBuffers[count - 1];
                  for (var i = 0; i < count; ++i) {
                      view[i] = HEAP32[value + 4 * i >> 2]
                  }
              } else {
                  var view = HEAP32.subarray(value >> 2, value + count * 4 >> 2)
              }
              GLctx.uniform1iv(webglGetUniformLocation(location), view)
          };
          var _emscripten_glUniform1iv = _glUniform1iv;
          var _glUniform2f = (location, v0, v1) => {
              GLctx.uniform2f(webglGetUniformLocation(location), v0, v1)
          };
          var _emscripten_glUniform2f = _glUniform2f;
          var _glUniform2fv = (location, count, value) => {
              if (count <= 144) {
                  var view = miniTempWebGLFloatBuffers[2 * count - 1];
                  for (var i = 0; i < 2 * count; i += 2) {
                      view[i] = HEAPF32[value + 4 * i >> 2];
                      view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2]
                  }
              } else {
                  var view = HEAPF32.subarray(value >> 2, value + count * 8 >> 2)
              }
              GLctx.uniform2fv(webglGetUniformLocation(location), view)
          };
          var _emscripten_glUniform2fv = _glUniform2fv;
          var _glUniform2i = (location, v0, v1) => {
              GLctx.uniform2i(webglGetUniformLocation(location), v0, v1)
          };
          var _emscripten_glUniform2i = _glUniform2i;
          var _glUniform2iv = (location, count, value) => {
              if (count <= 144) {
                  var view = miniTempWebGLIntBuffers[2 * count - 1];
                  for (var i = 0; i < 2 * count; i += 2) {
                      view[i] = HEAP32[value + 4 * i >> 2];
                      view[i + 1] = HEAP32[value + (4 * i + 4) >> 2]
                  }
              } else {
                  var view = HEAP32.subarray(value >> 2, value + count * 8 >> 2)
              }
              GLctx.uniform2iv(webglGetUniformLocation(location), view)
          };
          var _emscripten_glUniform2iv = _glUniform2iv;
          var _glUniform3f = (location, v0, v1, v2) => {
              GLctx.uniform3f(webglGetUniformLocation(location), v0, v1, v2)
          };
          var _emscripten_glUniform3f = _glUniform3f;
          var _glUniform3fv = (location, count, value) => {
              if (count <= 96) {
                  var view = miniTempWebGLFloatBuffers[3 * count - 1];
                  for (var i = 0; i < 3 * count; i += 3) {
                      view[i] = HEAPF32[value + 4 * i >> 2];
                      view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
                      view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2]
                  }
              } else {
                  var view = HEAPF32.subarray(value >> 2, value + count * 12 >> 2)
              }
              GLctx.uniform3fv(webglGetUniformLocation(location), view)
          };
          var _emscripten_glUniform3fv = _glUniform3fv;
          var _glUniform3i = (location, v0, v1, v2) => {
              GLctx.uniform3i(webglGetUniformLocation(location), v0, v1, v2)
          };
          var _emscripten_glUniform3i = _glUniform3i;
          var _glUniform3iv = (location, count, value) => {
              if (count <= 96) {
                  var view = miniTempWebGLIntBuffers[3 * count - 1];
                  for (var i = 0; i < 3 * count; i += 3) {
                      view[i] = HEAP32[value + 4 * i >> 2];
                      view[i + 1] = HEAP32[value + (4 * i + 4) >> 2];
                      view[i + 2] = HEAP32[value + (4 * i + 8) >> 2]
                  }
              } else {
                  var view = HEAP32.subarray(value >> 2, value + count * 12 >> 2)
              }
              GLctx.uniform3iv(webglGetUniformLocation(location), view)
          };
          var _emscripten_glUniform3iv = _glUniform3iv;
          var _glUniform4f = (location, v0, v1, v2, v3) => {
              GLctx.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3)
          };
          var _emscripten_glUniform4f = _glUniform4f;
          var _glUniform4fv = (location, count, value) => {
              if (count <= 72) {
                  var view = miniTempWebGLFloatBuffers[4 * count - 1];
                  var heap = HEAPF32;
                  value >>= 2;
                  for (var i = 0; i < 4 * count; i += 4) {
                      var dst = value + i;
                      view[i] = heap[dst];
                      view[i + 1] = heap[dst + 1];
                      view[i + 2] = heap[dst + 2];
                      view[i + 3] = heap[dst + 3]
                  }
              } else {
                  var view = HEAPF32.subarray(value >> 2, value + count * 16 >> 2)
              }
              GLctx.uniform4fv(webglGetUniformLocation(location), view)
          };
          var _emscripten_glUniform4fv = _glUniform4fv;
          var _glUniform4i = (location, v0, v1, v2, v3) => {
              GLctx.uniform4i(webglGetUniformLocation(location), v0, v1, v2, v3)
          };
          var _emscripten_glUniform4i = _glUniform4i;
          var _glUniform4iv = (location, count, value) => {
              if (count <= 72) {
                  var view = miniTempWebGLIntBuffers[4 * count - 1];
                  for (var i = 0; i < 4 * count; i += 4) {
                      view[i] = HEAP32[value + 4 * i >> 2];
                      view[i + 1] = HEAP32[value + (4 * i + 4) >> 2];
                      view[i + 2] = HEAP32[value + (4 * i + 8) >> 2];
                      view[i + 3] = HEAP32[value + (4 * i + 12) >> 2]
                  }
              } else {
                  var view = HEAP32.subarray(value >> 2, value + count * 16 >> 2)
              }
              GLctx.uniform4iv(webglGetUniformLocation(location), view)
          };
          var _emscripten_glUniform4iv = _glUniform4iv;
          var _glUniformMatrix2fv = (location, count, transpose, value) => {
              if (count <= 72) {
                  var view = miniTempWebGLFloatBuffers[4 * count - 1];
                  for (var i = 0; i < 4 * count; i += 4) {
                      view[i] = HEAPF32[value + 4 * i >> 2];
                      view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
                      view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
                      view[i + 3] = HEAPF32[value + (4 * i + 12) >> 2]
                  }
              } else {
                  var view = HEAPF32.subarray(value >> 2, value + count * 16 >> 2)
              }
              GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, view)
          };
          var _emscripten_glUniformMatrix2fv = _glUniformMatrix2fv;
          var _glUniformMatrix3fv = (location, count, transpose, value) => {
              if (count <= 32) {
                  var view = miniTempWebGLFloatBuffers[9 * count - 1];
                  for (var i = 0; i < 9 * count; i += 9) {
                      view[i] = HEAPF32[value + 4 * i >> 2];
                      view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
                      view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
                      view[i + 3] = HEAPF32[value + (4 * i + 12) >> 2];
                      view[i + 4] = HEAPF32[value + (4 * i + 16) >> 2];
                      view[i + 5] = HEAPF32[value + (4 * i + 20) >> 2];
                      view[i + 6] = HEAPF32[value + (4 * i + 24) >> 2];
                      view[i + 7] = HEAPF32[value + (4 * i + 28) >> 2];
                      view[i + 8] = HEAPF32[value + (4 * i + 32) >> 2]
                  }
              } else {
                  var view = HEAPF32.subarray(value >> 2, value + count * 36 >> 2)
              }
              GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, view)
          };
          var _emscripten_glUniformMatrix3fv = _glUniformMatrix3fv;
          var _glUniformMatrix4fv = (location, count, transpose, value) => {
              if (count <= 18) {
                  var view = miniTempWebGLFloatBuffers[16 * count - 1];
                  var heap = HEAPF32;
                  value >>= 2;
                  for (var i = 0; i < 16 * count; i += 16) {
                      var dst = value + i;
                      view[i] = heap[dst];
                      view[i + 1] = heap[dst + 1];
                      view[i + 2] = heap[dst + 2];
                      view[i + 3] = heap[dst + 3];
                      view[i + 4] = heap[dst + 4];
                      view[i + 5] = heap[dst + 5];
                      view[i + 6] = heap[dst + 6];
                      view[i + 7] = heap[dst + 7];
                      view[i + 8] = heap[dst + 8];
                      view[i + 9] = heap[dst + 9];
                      view[i + 10] = heap[dst + 10];
                      view[i + 11] = heap[dst + 11];
                      view[i + 12] = heap[dst + 12];
                      view[i + 13] = heap[dst + 13];
                      view[i + 14] = heap[dst + 14];
                      view[i + 15] = heap[dst + 15]
                  }
              } else {
                  var view = HEAPF32.subarray(value >> 2, value + count * 64 >> 2)
              }
              GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, view)
          };
          var _emscripten_glUniformMatrix4fv = _glUniformMatrix4fv;
          var _glUseProgram = program => {
              program = GL.programs[program];
              GLctx.useProgram(program);
              GLctx.currentProgram = program
          };
          var _emscripten_glUseProgram = _glUseProgram;
          var _glValidateProgram = program => {
              GLctx.validateProgram(GL.programs[program])
          };
          var _emscripten_glValidateProgram = _glValidateProgram;

          function _glVertexAttrib1f(x0, x1) {
              GLctx.vertexAttrib1f(x0, x1)
          }
          var _emscripten_glVertexAttrib1f = _glVertexAttrib1f;
          var _glVertexAttrib1fv = (index, v) => {
              GLctx.vertexAttrib1f(index, HEAPF32[v >> 2])
          };
          var _emscripten_glVertexAttrib1fv = _glVertexAttrib1fv;

          function _glVertexAttrib2f(x0, x1, x2) {
              GLctx.vertexAttrib2f(x0, x1, x2)
          }
          var _emscripten_glVertexAttrib2f = _glVertexAttrib2f;
          var _glVertexAttrib2fv = (index, v) => {
              GLctx.vertexAttrib2f(index, HEAPF32[v >> 2], HEAPF32[v + 4 >> 2])
          };
          var _emscripten_glVertexAttrib2fv = _glVertexAttrib2fv;

          function _glVertexAttrib3f(x0, x1, x2, x3) {
              GLctx.vertexAttrib3f(x0, x1, x2, x3)
          }
          var _emscripten_glVertexAttrib3f = _glVertexAttrib3f;
          var _glVertexAttrib3fv = (index, v) => {
              GLctx.vertexAttrib3f(index, HEAPF32[v >> 2], HEAPF32[v + 4 >> 2], HEAPF32[v + 8 >> 2])
          };
          var _emscripten_glVertexAttrib3fv = _glVertexAttrib3fv;

          function _glVertexAttrib4f(x0, x1, x2, x3, x4) {
              GLctx.vertexAttrib4f(x0, x1, x2, x3, x4)
          }
          var _emscripten_glVertexAttrib4f = _glVertexAttrib4f;
          var _glVertexAttrib4fv = (index, v) => {
              GLctx.vertexAttrib4f(index, HEAPF32[v >> 2], HEAPF32[v + 4 >> 2], HEAPF32[v + 8 >> 2], HEAPF32[v + 12 >> 2])
          };
          var _emscripten_glVertexAttrib4fv = _glVertexAttrib4fv;
          var _glVertexAttribDivisor = (index, divisor) => {
              GLctx.vertexAttribDivisor(index, divisor)
          };
          var _glVertexAttribDivisorANGLE = _glVertexAttribDivisor;
          var _emscripten_glVertexAttribDivisorANGLE = _glVertexAttribDivisorANGLE;
          var _glVertexAttribPointer = (index, size, type, normalized, stride, ptr) => {
              var cb = GL.currentContext.clientBuffers[index];
              if (!GLctx.currentArrayBufferBinding) {
                  cb.size = size;
                  cb.type = type;
                  cb.normalized = normalized;
                  cb.stride = stride;
                  cb.ptr = ptr;
                  cb.clientside = true;
                  cb.vertexAttribPointerAdaptor = function(index, size, type, normalized, stride, ptr) {
                      this.vertexAttribPointer(index, size, type, normalized, stride, ptr)
                  };
                  return
              }
              cb.clientside = false;
              GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr)
          };
          var _emscripten_glVertexAttribPointer = _glVertexAttribPointer;

          function _glViewport(x0, x1, x2, x3) {
              GLctx.viewport(x0, x1, x2, x3)
          }
          var _emscripten_glViewport = _glViewport;
          var _emscripten_has_asyncify = () => 0;
          var _emscripten_memcpy_js = (dest, src, num) => HEAPU8.copyWithin(dest, src, src + num);
          var _emscripten_pause_main_loop = () => {
              Browser.mainLoop.pause()
          };
          var doRequestFullscreen = (target, strategy) => {
              if (!JSEvents.fullscreenEnabled()) return -1;
              target = findEventTarget(target);
              if (!target) return -4;
              if (!target.requestFullscreen && !target.webkitRequestFullscreen) {
                  return -3
              }
              var canPerformRequests = JSEvents.canPerformEventHandlerRequests();
              if (!canPerformRequests) {
                  if (strategy.deferUntilInEventHandler) {
                      JSEvents.deferCall(JSEvents_requestFullscreen, 1, [target, strategy]);
                      return 1
                  }
                  return -2
              }
              return JSEvents_requestFullscreen(target, strategy)
          };
          var _emscripten_request_fullscreen_strategy = (target, deferUntilInEventHandler, fullscreenStrategy) => {
              var strategy = {
                  scaleMode: HEAP32[fullscreenStrategy >> 2],
                  canvasResolutionScaleMode: HEAP32[fullscreenStrategy + 4 >> 2],
                  filteringMode: HEAP32[fullscreenStrategy + 8 >> 2],
                  deferUntilInEventHandler: deferUntilInEventHandler,
                  canvasResizedCallback: HEAP32[fullscreenStrategy + 12 >> 2],
                  canvasResizedCallbackUserData: HEAP32[fullscreenStrategy + 16 >> 2]
              };
              return doRequestFullscreen(target, strategy)
          };
          var _emscripten_request_pointerlock = (target, deferUntilInEventHandler) => {
              target = findEventTarget(target);
              if (!target) return -4;
              if (!target.requestPointerLock) {
                  return -1
              }
              var canPerformRequests = JSEvents.canPerformEventHandlerRequests();
              if (!canPerformRequests) {
                  if (deferUntilInEventHandler) {
                      JSEvents.deferCall(requestPointerLock, 2, [target]);
                      return 1
                  }
                  return -2
              }
              return requestPointerLock(target)
          };
          var getHeapMax = () => 2147483648;
          var growMemory = size => {
              var b = wasmMemory.buffer;
              var pages = (size - b.byteLength + 65535) / 65536;
              try {
                  wasmMemory.grow(pages);
                  updateMemoryViews();
                  return 1
              } catch (e) {}
          };
          var _emscripten_resize_heap = requestedSize => {
              var oldSize = HEAPU8.length;
              requestedSize >>>= 0;
              var maxHeapSize = getHeapMax();
              if (requestedSize > maxHeapSize) {
                  return false
              }
              var alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
              for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
                  var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
                  overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
                  var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
                  var replacement = growMemory(newSize);
                  if (replacement) {
                      return true
                  }
              }
              return false
          };
          var _emscripten_resume_main_loop = () => {
              Browser.mainLoop.resume()
          };
          var _emscripten_sample_gamepad_data = () => {
              try {
                  if (navigator.getGamepads) return (JSEvents.lastGamepadState = navigator.getGamepads()) ? 0 : -1
              } catch (e) {
                  navigator.getGamepads = null
              }
              return -1
          };
          var registerBeforeUnloadEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString) => {
              var beforeUnloadEventHandlerFunc = (e = event) => {
                  var confirmationMessage = getWasmTableEntry(callbackfunc)(eventTypeId, 0, userData);
                  if (confirmationMessage) {
                      confirmationMessage = UTF8ToString(confirmationMessage)
                  }
                  if (confirmationMessage) {
                      e.preventDefault();
                      e.returnValue = confirmationMessage;
                      return confirmationMessage
                  }
              };
              var eventHandler = {
                  target: findEventTarget(target),
                  eventTypeString: eventTypeString,
                  callbackfunc: callbackfunc,
                  handlerFunc: beforeUnloadEventHandlerFunc,
                  useCapture: useCapture
              };
              return JSEvents.registerOrRemoveHandler(eventHandler)
          };
          var _emscripten_set_beforeunload_callback_on_thread = (userData, callbackfunc, targetThread) => {
              if (typeof onbeforeunload == "undefined") return -1;
              if (targetThread !== 1) return -5;
              return registerBeforeUnloadEventCallback(2, userData, true, callbackfunc, 28, "beforeunload")
          };
          var registerFocusEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
              if (!JSEvents.focusEvent) JSEvents.focusEvent = _malloc(256);
              var focusEventHandlerFunc = (e = event) => {
                  var nodeName = JSEvents.getNodeNameForTarget(e.target);
                  var id = e.target.id ? e.target.id : "";
                  var focusEvent = JSEvents.focusEvent;
                  stringToUTF8(nodeName, focusEvent + 0, 128);
                  stringToUTF8(id, focusEvent + 128, 128);
                  if (getWasmTableEntry(callbackfunc)(eventTypeId, focusEvent, userData)) e.preventDefault()
              };
              var eventHandler = {
                  target: findEventTarget(target),
                  eventTypeString: eventTypeString,
                  callbackfunc: callbackfunc,
                  handlerFunc: focusEventHandlerFunc,
                  useCapture: useCapture
              };
              return JSEvents.registerOrRemoveHandler(eventHandler)
          };
          var _emscripten_set_blur_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerFocusEventCallback(target, userData, useCapture, callbackfunc, 12, "blur", targetThread);
          var _emscripten_set_element_css_size = (target, width, height) => {
              target = findEventTarget(target);
              if (!target) return -4;
              target.style.width = width + "px";
              target.style.height = height + "px";
              return 0
          };
          var _emscripten_set_focus_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerFocusEventCallback(target, userData, useCapture, callbackfunc, 13, "focus", targetThread);
          var fillFullscreenChangeEventData = eventStruct => {
              var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
              var isFullscreen = !!fullscreenElement;
              HEAP32[eventStruct >> 2] = isFullscreen;
              HEAP32[eventStruct + 4 >> 2] = JSEvents.fullscreenEnabled();
              var reportedElement = isFullscreen ? fullscreenElement : JSEvents.previousFullscreenElement;
              var nodeName = JSEvents.getNodeNameForTarget(reportedElement);
              var id = reportedElement?.id || "";
              stringToUTF8(nodeName, eventStruct + 8, 128);
              stringToUTF8(id, eventStruct + 136, 128);
              HEAP32[eventStruct + 264 >> 2] = reportedElement ? reportedElement.clientWidth : 0;
              HEAP32[eventStruct + 268 >> 2] = reportedElement ? reportedElement.clientHeight : 0;
              HEAP32[eventStruct + 272 >> 2] = screen.width;
              HEAP32[eventStruct + 276 >> 2] = screen.height;
              if (isFullscreen) {
                  JSEvents.previousFullscreenElement = fullscreenElement
              }
          };
          var registerFullscreenChangeEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
              if (!JSEvents.fullscreenChangeEvent) JSEvents.fullscreenChangeEvent = _malloc(280);
              var fullscreenChangeEventhandlerFunc = (e = event) => {
                  var fullscreenChangeEvent = JSEvents.fullscreenChangeEvent;
                  fillFullscreenChangeEventData(fullscreenChangeEvent);
                  if (getWasmTableEntry(callbackfunc)(eventTypeId, fullscreenChangeEvent, userData)) e.preventDefault()
              };
              var eventHandler = {
                  target: target,
                  eventTypeString: eventTypeString,
                  callbackfunc: callbackfunc,
                  handlerFunc: fullscreenChangeEventhandlerFunc,
                  useCapture: useCapture
              };
              return JSEvents.registerOrRemoveHandler(eventHandler)
          };
          var _emscripten_set_fullscreenchange_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => {
              if (!JSEvents.fullscreenEnabled()) return -1;
              target = findEventTarget(target);
              if (!target) return -4;
              registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "webkitfullscreenchange", targetThread);
              return registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "fullscreenchange", targetThread)
          };
          var registerGamepadEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
              if (!JSEvents.gamepadEvent) JSEvents.gamepadEvent = _malloc(1432);
              var gamepadEventHandlerFunc = (e = event) => {
                  var gamepadEvent = JSEvents.gamepadEvent;
                  fillGamepadEventData(gamepadEvent, e["gamepad"]);
                  if (getWasmTableEntry(callbackfunc)(eventTypeId, gamepadEvent, userData)) e.preventDefault()
              };
              var eventHandler = {
                  target: findEventTarget(target),
                  allowsDeferredCalls: true,
                  eventTypeString: eventTypeString,
                  callbackfunc: callbackfunc,
                  handlerFunc: gamepadEventHandlerFunc,
                  useCapture: useCapture
              };
              return JSEvents.registerOrRemoveHandler(eventHandler)
          };
          var _emscripten_set_gamepadconnected_callback_on_thread = (userData, useCapture, callbackfunc, targetThread) => {
              if (_emscripten_sample_gamepad_data()) return -1;
              return registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 26, "gamepadconnected", targetThread)
          };
          var _emscripten_set_gamepaddisconnected_callback_on_thread = (userData, useCapture, callbackfunc, targetThread) => {
              if (_emscripten_sample_gamepad_data()) return -1;
              return registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 27, "gamepaddisconnected", targetThread)
          };
          var registerKeyEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
              if (!JSEvents.keyEvent) JSEvents.keyEvent = _malloc(176);
              var keyEventHandlerFunc = e => {
                  var keyEventData = JSEvents.keyEvent;
                  HEAPF64[keyEventData >> 3] = e.timeStamp;
                  var idx = keyEventData >> 2;
                  HEAP32[idx + 2] = e.location;
                  HEAP32[idx + 3] = e.ctrlKey;
                  HEAP32[idx + 4] = e.shiftKey;
                  HEAP32[idx + 5] = e.altKey;
                  HEAP32[idx + 6] = e.metaKey;
                  HEAP32[idx + 7] = e.repeat;
                  HEAP32[idx + 8] = e.charCode;
                  HEAP32[idx + 9] = e.keyCode;
                  HEAP32[idx + 10] = e.which;
                  stringToUTF8(e.key || "", keyEventData + 44, 32);
                  stringToUTF8(e.code || "", keyEventData + 76, 32);
                  stringToUTF8(e.char || "", keyEventData + 108, 32);
                  stringToUTF8(e.locale || "", keyEventData + 140, 32);
                  if (getWasmTableEntry(callbackfunc)(eventTypeId, keyEventData, userData)) e.preventDefault()
              };
              var eventHandler = {
                  target: findEventTarget(target),
                  eventTypeString: eventTypeString,
                  callbackfunc: callbackfunc,
                  handlerFunc: keyEventHandlerFunc,
                  useCapture: useCapture
              };
              return JSEvents.registerOrRemoveHandler(eventHandler)
          };
          var _emscripten_set_keydown_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerKeyEventCallback(target, userData, useCapture, callbackfunc, 2, "", targetThread);
          var _emscripten_set_keypress_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerKeyEventCallback(target, userData, useCapture, callbackfunc, 1, "", targetThread);
          var _emscripten_set_keyup_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerKeyEventCallback(target, userData, useCapture, callbackfunc, 3, "", targetThread);
          var _emscripten_set_main_loop = (func, fps, simulateInfiniteLoop) => {
              var browserIterationFunc = getWasmTableEntry(func);
              setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop)
          };
          var fillMouseEventData = (eventStruct, e, target) => {
              HEAPF64[eventStruct >> 3] = e.timeStamp;
              var idx = eventStruct >> 2;
              HEAP32[idx + 2] = e.screenX;
              HEAP32[idx + 3] = e.screenY;
              HEAP32[idx + 4] = e.clientX;
              HEAP32[idx + 5] = e.clientY;
              HEAP32[idx + 6] = e.ctrlKey;
              HEAP32[idx + 7] = e.shiftKey;
              HEAP32[idx + 8] = e.altKey;
              HEAP32[idx + 9] = e.metaKey;
              HEAP16[idx * 2 + 20] = e.button;
              HEAP16[idx * 2 + 21] = e.buttons;
              HEAP32[idx + 11] = e["movementX"];
              HEAP32[idx + 12] = e["movementY"];
              var rect = getBoundingClientRect(target);
              HEAP32[idx + 13] = e.clientX - rect.left;
              HEAP32[idx + 14] = e.clientY - rect.top
          };
          var registerMouseEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
              if (!JSEvents.mouseEvent) JSEvents.mouseEvent = _malloc(72);
              target = findEventTarget(target);
              var mouseEventHandlerFunc = (e = event) => {
                  fillMouseEventData(JSEvents.mouseEvent, e, target);
                  if (getWasmTableEntry(callbackfunc)(eventTypeId, JSEvents.mouseEvent, userData)) e.preventDefault()
              };
              var eventHandler = {
                  target: target,
                  allowsDeferredCalls: eventTypeString != "mousemove" && eventTypeString != "mouseenter" && eventTypeString != "mouseleave",
                  eventTypeString: eventTypeString,
                  callbackfunc: callbackfunc,
                  handlerFunc: mouseEventHandlerFunc,
                  useCapture: useCapture
              };
              return JSEvents.registerOrRemoveHandler(eventHandler)
          };
          var _emscripten_set_mousedown_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerMouseEventCallback(target, userData, useCapture, callbackfunc, 5, "mousedown", targetThread);
          var _emscripten_set_mouseenter_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerMouseEventCallback(target, userData, useCapture, callbackfunc, 33, "mouseenter", targetThread);
          var _emscripten_set_mouseleave_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerMouseEventCallback(target, userData, useCapture, callbackfunc, 34, "mouseleave", targetThread);
          var _emscripten_set_mousemove_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerMouseEventCallback(target, userData, useCapture, callbackfunc, 8, "mousemove", targetThread);
          var _emscripten_set_mouseup_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerMouseEventCallback(target, userData, useCapture, callbackfunc, 6, "mouseup", targetThread);
          var fillPointerlockChangeEventData = eventStruct => {
              var pointerLockElement = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
              var isPointerlocked = !!pointerLockElement;
              HEAP32[eventStruct >> 2] = isPointerlocked;
              var nodeName = JSEvents.getNodeNameForTarget(pointerLockElement);
              var id = pointerLockElement?.id || "";
              stringToUTF8(nodeName, eventStruct + 4, 128);
              stringToUTF8(id, eventStruct + 132, 128)
          };
          var registerPointerlockChangeEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
              if (!JSEvents.pointerlockChangeEvent) JSEvents.pointerlockChangeEvent = _malloc(260);
              var pointerlockChangeEventHandlerFunc = (e = event) => {
                  var pointerlockChangeEvent = JSEvents.pointerlockChangeEvent;
                  fillPointerlockChangeEventData(pointerlockChangeEvent);
                  if (getWasmTableEntry(callbackfunc)(eventTypeId, pointerlockChangeEvent, userData)) e.preventDefault()
              };
              var eventHandler = {
                  target: target,
                  eventTypeString: eventTypeString,
                  callbackfunc: callbackfunc,
                  handlerFunc: pointerlockChangeEventHandlerFunc,
                  useCapture: useCapture
              };
              return JSEvents.registerOrRemoveHandler(eventHandler)
          };
          var _emscripten_set_pointerlockchange_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => {
              if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
                  return -1
              }
              target = findEventTarget(target);
              if (!target) return -4;
              registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "mozpointerlockchange", targetThread);
              registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "webkitpointerlockchange", targetThread);
              registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "mspointerlockchange", targetThread);
              return registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "pointerlockchange", targetThread)
          };
          var registerUiEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
              if (!JSEvents.uiEvent) JSEvents.uiEvent = _malloc(36);
              target = findEventTarget(target);
              var uiEventHandlerFunc = (e = event) => {
                  if (e.target != target) {
                      return
                  }
                  var b = document.body;
                  if (!b) {
                      return
                  }
                  var uiEvent = JSEvents.uiEvent;
                  HEAP32[uiEvent >> 2] = e.detail;
                  HEAP32[uiEvent + 4 >> 2] = b.clientWidth;
                  HEAP32[uiEvent + 8 >> 2] = b.clientHeight;
                  HEAP32[uiEvent + 12 >> 2] = innerWidth;
                  HEAP32[uiEvent + 16 >> 2] = innerHeight;
                  HEAP32[uiEvent + 20 >> 2] = outerWidth;
                  HEAP32[uiEvent + 24 >> 2] = outerHeight;
                  HEAP32[uiEvent + 28 >> 2] = pageXOffset;
                  HEAP32[uiEvent + 32 >> 2] = pageYOffset;
                  if (getWasmTableEntry(callbackfunc)(eventTypeId, uiEvent, userData)) e.preventDefault()
              };
              var eventHandler = {
                  target: target,
                  eventTypeString: eventTypeString,
                  callbackfunc: callbackfunc,
                  handlerFunc: uiEventHandlerFunc,
                  useCapture: useCapture
              };
              return JSEvents.registerOrRemoveHandler(eventHandler)
          };
          var _emscripten_set_resize_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerUiEventCallback(target, userData, useCapture, callbackfunc, 10, "resize", targetThread);
          var registerTouchEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
              if (!JSEvents.touchEvent) JSEvents.touchEvent = _malloc(1696);
              target = findEventTarget(target);
              var touchEventHandlerFunc = e => {
                  var t, touches = {},
                      et = e.touches;
                  for (var i = 0; i < et.length; ++i) {
                      t = et[i];
                      t.isChanged = t.onTarget = 0;
                      touches[t.identifier] = t
                  }
                  for (var i = 0; i < e.changedTouches.length; ++i) {
                      t = e.changedTouches[i];
                      t.isChanged = 1;
                      touches[t.identifier] = t
                  }
                  for (var i = 0; i < e.targetTouches.length; ++i) {
                      touches[e.targetTouches[i].identifier].onTarget = 1
                  }
                  var touchEvent = JSEvents.touchEvent;
                  HEAPF64[touchEvent >> 3] = e.timeStamp;
                  var idx = touchEvent >> 2;
                  HEAP32[idx + 3] = e.ctrlKey;
                  HEAP32[idx + 4] = e.shiftKey;
                  HEAP32[idx + 5] = e.altKey;
                  HEAP32[idx + 6] = e.metaKey;
                  idx += 7;
                  var targetRect = getBoundingClientRect(target);
                  var numTouches = 0;
                  for (var i in touches) {
                      t = touches[i];
                      HEAP32[idx + 0] = t.identifier;
                      HEAP32[idx + 1] = t.screenX;
                      HEAP32[idx + 2] = t.screenY;
                      HEAP32[idx + 3] = t.clientX;
                      HEAP32[idx + 4] = t.clientY;
                      HEAP32[idx + 5] = t.pageX;
                      HEAP32[idx + 6] = t.pageY;
                      HEAP32[idx + 7] = t.isChanged;
                      HEAP32[idx + 8] = t.onTarget;
                      HEAP32[idx + 9] = t.clientX - targetRect.left;
                      HEAP32[idx + 10] = t.clientY - targetRect.top;
                      idx += 13;
                      if (++numTouches > 31) {
                          break
                      }
                  }
                  HEAP32[touchEvent + 8 >> 2] = numTouches;
                  if (getWasmTableEntry(callbackfunc)(eventTypeId, touchEvent, userData)) e.preventDefault()
              };
              var eventHandler = {
                  target: target,
                  allowsDeferredCalls: eventTypeString == "touchstart" || eventTypeString == "touchend",
                  eventTypeString: eventTypeString,
                  callbackfunc: callbackfunc,
                  handlerFunc: touchEventHandlerFunc,
                  useCapture: useCapture
              };
              return JSEvents.registerOrRemoveHandler(eventHandler)
          };
          var _emscripten_set_touchcancel_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerTouchEventCallback(target, userData, useCapture, callbackfunc, 25, "touchcancel", targetThread);
          var _emscripten_set_touchend_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerTouchEventCallback(target, userData, useCapture, callbackfunc, 23, "touchend", targetThread);
          var _emscripten_set_touchmove_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerTouchEventCallback(target, userData, useCapture, callbackfunc, 24, "touchmove", targetThread);
          var _emscripten_set_touchstart_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerTouchEventCallback(target, userData, useCapture, callbackfunc, 22, "touchstart", targetThread);
          var fillVisibilityChangeEventData = eventStruct => {
              var visibilityStates = ["hidden", "visible", "prerender", "unloaded"];
              var visibilityState = visibilityStates.indexOf(document.visibilityState);
              HEAP32[eventStruct >> 2] = document.hidden;
              HEAP32[eventStruct + 4 >> 2] = visibilityState
          };
          var registerVisibilityChangeEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
              if (!JSEvents.visibilityChangeEvent) JSEvents.visibilityChangeEvent = _malloc(8);
              var visibilityChangeEventHandlerFunc = (e = event) => {
                  var visibilityChangeEvent = JSEvents.visibilityChangeEvent;
                  fillVisibilityChangeEventData(visibilityChangeEvent);
                  if (getWasmTableEntry(callbackfunc)(eventTypeId, visibilityChangeEvent, userData)) e.preventDefault()
              };
              var eventHandler = {
                  target: target,
                  eventTypeString: eventTypeString,
                  callbackfunc: callbackfunc,
                  handlerFunc: visibilityChangeEventHandlerFunc,
                  useCapture: useCapture
              };
              return JSEvents.registerOrRemoveHandler(eventHandler)
          };
          var _emscripten_set_visibilitychange_callback_on_thread = (userData, useCapture, callbackfunc, targetThread) => {
              if (!specialHTMLTargets[1]) {
                  return -4
              }
              return registerVisibilityChangeEventCallback(specialHTMLTargets[1], userData, useCapture, callbackfunc, 21, "visibilitychange", targetThread)
          };
          var registerWheelEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
              if (!JSEvents.wheelEvent) JSEvents.wheelEvent = _malloc(104);
              var wheelHandlerFunc = (e = event) => {
                  var wheelEvent = JSEvents.wheelEvent;
                  fillMouseEventData(wheelEvent, e, target);
                  HEAPF64[wheelEvent + 72 >> 3] = e["deltaX"];
                  HEAPF64[wheelEvent + 80 >> 3] = e["deltaY"];
                  HEAPF64[wheelEvent + 88 >> 3] = e["deltaZ"];
                  HEAP32[wheelEvent + 96 >> 2] = e["deltaMode"];
                  if (getWasmTableEntry(callbackfunc)(eventTypeId, wheelEvent, userData)) e.preventDefault()
              };
              var eventHandler = {
                  target: target,
                  allowsDeferredCalls: true,
                  eventTypeString: eventTypeString,
                  callbackfunc: callbackfunc,
                  handlerFunc: wheelHandlerFunc,
                  useCapture: useCapture
              };
              return JSEvents.registerOrRemoveHandler(eventHandler)
          };
          var _emscripten_set_wheel_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => {
              target = findEventTarget(target);
              if (!target) return -4;
              if (typeof target.onwheel != "undefined") {
                  return registerWheelEventCallback(target, userData, useCapture, callbackfunc, 9, "wheel", targetThread)
              } else {
                  return -1
              }
          };
          var _emscripten_set_window_title = title => document.title = UTF8ToString(title);
          var _emscripten_sleep = () => {
              throw "Please compile your program with async support in order to use asynchronous operations like emscripten_sleep"
          };
          var ENV = {};
          var getExecutableName = () => thisProgram || "./this.program";
          var getEnvStrings = () => {
              if (!getEnvStrings.strings) {
                  var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
                  var env = {
                      "USER": "web_user",
                      "LOGNAME": "web_user",
                      "PATH": "/",
                      "PWD": "/",
                      "HOME": "/home/web_user",
                      "LANG": lang,
                      "_": getExecutableName()
                  };
                  for (var x in ENV) {
                      if (ENV[x] === undefined) delete env[x];
                      else env[x] = ENV[x]
                  }
                  var strings = [];
                  for (var x in env) {
                      strings.push(`${x}=${env[x]}`)
                  }
                  getEnvStrings.strings = strings
              }
              return getEnvStrings.strings
          };
          var stringToAscii = (str, buffer) => {
              for (var i = 0; i < str.length; ++i) {
                  HEAP8[buffer++ >> 0] = str.charCodeAt(i)
              }
              HEAP8[buffer >> 0] = 0
          };
          var _environ_get = (__environ, environ_buf) => {
              var bufSize = 0;
              getEnvStrings().forEach((string, i) => {
                  var ptr = environ_buf + bufSize;
                  HEAPU32[__environ + i * 4 >> 2] = ptr;
                  stringToAscii(string, ptr);
                  bufSize += string.length + 1
              });
              return 0
          };
          var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
              var strings = getEnvStrings();
              HEAPU32[penviron_count >> 2] = strings.length;
              var bufSize = 0;
              strings.forEach(string => bufSize += string.length + 1);
              HEAPU32[penviron_buf_size >> 2] = bufSize;
              return 0
          };

          function _fd_close(fd) {
              try {
                  var stream = SYSCALLS.getStreamFromFD(fd);
                  FS.close(stream);
                  return 0
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return e.errno
              }
          }
          var doReadv = (stream, iov, iovcnt, offset) => {
              var ret = 0;
              for (var i = 0; i < iovcnt; i++) {
                  var ptr = HEAPU32[iov >> 2];
                  var len = HEAPU32[iov + 4 >> 2];
                  iov += 8;
                  var curr = FS.read(stream, HEAP8, ptr, len, offset);
                  if (curr < 0) return -1;
                  ret += curr;
                  if (curr < len) break;
                  if (typeof offset !== "undefined") {
                      offset += curr
                  }
              }
              return ret
          };

          function _fd_read(fd, iov, iovcnt, pnum) {
              try {
                  var stream = SYSCALLS.getStreamFromFD(fd);
                  var num = doReadv(stream, iov, iovcnt);
                  HEAPU32[pnum >> 2] = num;
                  return 0
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return e.errno
              }
          }

          function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
              var offset = convertI32PairToI53Checked(offset_low, offset_high);
              try {
                  if (isNaN(offset)) return 61;
                  var stream = SYSCALLS.getStreamFromFD(fd);
                  FS.llseek(stream, offset, whence);
                  tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
                  if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
                  return 0
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return e.errno
              }
          }

          function _fd_sync(fd) {
              try {
                  var stream = SYSCALLS.getStreamFromFD(fd);
                  if (stream.stream_ops?.fsync) {
                      return stream.stream_ops.fsync(stream)
                  }
                  return 0
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return e.errno
              }
          }
          var doWritev = (stream, iov, iovcnt, offset) => {
              var ret = 0;
              for (var i = 0; i < iovcnt; i++) {
                  var ptr = HEAPU32[iov >> 2];
                  var len = HEAPU32[iov + 4 >> 2];
                  iov += 8;
                  var curr = FS.write(stream, HEAP8, ptr, len, offset);
                  if (curr < 0) return -1;
                  ret += curr;
                  if (typeof offset !== "undefined") {
                      offset += curr
                  }
              }
              return ret
          };

          function _fd_write(fd, iov, iovcnt, pnum) {
              try {
                  var stream = SYSCALLS.getStreamFromFD(fd);
                  var num = doWritev(stream, iov, iovcnt);
                  HEAPU32[pnum >> 2] = num;
                  return 0
              } catch (e) {
                  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
                  return e.errno
              }
          }
          var getCFunc = ident => {
              var func = Module["_" + ident];
              return func
          };
          var writeArrayToMemory = (array, buffer) => {
              HEAP8.set(array, buffer)
          };
          var ccall = (ident, returnType, argTypes, args, opts) => {
              var toC = {
                  "string": str => {
                      var ret = 0;
                      if (str !== null && str !== undefined && str !== 0) {
                          ret = stringToUTF8OnStack(str)
                      }
                      return ret
                  },
                  "array": arr => {
                      var ret = stackAlloc(arr.length);
                      writeArrayToMemory(arr, ret);
                      return ret
                  }
              };

              function convertReturnValue(ret) {
                  if (returnType === "string") {
                      return UTF8ToString(ret)
                  }
                  if (returnType === "boolean") return Boolean(ret);
                  return ret
              }
              var func = getCFunc(ident);
              var cArgs = [];
              var stack = 0;
              if (args) {
                  for (var i = 0; i < args.length; i++) {
                      var converter = toC[argTypes[i]];
                      if (converter) {
                          if (stack === 0) stack = stackSave();
                          cArgs[i] = converter(args[i])
                      } else {
                          cArgs[i] = args[i]
                      }
                  }
              }
              var ret = func.apply(null, cArgs);

              function onDone(ret) {
                  if (stack !== 0) stackRestore(stack);
                  return convertReturnValue(ret)
              }
              ret = onDone(ret);
              return ret
          };
          var cwrap = (ident, returnType, argTypes, opts) => {
              var numericArgs = !argTypes || argTypes.every(type => type === "number" || type === "boolean");
              var numericRet = returnType !== "string";
              if (numericRet && numericArgs && !opts) {
                  return getCFunc(ident)
              }
              return function() {
                  return ccall(ident, returnType, argTypes, arguments, opts)
              }
          };
          var uleb128Encode = (n, target) => {
              if (n < 128) {
                  target.push(n)
              } else {
                  target.push(n % 128 | 128, n >> 7)
              }
          };
          var sigToWasmTypes = sig => {
              var typeNames = {
                  "i": "i32",
                  "j": "i64",
                  "f": "f32",
                  "d": "f64",
                  "e": "externref",
                  "p": "i32"
              };
              var type = {
                  parameters: [],
                  results: sig[0] == "v" ? [] : [typeNames[sig[0]]]
              };
              for (var i = 1; i < sig.length; ++i) {
                  type.parameters.push(typeNames[sig[i]])
              }
              return type
          };
          var generateFuncType = (sig, target) => {
              var sigRet = sig.slice(0, 1);
              var sigParam = sig.slice(1);
              var typeCodes = {
                  "i": 127,
                  "p": 127,
                  "j": 126,
                  "f": 125,
                  "d": 124,
                  "e": 111
              };
              target.push(96);
              uleb128Encode(sigParam.length, target);
              for (var i = 0; i < sigParam.length; ++i) {
                  target.push(typeCodes[sigParam[i]])
              }
              if (sigRet == "v") {
                  target.push(0)
              } else {
                  target.push(1, typeCodes[sigRet])
              }
          };
          var convertJsFunctionToWasm = (func, sig) => {
              if (typeof WebAssembly.Function == "function") {
                  return new WebAssembly.Function(sigToWasmTypes(sig), func)
              }
              var typeSectionBody = [1];
              generateFuncType(sig, typeSectionBody);
              var bytes = [0, 97, 115, 109, 1, 0, 0, 0, 1];
              uleb128Encode(typeSectionBody.length, bytes);
              bytes.push.apply(bytes, typeSectionBody);
              bytes.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
              var module = new WebAssembly.Module(new Uint8Array(bytes));
              var instance = new WebAssembly.Instance(module, {
                  "e": {
                      "f": func
                  }
              });
              var wrappedFunc = instance.exports["f"];
              return wrappedFunc
          };
          var updateTableMap = (offset, count) => {
              if (functionsInTableMap) {
                  for (var i = offset; i < offset + count; i++) {
                      var item = getWasmTableEntry(i);
                      if (item) {
                          functionsInTableMap.set(item, i)
                      }
                  }
              }
          };
          var functionsInTableMap;
          var getFunctionAddress = func => {
              if (!functionsInTableMap) {
                  functionsInTableMap = new WeakMap;
                  updateTableMap(0, wasmTable.length)
              }
              return functionsInTableMap.get(func) || 0
          };
          var freeTableIndexes = [];
          var getEmptyTableSlot = () => {
              if (freeTableIndexes.length) {
                  return freeTableIndexes.pop()
              }
              try {
                  wasmTable.grow(1)
              } catch (err) {
                  if (!(err instanceof RangeError)) {
                      throw err
                  }
                  throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."
              }
              return wasmTable.length - 1
          };
          var setWasmTableEntry = (idx, func) => {
              wasmTable.set(idx, func);
              wasmTableMirror[idx] = wasmTable.get(idx)
          };
          var addFunction = (func, sig) => {
              var rtn = getFunctionAddress(func);
              if (rtn) {
                  return rtn
              }
              var ret = getEmptyTableSlot();
              try {
                  setWasmTableEntry(ret, func)
              } catch (err) {
                  if (!(err instanceof TypeError)) {
                      throw err
                  }
                  var wrapped = convertJsFunctionToWasm(func, sig);
                  setWasmTableEntry(ret, wrapped)
              }
              functionsInTableMap.set(func, ret);
              return ret
          };
          var removeFunction = index => {
              functionsInTableMap.delete(getWasmTableEntry(index));
              setWasmTableEntry(index, null);
              freeTableIndexes.push(index)
          };
          var FSNode = function(parent, name, mode, rdev) {
              if (!parent) {
                  parent = this
              }
              this.parent = parent;
              this.mount = parent.mount;
              this.mounted = null;
              this.id = FS.nextInode++;
              this.name = name;
              this.mode = mode;
              this.node_ops = {};
              this.stream_ops = {};
              this.rdev = rdev
          };
          var readMode = 292 | 73;
          var writeMode = 146;
          Object.defineProperties(FSNode.prototype, {
              read: {
                  get: function() {
                      return (this.mode & readMode) === readMode
                  },
                  set: function(val) {
                      val ? this.mode |= readMode : this.mode &= ~readMode
                  }
              },
              write: {
                  get: function() {
                      return (this.mode & writeMode) === writeMode
                  },
                  set: function(val) {
                      val ? this.mode |= writeMode : this.mode &= ~writeMode
                  }
              },
              isFolder: {
                  get: function() {
                      return FS.isDir(this.mode)
                  }
              },
              isDevice: {
                  get: function() {
                      return FS.isChrdev(this.mode)
                  }
              }
          });
          FS.FSNode = FSNode;
          FS.createPreloadedFile = FS_createPreloadedFile;
          FS.staticInit();
          Module["requestFullscreen"] = Browser.requestFullscreen;
          Module["requestAnimationFrame"] = Browser.requestAnimationFrame;
          Module["setCanvasSize"] = Browser.setCanvasSize;
          Module["pauseMainLoop"] = Browser.mainLoop.pause;
          Module["resumeMainLoop"] = Browser.mainLoop.resume;
          Module["getUserMedia"] = Browser.getUserMedia;
          Module["createContext"] = Browser.createContext;
          var preloadedImages = {};
          var preloadedAudios = {};
          var GLctx;
          for (var i = 0; i < 32; ++i) tempFixedLengthArray.push(new Array(i));
          var miniTempWebGLFloatBuffersStorage = new Float32Array(288);
          for (var i = 0; i < 288; ++i) {
              miniTempWebGLFloatBuffers[i] = miniTempWebGLFloatBuffersStorage.subarray(0, i + 1)
          }
          var miniTempWebGLIntBuffersStorage = new Int32Array(288);
          for (var i = 0; i < 288; ++i) {
              miniTempWebGLIntBuffers[i] = miniTempWebGLIntBuffersStorage.subarray(0, i + 1)
          }
          var wasmImports = {
              P: ___syscall_fcntl64,
              sb: ___syscall_fstat64,
              ab: ___syscall_ftruncate64,
              nb: ___syscall_getcwd,
              jb: ___syscall_getdents64,
              tb: ___syscall_ioctl,
              pb: ___syscall_lstat64,
              kb: ___syscall_mkdirat,
              qb: ___syscall_newfstatat,
              Q: ___syscall_openat,
              ib: ___syscall_readlinkat,
              gb: ___syscall_rmdir,
              rb: ___syscall_stat64,
              hb: ___syscall_unlinkat,
              eb: ___syscall_utimensat,
              ub: __emscripten_get_now_is_monotonic,
              bb: __emscripten_throw_longjmp,
              Za: __localtime_js,
              _a: __mktime_js,
              Wa: __mmap_js,
              Xa: __msync_js,
              Ya: __munmap_js,
              fb: __tzset_js,
              a: _abort,
              Ra: _eglBindAPI,
              Va: _eglChooseConfig,
              Ia: _eglCreateContext,
              Ka: _eglCreateWindowSurface,
              Ja: _eglDestroyContext,
              La: _eglDestroySurface,
              cb: _eglGetConfigAttrib,
              N: _eglGetDisplay,
              Ha: _eglGetError,
              Ta: _eglInitialize,
              Ma: _eglMakeCurrent,
              Ga: _eglQueryString,
              Na: _eglSwapBuffers,
              Oa: _eglSwapInterval,
              Ua: _eglTerminate,
              Qa: _eglWaitGL,
              Pa: _eglWaitNative,
              i: _emscripten_asm_const_int,
              b: _emscripten_asm_const_int_sync_on_main_thread,
              R: _emscripten_date_now,
              Aa: _emscripten_exit_fullscreen,
              Ea: _emscripten_exit_pointerlock,
              h: _emscripten_get_device_pixel_ratio,
              e: _emscripten_get_element_css_size,
              U: _emscripten_get_gamepad_status,
              Z: _emscripten_get_main_loop_timing,
              p: _emscripten_get_now,
              cc: _emscripten_get_num_gamepads,
              Fa: _emscripten_get_screen_size,
              ga: _emscripten_glActiveTexture,
              fa: _emscripten_glAttachShader,
              wa: _emscripten_glBeginQueryEXT,
              ea: _emscripten_glBindAttribLocation,
              da: _emscripten_glBindBuffer,
              ca: _emscripten_glBindFramebuffer,
              ba: _emscripten_glBindRenderbuffer,
              aa: _emscripten_glBindTexture,
              oa: _emscripten_glBindVertexArrayOES,
              $: _emscripten_glBlendColor,
              Zd: _emscripten_glBlendEquation,
              Yd: _emscripten_glBlendEquationSeparate,
              Xd: _emscripten_glBlendFunc,
              Wd: _emscripten_glBlendFuncSeparate,
              Vd: _emscripten_glBufferData,
              Ud: _emscripten_glBufferSubData,
              Td: _emscripten_glCheckFramebufferStatus,
              Sd: _emscripten_glClear,
              Rd: _emscripten_glClearColor,
              Qd: _emscripten_glClearDepthf,
              Pd: _emscripten_glClearStencil,
              Od: _emscripten_glColorMask,
              Nd: _emscripten_glCompileShader,
              Md: _emscripten_glCompressedTexImage2D,
              Ld: _emscripten_glCompressedTexSubImage2D,
              Kd: _emscripten_glCopyTexImage2D,
              Jd: _emscripten_glCopyTexSubImage2D,
              Id: _emscripten_glCreateProgram,
              Hd: _emscripten_glCreateShader,
              Gd: _emscripten_glCullFace,
              Fd: _emscripten_glDeleteBuffers,
              Ed: _emscripten_glDeleteFramebuffers,
              Dd: _emscripten_glDeleteProgram,
              ya: _emscripten_glDeleteQueriesEXT,
              Cd: _emscripten_glDeleteRenderbuffers,
              Bd: _emscripten_glDeleteShader,
              Ad: _emscripten_glDeleteTextures,
              na: _emscripten_glDeleteVertexArraysOES,
              zd: _emscripten_glDepthFunc,
              yd: _emscripten_glDepthMask,
              xd: _emscripten_glDepthRangef,
              wd: _emscripten_glDetachShader,
              ud: _emscripten_glDisable,
              td: _emscripten_glDisableVertexAttribArray,
              sd: _emscripten_glDrawArrays,
              ja: _emscripten_glDrawArraysInstancedANGLE,
              ka: _emscripten_glDrawBuffersWEBGL,
              rd: _emscripten_glDrawElements,
              ia: _emscripten_glDrawElementsInstancedANGLE,
              qd: _emscripten_glEnable,
              pd: _emscripten_glEnableVertexAttribArray,
              va: _emscripten_glEndQueryEXT,
              od: _emscripten_glFinish,
              nd: _emscripten_glFlush,
              md: _emscripten_glFramebufferRenderbuffer,
              ld: _emscripten_glFramebufferTexture2D,
              kd: _emscripten_glFrontFace,
              jd: _emscripten_glGenBuffers,
              hd: _emscripten_glGenFramebuffers,
              za: _emscripten_glGenQueriesEXT,
              gd: _emscripten_glGenRenderbuffers,
              fd: _emscripten_glGenTextures,
              ma: _emscripten_glGenVertexArraysOES,
              id: _emscripten_glGenerateMipmap,
              ed: _emscripten_glGetActiveAttrib,
              dd: _emscripten_glGetActiveUniform,
              cd: _emscripten_glGetAttachedShaders,
              bd: _emscripten_glGetAttribLocation,
              ad: _emscripten_glGetBooleanv,
              $c: _emscripten_glGetBufferParameteriv,
              _c: _emscripten_glGetError,
              Zc: _emscripten_glGetFloatv,
              Yc: _emscripten_glGetFramebufferAttachmentParameteriv,
              Xc: _emscripten_glGetIntegerv,
              Vc: _emscripten_glGetProgramInfoLog,
              Wc: _emscripten_glGetProgramiv,
              qa: _emscripten_glGetQueryObjecti64vEXT,
              sa: _emscripten_glGetQueryObjectivEXT,
              pa: _emscripten_glGetQueryObjectui64vEXT,
              ra: _emscripten_glGetQueryObjectuivEXT,
              ta: _emscripten_glGetQueryivEXT,
              Uc: _emscripten_glGetRenderbufferParameteriv,
              Rc: _emscripten_glGetShaderInfoLog,
              Qc: _emscripten_glGetShaderPrecisionFormat,
              Pc: _emscripten_glGetShaderSource,
              Tc: _emscripten_glGetShaderiv,
              Oc: _emscripten_glGetString,
              Nc: _emscripten_glGetTexParameterfv,
              Mc: _emscripten_glGetTexParameteriv,
              Jc: _emscripten_glGetUniformLocation,
              Lc: _emscripten_glGetUniformfv,
              Kc: _emscripten_glGetUniformiv,
              Fc: _emscripten_glGetVertexAttribPointerv,
              Ic: _emscripten_glGetVertexAttribfv,
              Gc: _emscripten_glGetVertexAttribiv,
              Ec: _emscripten_glHint,
              Dc: _emscripten_glIsBuffer,
              Cc: _emscripten_glIsEnabled,
              Bc: _emscripten_glIsFramebuffer,
              Ac: _emscripten_glIsProgram,
              xa: _emscripten_glIsQueryEXT,
              zc: _emscripten_glIsRenderbuffer,
              yc: _emscripten_glIsShader,
              xc: _emscripten_glIsTexture,
              la: _emscripten_glIsVertexArrayOES,
              wc: _emscripten_glLineWidth,
              vc: _emscripten_glLinkProgram,
              uc: _emscripten_glPixelStorei,
              tc: _emscripten_glPolygonOffset,
              ua: _emscripten_glQueryCounterEXT,
              sc: _emscripten_glReadPixels,
              rc: _emscripten_glReleaseShaderCompiler,
              qc: _emscripten_glRenderbufferStorage,
              pc: _emscripten_glSampleCoverage,
              oc: _emscripten_glScissor,
              nc: _emscripten_glShaderBinary,
              mc: _emscripten_glShaderSource,
              lc: _emscripten_glStencilFunc,
              kc: _emscripten_glStencilFuncSeparate,
              jc: _emscripten_glStencilMask,
              ic: _emscripten_glStencilMaskSeparate,
              hc: _emscripten_glStencilOp,
              gc: _emscripten_glStencilOpSeparate,
              fc: _emscripten_glTexImage2D,
              ec: _emscripten_glTexParameterf,
              dc: _emscripten_glTexParameterfv,
              bc: _emscripten_glTexParameteri,
              ac: _emscripten_glTexParameteriv,
              $b: _emscripten_glTexSubImage2D,
              _b: _emscripten_glUniform1f,
              Zb: _emscripten_glUniform1fv,
              Yb: _emscripten_glUniform1i,
              Xb: _emscripten_glUniform1iv,
              Wb: _emscripten_glUniform2f,
              Vb: _emscripten_glUniform2fv,
              Ub: _emscripten_glUniform2i,
              Tb: _emscripten_glUniform2iv,
              Sb: _emscripten_glUniform3f,
              Rb: _emscripten_glUniform3fv,
              Qb: _emscripten_glUniform3i,
              Pb: _emscripten_glUniform3iv,
              Ob: _emscripten_glUniform4f,
              Nb: _emscripten_glUniform4fv,
              Mb: _emscripten_glUniform4i,
              Lb: _emscripten_glUniform4iv,
              Kb: _emscripten_glUniformMatrix2fv,
              Jb: _emscripten_glUniformMatrix3fv,
              Ib: _emscripten_glUniformMatrix4fv,
              Hb: _emscripten_glUseProgram,
              Gb: _emscripten_glValidateProgram,
              Fb: _emscripten_glVertexAttrib1f,
              Eb: _emscripten_glVertexAttrib1fv,
              Db: _emscripten_glVertexAttrib2f,
              Cb: _emscripten_glVertexAttrib2fv,
              Bb: _emscripten_glVertexAttrib3f,
              Ab: _emscripten_glVertexAttrib3fv,
              zb: _emscripten_glVertexAttrib4f,
              yb: _emscripten_glVertexAttrib4fv,
              ha: _emscripten_glVertexAttribDivisorANGLE,
              xb: _emscripten_glVertexAttribPointer,
              wb: _emscripten_glViewport,
              o: _emscripten_has_asyncify,
              vb: _emscripten_memcpy_js,
              V: _emscripten_pause_main_loop,
              Ba: _emscripten_request_fullscreen_strategy,
              L: _emscripten_request_pointerlock,
              db: _emscripten_resize_heap,
              M: _emscripten_resume_main_loop,
              W: _emscripten_sample_gamepad_data,
              r: _emscripten_set_beforeunload_callback_on_thread,
              D: _emscripten_set_blur_callback_on_thread,
              g: _emscripten_set_canvas_element_size,
              l: _emscripten_set_element_css_size,
              E: _emscripten_set_focus_callback_on_thread,
              u: _emscripten_set_fullscreenchange_callback_on_thread,
              T: _emscripten_set_gamepadconnected_callback_on_thread,
              S: _emscripten_set_gamepaddisconnected_callback_on_thread,
              x: _emscripten_set_keydown_callback_on_thread,
              v: _emscripten_set_keypress_callback_on_thread,
              w: _emscripten_set_keyup_callback_on_thread,
              Da: _emscripten_set_main_loop,
              _: _emscripten_set_main_loop_timing,
              J: _emscripten_set_mousedown_callback_on_thread,
              H: _emscripten_set_mouseenter_callback_on_thread,
              G: _emscripten_set_mouseleave_callback_on_thread,
              K: _emscripten_set_mousemove_callback_on_thread,
              I: _emscripten_set_mouseup_callback_on_thread,
              y: _emscripten_set_pointerlockchange_callback_on_thread,
              t: _emscripten_set_resize_callback_on_thread,
              z: _emscripten_set_touchcancel_callback_on_thread,
              B: _emscripten_set_touchend_callback_on_thread,
              A: _emscripten_set_touchmove_callback_on_thread,
              C: _emscripten_set_touchstart_callback_on_thread,
              s: _emscripten_set_visibilitychange_callback_on_thread,
              F: _emscripten_set_wheel_callback_on_thread,
              Ca: _emscripten_set_window_title,
              m: _emscripten_sleep,
              lb: _environ_get,
              mb: _environ_sizes_get,
              Sa: _exit,
              j: _fd_close,
              O: _fd_read,
              $a: _fd_seek,
              ob: _fd_sync,
              n: _fd_write,
              Y: invoke_ii,
              X: invoke_iii,
              c: invoke_iiii,
              q: invoke_iiiii,
              Sc: invoke_vi,
              d: invoke_vii,
              k: invoke_viii,
              f: invoke_viiii,
              Hc: invoke_viiiii,
              vd: invoke_viiiiiiiii
          };
          var wasmExports = createWasm();
          var ___wasm_call_ctors = () => (___wasm_call_ctors = wasmExports["$d"])();
          var _screenShot = Module["_screenShot"] = a0 => (_screenShot = Module["_screenShot"] = wasmExports["ae"])(a0);
          var _buttonPress = Module["_buttonPress"] = a0 => (_buttonPress = Module["_buttonPress"] = wasmExports["be"])(a0);
          var _buttonUnpress = Module["_buttonUnpress"] = a0 => (_buttonUnpress = Module["_buttonUnpress"] = wasmExports["ce"])(a0);
          var _setVolume = Module["_setVolume"] = a0 => (_setVolume = Module["_setVolume"] = wasmExports["de"])(a0);
          var _getVolume = Module["_getVolume"] = () => (_getVolume = Module["_getVolume"] = wasmExports["ee"])();
          var _getMainLoopTimingMode = Module["_getMainLoopTimingMode"] = () => (_getMainLoopTimingMode = Module["_getMainLoopTimingMode"] = wasmExports["fe"])();
          var _getMainLoopTimingValue = Module["_getMainLoopTimingValue"] = () => (_getMainLoopTimingValue = Module["_getMainLoopTimingValue"] = wasmExports["ge"])();
          var _setMainLoopTiming = Module["_setMainLoopTiming"] = (a0, a1) => (_setMainLoopTiming = Module["_setMainLoopTiming"] = wasmExports["he"])(a0, a1);
          var _quitGame = Module["_quitGame"] = () => (_quitGame = Module["_quitGame"] = wasmExports["ie"])();
          var _quitMgba = Module["_quitMgba"] = () => (_quitMgba = Module["_quitMgba"] = wasmExports["je"])();
          var _quickReload = Module["_quickReload"] = () => (_quickReload = Module["_quickReload"] = wasmExports["ke"])();
          var _pauseGame = Module["_pauseGame"] = () => (_pauseGame = Module["_pauseGame"] = wasmExports["le"])();
          var _resumeGame = Module["_resumeGame"] = () => (_resumeGame = Module["_resumeGame"] = wasmExports["me"])();
          var _setEventEnable = Module["_setEventEnable"] = a0 => (_setEventEnable = Module["_setEventEnable"] = wasmExports["ne"])(a0);
          var _bindKey = Module["_bindKey"] = (a0, a1) => (_bindKey = Module["_bindKey"] = wasmExports["oe"])(a0, a1);
          var _saveState = Module["_saveState"] = a0 => (_saveState = Module["_saveState"] = wasmExports["pe"])(a0);
          var _loadState = Module["_loadState"] = a0 => (_loadState = Module["_loadState"] = wasmExports["qe"])(a0);
          var _autoLoadCheats = Module["_autoLoadCheats"] = () => (_autoLoadCheats = Module["_autoLoadCheats"] = wasmExports["re"])();
          var _loadGame = Module["_loadGame"] = a0 => (_loadGame = Module["_loadGame"] = wasmExports["se"])(a0);
          var _saveStateSlot = Module["_saveStateSlot"] = (a0, a1) => (_saveStateSlot = Module["_saveStateSlot"] = wasmExports["te"])(a0, a1);
          var _loadStateSlot = Module["_loadStateSlot"] = (a0, a1) => (_loadStateSlot = Module["_loadStateSlot"] = wasmExports["ue"])(a0, a1);
          var _setupConstants = Module["_setupConstants"] = () => (_setupConstants = Module["_setupConstants"] = wasmExports["ve"])();
          var _main = Module["_main"] = (a0, a1) => (_main = Module["_main"] = wasmExports["we"])(a0, a1);
          var _malloc = a0 => (_malloc = wasmExports["ye"])(a0);
          var setTempRet0 = a0 => (setTempRet0 = wasmExports["ze"])(a0);
          var _emscripten_builtin_memalign = (a0, a1) => (_emscripten_builtin_memalign = wasmExports["Ae"])(a0, a1);
          var _setThrew = (a0, a1) => (_setThrew = wasmExports["Be"])(a0, a1);
          var stackSave = () => (stackSave = wasmExports["Ce"])();
          var stackRestore = a0 => (stackRestore = wasmExports["De"])(a0);
          var stackAlloc = a0 => (stackAlloc = wasmExports["Ee"])(a0);
          var dynCall_ji = Module["dynCall_ji"] = (a0, a1) => (dynCall_ji = Module["dynCall_ji"] = wasmExports["Fe"])(a0, a1);
          var dynCall_jiji = Module["dynCall_jiji"] = (a0, a1, a2, a3, a4) => (dynCall_jiji = Module["dynCall_jiji"] = wasmExports["Ge"])(a0, a1, a2, a3, a4);
          var dynCall_iiiji = Module["dynCall_iiiji"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iiiji = Module["dynCall_iiiji"] = wasmExports["He"])(a0, a1, a2, a3, a4, a5);
          var dynCall_jii = Module["dynCall_jii"] = (a0, a1, a2) => (dynCall_jii = Module["dynCall_jii"] = wasmExports["Ie"])(a0, a1, a2);
          var _GBAInputInfo = Module["_GBAInputInfo"] = 109888;
          var _binaryName = Module["_binaryName"] = 186960;
          var _projectName = Module["_projectName"] = 186964;
          var _projectVersion = Module["_projectVersion"] = 186968;
          var _gitCommit = Module["_gitCommit"] = 186944;
          var _gitCommitShort = Module["_gitCommitShort"] = 186948;
          var _gitBranch = Module["_gitBranch"] = 186952;
          var _gitRevision = Module["_gitRevision"] = 186956;
          var _GBIORegisterNames = Module["_GBIORegisterNames"] = 49344;
          var _GBSavestateMagic = Module["_GBSavestateMagic"] = 64608;
          var _GBSavestateVersion = Module["_GBSavestateVersion"] = 64612;
          var _GBA_LUX_LEVELS = Module["_GBA_LUX_LEVELS"] = 93104;
          var _GBAVideoObjSizes = Module["_GBAVideoObjSizes"] = 138384;
          var _GBASavestateMagic = Module["_GBASavestateMagic"] = 138176;
          var _GBASavestateVersion = Module["_GBASavestateVersion"] = 138180;

          function invoke_iiiii(index, a1, a2, a3, a4) {
              var sp = stackSave();
              try {
                  return getWasmTableEntry(index)(a1, a2, a3, a4)
              } catch (e) {
                  stackRestore(sp);
                  if (e !== e + 0) throw e;
                  _setThrew(1, 0)
              }
          }

          function invoke_iiii(index, a1, a2, a3) {
              var sp = stackSave();
              try {
                  return getWasmTableEntry(index)(a1, a2, a3)
              } catch (e) {
                  stackRestore(sp);
                  if (e !== e + 0) throw e;
                  _setThrew(1, 0)
              }
          }

          function invoke_vii(index, a1, a2) {
              var sp = stackSave();
              try {
                  getWasmTableEntry(index)(a1, a2)
              } catch (e) {
                  stackRestore(sp);
                  if (e !== e + 0) throw e;
                  _setThrew(1, 0)
              }
          }

          function invoke_viiii(index, a1, a2, a3, a4) {
              var sp = stackSave();
              try {
                  getWasmTableEntry(index)(a1, a2, a3, a4)
              } catch (e) {
                  stackRestore(sp);
                  if (e !== e + 0) throw e;
                  _setThrew(1, 0)
              }
          }

          function invoke_ii(index, a1) {
              var sp = stackSave();
              try {
                  return getWasmTableEntry(index)(a1)
              } catch (e) {
                  stackRestore(sp);
                  if (e !== e + 0) throw e;
                  _setThrew(1, 0)
              }
          }

          function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
              var sp = stackSave();
              try {
                  getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9)
              } catch (e) {
                  stackRestore(sp);
                  if (e !== e + 0) throw e;
                  _setThrew(1, 0)
              }
          }

          function invoke_viii(index, a1, a2, a3) {
              var sp = stackSave();
              try {
                  getWasmTableEntry(index)(a1, a2, a3)
              } catch (e) {
                  stackRestore(sp);
                  if (e !== e + 0) throw e;
                  _setThrew(1, 0)
              }
          }

          function invoke_iii(index, a1, a2) {
              var sp = stackSave();
              try {
                  return getWasmTableEntry(index)(a1, a2)
              } catch (e) {
                  stackRestore(sp);
                  if (e !== e + 0) throw e;
                  _setThrew(1, 0)
              }
          }

          function invoke_vi(index, a1) {
              var sp = stackSave();
              try {
                  getWasmTableEntry(index)(a1)
              } catch (e) {
                  stackRestore(sp);
                  if (e !== e + 0) throw e;
                  _setThrew(1, 0)
              }
          }

          function invoke_viiiii(index, a1, a2, a3, a4, a5) {
              var sp = stackSave();
              try {
                  getWasmTableEntry(index)(a1, a2, a3, a4, a5)
              } catch (e) {
                  stackRestore(sp);
                  if (e !== e + 0) throw e;
                  _setThrew(1, 0)
              }
          }
          Module["cwrap"] = cwrap;
          Module["addFunction"] = addFunction;
          Module["removeFunction"] = removeFunction;
          Module["FS"] = FS;
          var calledRun;
          dependenciesFulfilled = function runCaller() {
              if (!calledRun) run();
              if (!calledRun) dependenciesFulfilled = runCaller
          };

          function callMain() {
              var entryFunction = _main;
              var argc = 0;
              var argv = 0;
              try {
                  var ret = entryFunction(argc, argv);
                  exitJS(ret, true);
                  return ret
              } catch (e) {
                  return handleException(e)
              }
          }

          function run() {
              if (runDependencies > 0) {
                  return
              }
              preRun();
              if (runDependencies > 0) {
                  return
              }

              function doRun() {
                  if (calledRun) return;
                  calledRun = true;
                  Module["calledRun"] = true;
                  if (ABORT) return;
                  initRuntime();
                  preMain();
                  readyPromiseResolve(Module);
                  if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
                  if (shouldRunNow) callMain();
                  postRun()
              }
              if (Module["setStatus"]) {
                  Module["setStatus"]("Running...");
                  setTimeout(function() {
                      setTimeout(function() {
                          Module["setStatus"]("")
                      }, 1);
                      doRun()
                  }, 1)
              } else {
                  doRun()
              }
          }
          if (Module["preInit"]) {
              if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
              while (Module["preInit"].length > 0) {
                  Module["preInit"].pop()()
              }
          }
          var shouldRunNow = true;
          if (Module["noInitialRun"]) shouldRunNow = false;
          run();
          return moduleArg.ready
      }
  );
})();
export default mGBA;