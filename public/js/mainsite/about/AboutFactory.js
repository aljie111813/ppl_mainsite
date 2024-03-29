﻿define(['angular'],function (angular) { 
    angular.module('AboutFactory', []).factory('AboutFactory', aboutFactory);

    function aboutFactory() {

        var committees = [{
            name: "Allen Linatoc",
            image: "public/images/members/allen.jpg",
            links: [
            ],
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name: "Allan Suaco",
            image: "public/images/bm.jpg",
            links: [
            ],
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name: "Dexter Qua",
            image: "public/images/members/dexter.jpg",
            links: [
            ],
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name: "Jemlon Sagarino",
            image: "public/images/members/jemlon.jpg",
            links: [
            ],
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name: "Majesty Amazona",
            image: "public/images/members/majesty.jpg",
            links: [
            ],
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name: "Zee",
            image: "public/images/members/zee.jpg",
            links: [
            ],
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name: "Jason Crisostomo",
            image: "public/images/members/jaeson.jpg",
            links: [
            ],
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        ];

        var devTeamMembers = [{
            name: "Marc Remmel Abiva",
            image: "public/images/members/renmel.jpg",
            links: [
            ],
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name: "Raffy Apurillo",
            image: "public/images/members/raffy.jpg",
            links: [
            ],
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name: "Ruther Bergunia",
            image: "public/images/members/ruther.jpg",
            links: [
            ],
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name: "Kenneth Bolico",
            image: "public/images/members/kenneth.jpg",
            links: [
            ],
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name: "Billious Braga Boquila",
            image: "public/images/members/billious.jpg",
            links: [
            ],
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name: "Analyn Cui Cajocson",
            image: "public/images/members/analyn.jpg",
            links: [
            ],
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name: "Ian Concepcion",
            image: "public/images/members/ian.jpg",
            links: [
            ],
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name: "Regine Grace In",
            image: "public/images/members/regine.jpg",
            links: [
            ],
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name: "Melquidez Lazaro",
            image: "public/images/members/melquidez.jpg",
            links: [
            ],
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            name: "Mon Cedric Reyes",
            image: "public/images/members/mon.jpg",
            links: [
            ],
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        }

        ];

        return {
            getCommittees: function () {
                return committees;
            },
            getDevTeamMembers: function () {
                return devTeamMembers;
            }
        }
    }
});