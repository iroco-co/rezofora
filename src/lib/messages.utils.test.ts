import { expect, it } from 'vitest';
import { messagesArray, messagesHierarchy } from '$lib/messages.utils';

it('messagesHierarchy', () => {
	const actual = messagesHierarchy('bios', {
		bar: () => 'Bar',
		bios_1_name: () => 'Marc',
		bios_1_photo: () => '/foo.bar.png',
		bios_1_bio: () => 'Blah blah blah',
		bios_2_name: () => 'Elise',
		bios_2_photo: () => '/polop.png',
		bios_2_bio: () => 'Blih bluh blouh',
		foo: () => 'Foo'
	});
	expect(actual).toEqual([
		{
			name: 'Marc',
			photo: '/foo.bar.png',
			bio: 'Blah blah blah'
		},
		{
			name: 'Elise',
			photo: '/polop.png',
			bio: 'Blih bluh blouh'
		}
	]);
});

it('messagesHierarchy with snake case suffix', () => {
	const actual = messagesHierarchy('team_members_bios', {
		bar: () => 'Bar',
		team_members_bios_1_name: () => 'Marc',
		team_members_bios_1_photo: () => '/foo.bar.png',
		team_members_bios_1_bio: () => 'Blah blah blah',
		team_members_bios_2_name: () => 'Elise',
		team_members_bios_2_photo: () => '/polop.png',
		team_members_bios_2_bio: () => 'Blih bluh blouh',
		foo: () => 'Foo'
	});
	expect(actual).toEqual([
		{
			name: 'Marc',
			photo: '/foo.bar.png',
			bio: 'Blah blah blah'
		},
		{
			name: 'Elise',
			photo: '/polop.png',
			bio: 'Blih bluh blouh'
		}
	]);
});

it('messagesArray', () => {
	const actual = messagesArray('strengths', {
		bar: () => 'Bar',
		strengths_1: () => '🇫🇷 strengths 1 <strong>Bar</strong>',
		strengths_2: () => '🇫🇷 strengths 2 <strong>Bar</strong>',
		strengths_3: () => '🇫🇷 strengths 3 <strong>Bar</strong>',
		foo: () => 'Foo'
	});
	expect(actual).toStrictEqual([
		'🇫🇷 strengths 1 <strong>Bar</strong>',
		'🇫🇷 strengths 2 <strong>Bar</strong>',
		'🇫🇷 strengths 3 <strong>Bar</strong>'
	]);
});

it('messagesArray with snake case suffix', () => {
	const actual = messagesArray('strength_of_mind', {
		bar: () => 'Bar',
		strength_of_mind_1: () => '🇫🇷 strengths 1 <strong>Bar</strong>',
		strength_of_mind_2: () => '🇫🇷 strengths 2 <strong>Bar</strong>',
		strength_of_mind_3: () => '🇫🇷 strengths 3 <strong>Bar</strong>',
		foo: () => 'Foo'
	});
	expect(actual).toStrictEqual([
		'🇫🇷 strengths 1 <strong>Bar</strong>',
		'🇫🇷 strengths 2 <strong>Bar</strong>',
		'🇫🇷 strengths 3 <strong>Bar</strong>'
	]);
});
