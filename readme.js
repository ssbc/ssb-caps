/**
 * SSB Caps
 * --------
 *
 * This is the "Caps" key for accessing the SSB protocol. It will be updated
 * whenever breaking changes are made. See the secret-handshake paper for a full
 * explanation:
 *
 * http://dominictarr.github.io/secret-handshake-paper/shs.pdf
 *
 * There is nothing special about this value, it was randomly generated in the
 * Node.js REPL with:
 *
 *     crypto.randomBytes(32).toString('base64')
 *
 * This value is presented as a string to be interpreted in base64. To convert
 * from this string to binary (in Node.js):
 *
 *     Buffer.from(require('ssb-caps'), 'base64')
 *
 * If this library updates the Caps string, we MUST issue a new major version.
 *
 * Legal
 * -----
 *
 * Written in 2015 by 'Dominic Tarr' <dominic.tarr@gmail.com>
 * Contributor: Andre Medeiros <andre@staltz.com>
 *
 * To the extent possible under law, the author(s) have dedicated all copyright
 * and related and neighboring rights to this software to the public domain
 * worldwide. This software is distributed without any warranty.
 *
 * You should have received a copy of the CC0 Public Domain Dedication along
 * with this software. If not, see
 * <http://creativecommons.org/publicdomain/zero/1.0/>.
 */

module.exports = '1KHLiKZvAvjbY1ziZEHMXawbCEIM6qwjCDm3VYRan/s=';
